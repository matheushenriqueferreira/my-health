import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput, Image } from "react-native";
import { NewVaccineStyle } from './styles';
import DatePicker from 'react-native-date-picker';
import calendarIcon from '../../assets/image/calendar.png';
import { RadioButton } from 'react-native-paper';
import ButtonComponent from '../../components/ButtonComponent';
import teste from '../../assets/image/image-comprovante.png';
import NavbarComponent from '../../components/NavbarComponent'

const NewVaccine = () => {
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
      <NavbarComponent status={'logged'} navbarText={'Minhas vacinas'} />
      <View style={NewVaccineStyle.main}>
        <View style={NewVaccineStyle.mainContainer1}>
          <View style={NewVaccineStyle.dataContainer}>
            <Text style={[NewVaccineStyle.labelContainer, NewVaccineStyle.labelStyle]}>Data de vacinação</Text>
            <TouchableOpacity onPress={() => {setOpen(true), setDatePickerType('vaccineDate')}} style={NewVaccineStyle.dateStyle}>
              <Text style={NewVaccineStyle.dateText}>{vaccineDate}</Text>
              <Image style={NewVaccineStyle.calendarIcon} source={calendarIcon} />
            </TouchableOpacity>
          </View>
          <View style={NewVaccineStyle.dataContainer}>
            <Text style={[NewVaccineStyle.labelContainer, NewVaccineStyle.labelStyle]}>Vacina</Text>
            <TextInput onChangeText={(value) => setVaccineName(value)} value={vaccineName} style={NewVaccineStyle.inputStyle} />
          </View>
          <View style={NewVaccineStyle.dataContainerRow}>
            <Text style={[NewVaccineStyle.labelContainer, NewVaccineStyle.labelStyle]}>Dose</Text>
            <View style={NewVaccineStyle.radioButtonContainer}>
              <View style={NewVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="1a. dose"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === '1a. dose' ? 'checked' : 'unchecked' }
                  onPress={() => setDose('1a. dose')}
                />
                <Text onPress={() => setDose('1a. dose')} style={NewVaccineStyle.radioButtonLabel}>1a. dose</Text>
              </View>
              <View style={NewVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="2a. dose"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === '2a. dose' ? 'checked' : 'unchecked' }
                  onPress={() => setDose('2a. dose')}
                />
                <Text onPress={() => setDose('2a. dose')} style={NewVaccineStyle.radioButtonLabel}>2a. dose</Text>
              </View>
              <View style={NewVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="3a. dose"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === '3a. dose' ? 'checked' : 'unchecked' }
                  onPress={() => setDose('3a. dose')}
                />
                <Text onPress={() => setDose('3a. dose')} style={NewVaccineStyle.radioButtonLabel}>3a. dose</Text>
              </View>
              <View style={NewVaccineStyle.radioButtonStyle}>
                <RadioButton
                  value="Dose única"
                  color="#3F92C5"
                  uncheckedColor="#FFFFFF"
                  status={ dose === 'Dose única' ? 'checked' : 'unchecked' }
                  onPress={() => setDose('Dose única')}
                />
                <Text onPress={() => setDose('Dose única')} style={NewVaccineStyle.radioButtonLabel}>Dose única</Text>
              </View>
            </View>
          </View>
          <View style={NewVaccineStyle.dataContainerRow}>
              <Text style={[NewVaccineStyle.labelContainer, NewVaccineStyle.labelStyle]}>Comprovante</Text>
              <View style={NewVaccineStyle.imageContainer}>
                <TouchableOpacity style={NewVaccineStyle.imageBtnContainer}> 
                  <Text style={NewVaccineStyle.imageBtnText}>Selecionar imagem...</Text>
                </TouchableOpacity>
                <View style={NewVaccineStyle.imageContent}>
                  {
                    profOfVaccination === '' ?
                    <Text style={NewVaccineStyle.imageContentText}>Nenhuma imagem selecionada</Text>
                    :
                    <Image source={teste} style={NewVaccineStyle.vaccineImage} />
                  }
                </View>
              </View>
          </View>
          <View style={NewVaccineStyle.dataContainer}>
            <Text style={[NewVaccineStyle.labelContainer, NewVaccineStyle.labelStyle]}>Próxima vacinação</Text>
            <TouchableOpacity onPress={() => {setOpen(true), setDatePickerType('nextVaccineDate')}} style={NewVaccineStyle.dateStyle}>
              <Text style={NewVaccineStyle.dateText}>{nextVaccineDate}</Text>
              <Image style={NewVaccineStyle.calendarIcon} source={calendarIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={NewVaccineStyle.mainContainer2}>
          <TouchableOpacity>
            <ButtonComponent btnText={'Cadastar'} btnColor={'#37BD6D'} />
          </TouchableOpacity>
        </View>
      </View>
      <DatePicker onConfirm={(date) => {setOpen(false) 
        setDate(date),
        handleDate(date)
        }} onCancel={() => {setOpen(false)}} mode="date" modal open={open} date={date}
      />
    </>
  );
}

export default NewVaccine;
