import React, {useState} from "react";
import { EditVaccineStyle } from "./styles";
import { TouchableOpacity, View, Text, TextInput, Image, Modal, Alert , ActivityIndicator} from "react-native";
import DatePicker from 'react-native-date-picker';
import calendarIcon from '../../assets/image/calendar.png';
import { RadioButton } from 'react-native-paper';
import ButtonComponent from '../../components/ButtonComponent';
import NavbarComponent from '../../components/NavbarComponent'
import iconTrash from '../../assets/image/trash.png';
import { useSelector } from 'react-redux';
import { ModalStyle } from './modalStyle';
import { firebase, firestore } from "../../config/FirebaseConfig/firebase";
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import { getStorage, ref, deleteObject, uploadBytes, getDownloadURL } from "firebase/storage";
import FontGlobal from "../../styles/FontGlobal";
import { launchImageLibrary } from "react-native-image-picker";
import moment from "moment";

const EditVaccine = ({navigation}) => {
  const {idRedux, doseRedux, userIdRedux, imageRedux, dateRedux, vaccineRedux, nextDateRedux, latitudeRedux, longitudeRedux} = useSelector(state => state.vaccine);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [datePickerType, setDatePickerType] = useState('');
  const [vaccineDate, setVaccineDate] = useState(dateRedux);
  const [vaccineName, setVaccineName] = useState(vaccineRedux);
  const [dose, setDose] = useState(doseRedux);
  const [profOfVaccination, setProfOfVaccination] = useState('');
  const [imageUri, setImageUri] = useState(imageRedux);
  const [nextVaccinationDate, setNextVaccinationDate] = useState(nextDateRedux);
  const [modalLoading, setModalLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDate = (value) => {
    if(datePickerType === 'vaccineDate') {
      setVaccineDate(moment(value).format("DD/MM/YYYY"));
    }
    else {
      if(vaccineDate === '') {//Verifica se o campo data de vacinação foi preenchido
        alert('Preencha o campo "Data de vacinação"!')
      }
      else {
        const vDate = moment(vaccineDate, "DD-MM-YYYY").format("YYYY-MM-DD");
        const nVDate = moment(value).format("YYYY-MM-DD");
        if(moment(vDate).isAfter(nVDate) || vDate === nVDate) {//compara se a data de Próxima vacinação é inferior ou igual a data de vacinação
          alert('A data da "Proxima vacinação" não pode ser inferior ou igual a "Data de vacinação"!');
        }
        else {
          setNextVaccinationDate(moment(value).format("DD/MM/YYYY"));
        }
      }
    }
  }

  const handleVaccineImage = () => {
    launchImageLibrary({mediaType: 'photo'})
    .then((response) => {
      response.assets.forEach((element) => {
        setProfOfVaccination(element);
        setImageUri(element.uri);
      })
    })
    .catch(() => {
      setProfOfVaccination('');
      setImageUri('');
    })
  }

  const handleDeleteVaccine = () => {
    setModalLoading(true);
    
    const storage =  getStorage(firebase);

    deleteDoc(doc(firestore, "vaccines", idRedux))
    .then(() => {
      deleteObject(ref(storage, `vaccineImage/${userIdRedux}/${idRedux}`))//deletar imagem
      .then(() => {
        setModalLoading(false);
        setModalVisible(false);
        navigation.pop();
      })
      .catch((error) => {
        alert("Vacina deletada, mas ocorreu um erro ao deletar imagem\n" + error.code);
        setModalLoading(false);
        setModalVisible(false);
      })
    })
    .catch((error) => {
      setModalLoading(false);
      setModalVisible(false);
      alert(error.code);
    })
  }

  const handleSavingChanges = async () => {
    setLoading(true);

    const vacc = {
      dose,
      nextVaccinationDate,
      userId: userIdRedux,
      vaccineDate,
      vaccineName,
      vaccineImageUrl: imageRedux,
      latitude: latitudeRedux,
      longitude: longitudeRedux
    }

    if(imageUri !== imageRedux) {//foi alterado a imagem
      const storage = getStorage(firebase);
      const r = await fetch(imageUri);
      const b = await r.blob();

      uploadBytes(ref(storage, `vaccineImage/${userIdRedux}/${idRedux}`), b, {contentType: profOfVaccination.type})
      .then((response) => {
        getDownloadURL(response.ref)
        .then((url) => {
          vacc.vaccineImageUrl = url;
          setDoc(doc(firestore, 'vaccines', idRedux), vacc)
          .then(() => {
            setLoading(false);
            navigation.pop();
          })
          .catch((error) => {
            setLoading(false);
            alert(error.code)
          });
        })
        .catch((error) => {
          alert(error.code);
          setLoading(false);
        })
      })
      .catch((error) => {
        alert(error.code);
        setLoading(false);
      })
    }
    else {
      setDoc(doc(firestore, 'vaccines', idRedux), vacc)
      .then(() => {
        setLoading(false);
        navigation.pop();
      })
      .catch((error) => {
        setLoading(false);
        alert(error.code)
      });
    }
  }

  return(
    <>
      <NavbarComponent navigation={navigation} status={'logged'} navbarScreen={'Editar vacina'} />
      <View style={EditVaccineStyle.main}>
      <View style={EditVaccineStyle.mainContainer1}>
          <View style={EditVaccineStyle.dataContainer}>
            <Text style={[EditVaccineStyle.labelContainer, EditVaccineStyle.labelStyle, FontGlobal.AveriaRegular]}>Data de vacinação</Text>
            <TouchableOpacity onPress={() => {setOpen(true), setDatePickerType('vaccineDate')}} style={EditVaccineStyle.dateStyle}>
              <Text style={[EditVaccineStyle.dateText, FontGlobal.AveriaRegular]}>{vaccineDate}</Text>
              <Image style={EditVaccineStyle.calendarIcon} source={calendarIcon} />
            </TouchableOpacity>
          </View>
          <View style={EditVaccineStyle.dataContainer}>
            <Text style={[EditVaccineStyle.labelContainer, EditVaccineStyle.labelStyle, FontGlobal.AveriaRegular]}>Vacina</Text>
            <TextInput onChangeText={(value) => setVaccineName(value)} value={vaccineName} style={[EditVaccineStyle.inputStyle, FontGlobal.AveriaRegular]} />
          </View>
          <View style={EditVaccineStyle.dataContainerRow}>
            <Text style={[EditVaccineStyle.labelContainer, EditVaccineStyle.labelStyle, FontGlobal.AveriaRegular]}>Dose</Text>
            <View style={EditVaccineStyle.radioButtonContainer}>
              <View style={EditVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="1a. dose"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === '1a. dose' ? 'checked' : 'unchecked' }
                  onPress={() => {setDose('1a. dose'), setNextVaccinationDate('')}}
                />
                <Text onPress={() => {setDose('1a. dose'), setNextVaccinationDate('')}} style={[EditVaccineStyle.radioButtonLabel, FontGlobal.AveriaRegular]}>1a. dose</Text>
              </View>
              <View style={EditVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="2a. dose"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === '2a. dose' ? 'checked' : 'unchecked' }
                  onPress={() => {setDose('2a. dose'), setNextVaccinationDate('')}}
                />
                <Text onPress={() => {setDose('2a. dose'), setNextVaccinationDate('')}} style={[EditVaccineStyle.radioButtonLabel, FontGlobal.AveriaRegular]}>2a. dose</Text>
              </View>
              <View style={EditVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="3a. dose"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === '3a. dose' ? 'checked' : 'unchecked' }
                  onPress={() => {setDose('3a. dose'), setNextVaccinationDate('')}}
                />
                <Text onPress={() => {setDose('3a. dose'), setNextVaccinationDate('')}} style={[EditVaccineStyle.radioButtonLabel, FontGlobal.AveriaRegular]}>3a. dose</Text>
              </View>
              <View style={EditVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="Dose única"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === 'Dose única' ? 'checked' : 'unchecked' }
                  onPress={() => [setDose('Dose única'), setNextVaccinationDate('Não há próxima dose')]}
                />
                <Text onPress={() => {setDose('Dose única'), setNextVaccinationDate('Não há próxima dose')}} style={[EditVaccineStyle.radioButtonLabel, FontGlobal.AveriaRegular]}>Dose única</Text>
              </View>
            </View>
          </View>
          <View style={EditVaccineStyle.dataContainerRow}>
              <Text style={[EditVaccineStyle.labelContainer, EditVaccineStyle.labelStyle, FontGlobal.AveriaRegular]}>Comprovante</Text>
              <View style={EditVaccineStyle.imageContainer}>
                <TouchableOpacity onPress={() => handleVaccineImage()} style={EditVaccineStyle.imageBtnContainer}> 
                  <Text style={[EditVaccineStyle.imageBtnText, FontGlobal.AveriaRegular]}>Selecionar imagem...</Text>
                </TouchableOpacity>
                <View style={EditVaccineStyle.imageContent}>
                  {
                    imageUri === '' ?
                    <Text style={[EditVaccineStyle.imageContentText, FontGlobal.AveriaRegular]}>Nenhuma imagem selecionada</Text>
                    :
                    <Image source={{uri: imageUri}} style={EditVaccineStyle.vaccineImage} />
                  }
                </View>
              </View>
          </View>
          <View style={EditVaccineStyle.dataContainer}>
            {
              dose !== 'Dose única' &&
              <>
                <Text style={[EditVaccineStyle.labelContainer, EditVaccineStyle.labelStyle, FontGlobal.AveriaRegular]}>Próxima vacinação</Text>
                <TouchableOpacity onPress={() => {setOpen(true), setDatePickerType('nextVaccinationDate')}} style={EditVaccineStyle.dateStyle}>
                  <Text style={[EditVaccineStyle.dateText, FontGlobal.AveriaRegular]}>{nextVaccinationDate}</Text>
                  <Image style={EditVaccineStyle.calendarIcon} source={calendarIcon} />
                </TouchableOpacity>
              </>
            }
          </View>
        </View>
        <View style={EditVaccineStyle.mainContainer2}>
          {
            (vaccineName === '' || vaccineDate === '' || dose === '' || nextVaccinationDate === '' || imageUri === '') && !loading ?
              <TouchableOpacity onPress={() => alert('Preencha todos os campos')} style={{opacity: 0.4}}>
                <ButtonComponent btnText={'Salvar alterações'} btnColor={'#37BD6D'} />
              </TouchableOpacity>
            :
            (vaccineName !== '' && vaccineDate !== '' && dose !== '' && nextVaccinationDate !== '' && imageUri !== '') && !loading ?
              <TouchableOpacity onPress={() => handleSavingChanges()}>
                <ButtonComponent btnText={'Salvar alterações'} btnColor={'#37BD6D'} />
              </TouchableOpacity>
            :
            <View style={EditVaccineStyle.ActivityIndicatorContainer}>
              <Text style={[{color: '#37BD6D', fontSize: 16, fontWeight: 'bold'}, FontGlobal.AveriaRegular]}>Salvando...</Text>
              <ActivityIndicator size={'large'} color='#37BD6D' />
            </View>
          }
          
        </View>
        <View style={EditVaccineStyle.mainContainer3}>
          {
            !loading &&
            <TouchableOpacity style={EditVaccineStyle.btnDelete} onPress={() => setModalVisible(true)}>
              <Image source={iconTrash} style={EditVaccineStyle.trashIcon} />
              <Text style={[EditVaccineStyle.btnDeleteText, FontGlobal.AveriaRegular]}>Excluir</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
      <DatePicker title={'Selecione a data'} confirmText={'Confirmar'} cancelText={'Cancelar'} textColor={"#419ED7"} onConfirm={(date) => {setOpen(false) 
        setDate(date),
        handleDate(date)
        }} onCancel={() => {setOpen(false)}} mode="date" modal open={open} date={date}
      />
        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}>
          <View style={ModalStyle.centeredView}>
            <View style={ModalStyle.modalView}>
              <View style={ModalStyle.modalTextContainer}>
                <Text style={[ModalStyle.modalText, FontGlobal.AveriaLight]}>Tem certeza que deseja remover essa vacina?</Text>
              </View>
              <View style={ModalStyle.buttonContainer}>
                {
                  !modalLoading ?
                  <>
                    <TouchableOpacity style={[ModalStyle.button, ModalStyle.buttonYes]} onPress={() => handleDeleteVaccine()}>
                      <Text style={[ModalStyle.textStyle, FontGlobal.AveriaRegular]}>SIM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ModalStyle.button, ModalStyle.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={[ModalStyle.textStyle, FontGlobal.AveriaRegular]}>CANCELAR</Text>
                    </TouchableOpacity>
                  </>
                  :
                  <View style={ModalStyle.modalLoadingStyle}>
                    <Text style={[{color: '#FF8383'}, FontGlobal.AveriaRegular]}>Deletando...</Text>
                    <ActivityIndicator size="large" color="#FF8383" />
                  </View>
                }
              </View>
            </View>
          </View>
        </Modal>
    </>
  );
}

export default EditVaccine;