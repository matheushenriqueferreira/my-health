import React, {useState} from "react";
import { EditVaccineStyle } from "./styles";
import { TouchableOpacity, View, Text, TextInput, Image } from "react-native";
import DatePicker from 'react-native-date-picker';
import calendarIcon from '../../assets/image/calendar.png';
import { RadioButton } from 'react-native-paper';
import ButtonComponent from '../../components/ButtonComponent';
import teste from '../../assets/image/image-comprovante.png';
import NavbarComponent from '../../components/NavbarComponent'
import trash from '../../assets/image/trash.png';

const EditVaccine = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [datePickerType, setDatePickerType] = useState('');
  const [vaccineDate, setVaccineDate] = useState('');
  const [vaccineName, setVaccineName] = useState('');
  const [dose, setDose] = useState('');
  const [profOfVaccination, setProfOfVaccination] = useState('');
  const [nextVaccineDate, setNextVaccineDate] = useState('');

  const handleDate = (date) => {
    const day =  date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month =  (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    const year = date.getFullYear();

    if(datePickerType === 'vaccineDate') {
      setVaccineDate(`${day}/${month}/${year}`);
    }
    else {
      setNextVaccineDate(`${day}/${month}/${year}`);
    }
  }

  return(
    <>
      <NavbarComponent navigation={navigation} status={'logged'} navbarText={'Minhas vacinas'} />
      <View style={EditVaccineStyle.main}>
        <View style={EditVaccineStyle.mainContainer1}>
          <View style={EditVaccineStyle.dataContainer}>
            <Text style={[EditVaccineStyle.labelContainer, EditVaccineStyle.labelStyle]}>Data de vacinação</Text>
            <TouchableOpacity onPress={() => {setOpen(true), setDatePickerType('vaccineDate')}} style={EditVaccineStyle.dateStyle}>
              <Text style={EditVaccineStyle.dateText}>{vaccineDate}</Text>
              <Image style={EditVaccineStyle.calendarIcon} source={calendarIcon} />
            </TouchableOpacity>
          </View>
          <View style={EditVaccineStyle.dataContainer}>
            <Text style={[EditVaccineStyle.labelContainer, EditVaccineStyle.labelStyle]}>Vacina</Text>
            <TextInput onChangeText={(value) => setVaccineName(value)} value={vaccineName} style={EditVaccineStyle.inputStyle} />
          </View>
          <View style={EditVaccineStyle.dataContainerRow}>
            <Text style={[EditVaccineStyle.labelContainer, EditVaccineStyle.labelStyle]}>Dose</Text>
            <View style={EditVaccineStyle.radioButtonContainer}>
              <View style={EditVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="1a. dose"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === '1a. dose' ? 'checked' : 'unchecked' }
                  onPress={() => setDose('1a. dose')}
                />
                <Text onPress={() => setDose('1a. dose')} style={EditVaccineStyle.radioButtonLabel}>1a. dose</Text>
              </View>
              <View style={EditVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="2a. dose"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === '2a. dose' ? 'checked' : 'unchecked' }
                  onPress={() => setDose('2a. dose')}
                />
                <Text onPress={() => setDose('2a. dose')} style={EditVaccineStyle.radioButtonLabel}>2a. dose</Text>
              </View>
              <View style={EditVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="3a. dose"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === '3a. dose' ? 'checked' : 'unchecked' }
                  onPress={() => setDose('3a. dose')}
                />
                <Text onPress={() => setDose('3a. dose')} style={EditVaccineStyle.radioButtonLabel}>3a. dose</Text>
              </View>
              <View style={EditVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="Dose única"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === 'Dose única' ? 'checked' : 'unchecked' }
                  onPress={() => setDose('Dose única')}
                />
                <Text onPress={() => setDose('Dose única')} style={EditVaccineStyle.radioButtonLabel}>Dose única</Text>
              </View>
            </View>
          </View>
          <View style={EditVaccineStyle.dataContainerRow}>
              <Text style={[EditVaccineStyle.labelContainer, EditVaccineStyle.labelStyle]}>Comprovante</Text>
              <View style={EditVaccineStyle.imageContainer}>
                <TouchableOpacity style={EditVaccineStyle.imageBtnContainer}> 
                  <Text style={EditVaccineStyle.imageBtnText}>Selecionar imagem...</Text>
                </TouchableOpacity>
                <View style={EditVaccineStyle.imageContent}>
                  {
                    profOfVaccination === '' ?
                    <Text style={EditVaccineStyle.imageContentText}>Nenhuma imagem selecionada</Text>
                    :
                    <Image source={teste} style={EditVaccineStyle.vaccineImage} />
                  }
                </View>
              </View>
          </View>
          <View style={EditVaccineStyle.dataContainer}>
            <Text style={[EditVaccineStyle.labelContainer, EditVaccineStyle.labelStyle]}>Próxima vacinação</Text>
            <TouchableOpacity onPress={() => {setOpen(true), setDatePickerType('nextVaccineDate')}} style={EditVaccineStyle.dateStyle}>
              <Text style={EditVaccineStyle.dateText}>{nextVaccineDate}</Text>
              <Image style={EditVaccineStyle.calendarIcon} source={calendarIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={EditVaccineStyle.mainContainer2}>
          <TouchableOpacity>
            <ButtonComponent btnText={'Salvar alterações'} btnColor={'#37BD6D'} />
          </TouchableOpacity>
        </View>
        <View style={EditVaccineStyle.mainContainer3}>
          <TouchableOpacity style={EditVaccineStyle.btnDelete}>
            <Image source={trash} style={EditVaccineStyle.trashIcon} />
            <Text style={EditVaccineStyle.btnDeleteText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DatePicker title={'Selecione a data'} confirmText={'Confirmar'} cancelText={'Cancelar'} textColor={"#419ED7"} onConfirm={(date) => {setOpen(false) 
        setDate(date),
        handleDate(date)
        }} onCancel={() => {setOpen(false)}} mode="date" modal open={open} date={date}
      />
    </>
  );
}

export default EditVaccine;