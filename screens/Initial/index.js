import React, {useState} from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import iconVacine from '../../assets/image/icon-vaccine.png';
import { InitialStyle } from './styles';
import bgVaccine from '../../assets/image/bgVaccine.jpeg'
import ButtonComponent from '../../components/ButtonComponent';
import { auth } from '../../config/FirebaseConfig/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { login } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
import FontGlobal from '../../styles/FontGlobal';

const Initial = ({navigation}) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginError, setLoginError] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();

  const handleLogin = () => {
    setLoginError(false);
    setLoading(true);
    signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then((response) => {
      dispatch(login({id: response.user.uid, email: response.user.email, name: response.user.displayName}))
      setLoading(false);
      navigation.push('HomeNavigation');
    })
    .catch(() => {
      setLoading(false);
      setLoginError(true);
    })
  }

  return(
    <ImageBackground source={bgVaccine} resizeMode="cover" style={InitialStyle.homeBgImage}>
      <View style={InitialStyle.mainStyle}>
        <View style={InitialStyle.container1}>
          <Image source={iconVacine} style={InitialStyle.vaccineImg} />
          <Text style={[InitialStyle.title, FontGlobal.AveriaRegular]}>MyHealth</Text>
        </View>
        <View>
          <Text style={[InitialStyle.subtitle, FontGlobal.AveriaRegular]}>Controle as suas vacinas e fique seguro</Text>
        </View>
        <View>
          <View style={InitialStyle.inputLabelFlex}>
            <Text style={[InitialStyle.labelStyle, FontGlobal.AveriaRegular]}>E-mail</Text>
            <TextInput onChangeText={setUserEmail} value={userEmail} keyboardType='email-address' placeholder='Insira o seu e-mail' style={[InitialStyle.inputStyle, FontGlobal.AveriaRegular]} />
          </View>
          <View style={InitialStyle.inputLabelFlex}>
            <Text style={[InitialStyle.labelStyle, FontGlobal.AveriaRegular]}>Senha</Text>
            <TextInput onChangeText={setUserPassword}  onPressIn={() => setShowPassword(false)} onPressOut={() => setShowPassword(true)} value={userPassword} secureTextEntry={showPassword} placeholder='Insira a sua senha' style={[InitialStyle.inputStyle, FontGlobal.AveriaRegular]} />
          </View>
          {
            loginError && 
            <Text style={[InitialStyle.passwordError, FontGlobal.AveriaRegular]}>E-mail e/ou senha inválidos.</Text>
          }
        </View>
        {
          userEmail !== '' && userPassword !== '' && !loading ?
          <TouchableOpacity onPress={() => handleLogin()}>
            <ButtonComponent btnText="Entrar" btnColor="#37BD6D"/>
          </TouchableOpacity>
          :
          userEmail === '' || userPassword === '' && !loading ?
          <TouchableOpacity onPress={() => alert('Preencha todos os campos!')} style={{opacity: 0.5}}>
            <ButtonComponent btnText="Entrar" btnColor="#37BD6D"/>
          </TouchableOpacity>
          :
          <View style={InitialStyle.ActivityIndicatorContainer}>
            <Text style={{color: '#37BD6D', fontSize: 16, fontWeight: 'bold'}}>Carregando...</Text>
            <ActivityIndicator size={'large'} color='#37BD6D' />
          </View>
        }
        {
          !loading ?
          <>
            <TouchableOpacity onPress={() => navigation.push('Register')}>
              <ButtonComponent btnText="Criar minha conta" btnColor="#419ED7"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('Recover')}>
              <ButtonComponent btnText="Esqueci minha senha" btnColor="#B0CCDE"/>
            </TouchableOpacity>
          </>
          :
          <>
            <TouchableOpacity style={{opacity: 0.2}}>
              <ButtonComponent btnText="Criar minha conta" btnColor="#419ED7"/>
            </TouchableOpacity>
            <TouchableOpacity style={{opacity: 0.2}}>
              <ButtonComponent btnText="Esqueci minha senha" btnColor="#B0CCDE"/>
            </TouchableOpacity>
          </>
        }
      </View>
    </ImageBackground>
  );
}

export default Initial;