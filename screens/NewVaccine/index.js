import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, TextInput, Image, ActivityIndicator, PermissionsAndroid, Linking} from "react-native";
import { NewVaccineStyle } from './styles';
import DatePicker from 'react-native-date-picker';
import calendarIcon from '../../assets/image/calendar.png';
import { RadioButton } from 'react-native-paper';
import ButtonComponent from '../../components/ButtonComponent';
import NavbarComponent from '../../components/NavbarComponent'
import { launchImageLibrary } from 'react-native-image-picker';
import { firestore, firebase } from "../../config/FirebaseConfig/firebase";
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import FontGlobal from "../../styles/FontGlobal";
import moment from "moment";
import uuid from 'react-native-uuid';
import { useSelector } from "react-redux";
import Geolocation from 'react-native-geolocation-service';

const NewVaccine = ({navigation}) => {
  const currentDate = new Date();
  const [uuidv1] = useState(uuid.v1);
  const { userIdRedux } = useSelector(state=> state.user);
  const [open, setOpen] = useState(false);
  const [datePickerType, setDatePickerType] = useState('');
  const [vaccineDate, setVaccineDate] = useState('');
  const [vaccineName, setVaccineName] = useState('');
  const [dose, setDose] = useState('');
  const [profOfVaccination, setProfOfVaccination] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [nextVaccinationDate, setNextVaccinationDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

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

  const handleVaccineImage = async () => {  
    launchImageLibrary({mediaType: "photo"})
    .then((response) => {
      response.assets.forEach(element => {
          setProfOfVaccination(element);
          setImageUri(element.uri);
        });
      })
      .catch(() => {
        setProfOfVaccination('');
        setImageUri('');
    })
  }

  const handleRegisterVaccine = async () => {
    setLoading(true);
    const storage = getStorage(firebase);
    const r = await fetch(profOfVaccination.uri);
    const b = await r.blob();
    uploadBytes(ref(storage, `vaccineImage/${userIdRedux}/${uuidv1}`), b, {contentType: profOfVaccination.type})
    .then((response) => {
      getDownloadURL(response.ref)
      .then((url) => {
        const vaccineData = {
          userId: userIdRedux,
          vaccineDate,
          vaccineName,
          vaccineImageUrl: url,
          latitude,
          longitude,
          dose,
          nextVaccinationDate
        }
        setDoc(doc(firestore, 'vaccines', uuidv1), vaccineData)
        .then(() => {
          setLoading(false);
          navigation.pop();
        })
        .catch((error) => {
          setLoading(false);
          alert(error.code);
        })
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

  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )
    .then((response) => {
      switch (response) {
        case 'granted':
          Geolocation.getCurrentPosition(
            (position) => {
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
            },
            (error) => {
              alert(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        break;
        default: alert('Acesso negado a localização');
        break;
      }
    })
    .catch((error) => {
      setLatitude('');
      setLongitude('');
    })
  }, [])

  return(
    <>
      <NavbarComponent navigation={navigation} status={'logged'} navbarScreen={'Nova vacina'} />
      <View style={NewVaccineStyle.main}>
        <View style={NewVaccineStyle.mainContainer1}>
          <View style={NewVaccineStyle.dataContainer}>
            <Text style={[NewVaccineStyle.labelContainer, NewVaccineStyle.labelStyle, FontGlobal.AveriaRegular]}>Data de vacinação</Text>
            <TouchableOpacity onPress={() => {setOpen(true), setDatePickerType('vaccineDate')}} style={NewVaccineStyle.dateStyle}>
              <Text style={[NewVaccineStyle.dateText, FontGlobal.AveriaRegular]}>{vaccineDate}</Text>
              <Image style={NewVaccineStyle.calendarIcon} source={calendarIcon} />
            </TouchableOpacity>
          </View>
          <View style={NewVaccineStyle.dataContainer}>
            <Text style={[NewVaccineStyle.labelContainer, NewVaccineStyle.labelStyle, FontGlobal.AveriaRegular]}>Vacina</Text>
            <TextInput onChangeText={(value) => setVaccineName(value)} value={vaccineName} style={[NewVaccineStyle.inputStyle, FontGlobal.AveriaRegular]} />
          </View>
          <View style={NewVaccineStyle.dataContainerRow}>
            <Text style={[NewVaccineStyle.labelContainer, NewVaccineStyle.labelStyle, FontGlobal.AveriaRegular]}>Dose</Text>
            <View style={NewVaccineStyle.radioButtonContainer}>
              <View style={NewVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="1a. dose"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === '1a. dose' ? 'checked' : 'unchecked' }
                  onPress={() => {setDose('1a. dose'), setNextVaccinationDate('')}}
                />
                <Text onPress={() => {setDose('1a. dose'), setNextVaccinationDate('')}} style={[NewVaccineStyle.radioButtonLabel, FontGlobal.AveriaRegular]}>1a. dose</Text>
              </View>
              <View style={NewVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="2a. dose"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === '2a. dose' ? 'checked' : 'unchecked' }
                  onPress={() => {setDose('2a. dose'), setNextVaccinationDate('')}}
                />
                <Text onPress={() => {setDose('2a. dose'), setNextVaccinationDate('')}} style={[NewVaccineStyle.radioButtonLabel, FontGlobal.AveriaRegular]}>2a. dose</Text>
              </View>
              <View style={NewVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="3a. dose"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === '3a. dose' ? 'checked' : 'unchecked' }
                  onPress={() => {setDose('3a. dose'), setNextVaccinationDate('')}}
                />
                <Text onPress={() => {setDose('3a. dose'), setNextVaccinationDate('')}} style={[NewVaccineStyle.radioButtonLabel, FontGlobal.AveriaRegular]}>3a. dose</Text>
              </View>
              <View style={NewVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="Dose única"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === 'Dose única' ? 'checked' : 'unchecked' }
                  onPress={() => [setDose('Dose única'), setNextVaccinationDate('Não há próxima dose')]}
                />
                <Text onPress={() => {setDose('Dose única'), setNextVaccinationDate('Não há próxima dose')}} style={[NewVaccineStyle.radioButtonLabel, FontGlobal.AveriaRegular]}>Dose única</Text>
              </View>
            </View>
          </View>
          <View style={NewVaccineStyle.dataContainerRow}>
              <Text style={[NewVaccineStyle.labelContainer, NewVaccineStyle.labelStyle, FontGlobal.AveriaRegular]}>Comprovante</Text>
              <View style={NewVaccineStyle.imageContainer}>
                <TouchableOpacity onPress={() => handleVaccineImage()} style={NewVaccineStyle.imageBtnContainer}> 
                  <Text style={[NewVaccineStyle.imageBtnText, FontGlobal.AveriaRegular]}>Selecionar imagem...</Text>
                </TouchableOpacity>
                <View style={NewVaccineStyle.imageContent}>
                  {
                    imageUri === '' ?
                    <Text style={[NewVaccineStyle.imageContentText, FontGlobal.AveriaRegular]}>Nenhuma imagem selecionada</Text>
                    :
                    <Image source={{uri: imageUri}} style={NewVaccineStyle.vaccineImage} />
                  }
                </View>
              </View>
          </View>
          <View style={NewVaccineStyle.dataContainer}>
            {
              dose !== 'Dose única' &&
              <>
                <Text style={[NewVaccineStyle.labelContainer, NewVaccineStyle.labelStyle, FontGlobal.AveriaRegular]}>Próxima vacinação</Text>
                <TouchableOpacity onPress={() => {setOpen(true), setDatePickerType('nextVaccinationDate')}} style={NewVaccineStyle.dateStyle}>
                  <Text style={[NewVaccineStyle.dateText, FontGlobal.AveriaRegular]}>{nextVaccinationDate}</Text>
                  <Image style={NewVaccineStyle.calendarIcon} source={calendarIcon} />
                </TouchableOpacity>
              </>
            }
          </View>
        </View>
        <View style={NewVaccineStyle.mainContainer2}>
          {
            (vaccineName === '' || vaccineDate === '' || dose === '' || nextVaccinationDate === '' || imageUri === '') && !loading ?
            <TouchableOpacity onPress={() => alert('Preencha todos os campos')} style={{opacity: 0.4}}>
              <ButtonComponent btnText={'Cadastar'} btnColor={'#37BD6D'} />
            </TouchableOpacity>
            :
            (vaccineName !== '' && vaccineDate !== '' && dose !== '' && nextVaccinationDate !== '' && imageUri !== '') && !loading ?
            <TouchableOpacity onPress={() => handleRegisterVaccine()}>
              <ButtonComponent btnText={'Cadastar'} btnColor={'#37BD6D'} />
            </TouchableOpacity>
            :
            <View style={NewVaccineStyle.ActivityIndicatorContainer}>
              <Text style={[{color: '#37BD6D', fontSize: 16, fontWeight: 'bold'}, FontGlobal.AveriaRegular]}>Cadastrando...</Text>
              <ActivityIndicator size={'large'} color='#37BD6D' />
            </View>
          }
        </View>
      </View>
      <DatePicker title={'Selecione a data'} confirmText={'Confirmar'} cancelText={'Cancelar'} textColor={"#419ED7"} onConfirm={(currentDate) => {setOpen(false) 
        handleDate(currentDate)
        }} onCancel={() => {setOpen(false)}} mode="date" modal open={open} date={currentDate}
      />
    </>
  );
}

export default NewVaccine;
