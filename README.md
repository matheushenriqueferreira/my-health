<h1 align="center">MyHealth</h1>

<div align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</div>

## :pushpin: Tabela de Conteúdo

<!--ts-->
   * [Descrição do projeto](#memo-descrição-do-projeto)
   * [Funcionalidades do projeto](#white_check_mark-funcionalidades-do-projeto)
   * [Executar a aplicação](#hammer_and_wrench-executar-a-aplicação)
   * [Tecnologias utilizadas](#hash-tecnologias-utilizadas)
   * [Autor](#man_technologist-autor)
<!--te-->

## :memo: Descrição do projeto

<p align="center">Uma aplicação feita em React Native para a criação de uma carteira de vacinação digital para controlar as vacinas recebidas, incluindo a imagem do comprovante vacinal bem como as datas das próximas doses.</p>
<p align="center">:syringe:</p>
<div align="center">
  <img src="./docs/initial.png" width='160px' />
  <img src="./docs/Register.jpg" width='160px' />
  <img src="./docs/Recover.jpg" width='160px' />
  <img src="./docs/Home.jpg" width='160px' />
  <img src="./docs/NewVaccine.jpg" width='160px' />
  <img src="./docs/Home2.jpg" width='160px' />
  <img src="./docs/EditVaccine.jpg" width='160px' />
  <img src="./docs/DeleteVaccine.jpg" width='160px' />
  <img src="./docs/NextVaccination.jpg" width='160px' />
</div>

## :white_check_mark: Funcionalidades do projeto

- [x] Cadastro de usuário
- [x] Autenticação de usuário
- [x] Recuperação de senha
- [x] Criação/edição/exclusão de cartão de vacinas
- [x] Busca de vacinas

## :hammer_and_wrench: Executar a aplicação
  
  ### 1: Acesse a pasta do projeto baixado no terminal/cmd
    cd my-health

  ### 2: Dentro da pasta do projeto, acesse o arquivo em /my-health/config/FirebaseConfig/firebase.js e substitua com as configurações do seu projeto criado no Firebase.
    import { initializeApp } from "firebase/app";
    import { getAuth } from 'firebase/auth';
    import { initializeFirestore, getFirestore } from "firebase/firestore";

    const firebaseConfig = {
      // Insira aqui a configuração do projeto do Firebase
    };

    export const firebase = initializeApp(firebaseConfig);
    export const auth = getAuth(firebase);
    export const firestore = initializeFirestore(firebase, {experimentalForceLongPolling: true});
  #### Duvidas? Entre em contato comigo ou acesse a documentação sobre a [configuração do projeto Firebase.](https://firebase.google.com/docs/web/setup)

  ### 3: Instale as dependências
    npm install

  ### 4: Inicialize o Metro
    npx react-native start

  ### 5: Execute a aplicação
    npx react-native run-android


## :hash: Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/)
- [Java 11 - Zulu JDK](https://www.azul.com/downloads/?package=jdk)
- [Android Studio](https://developer.android.com/studio)
- [React Native](https://reactnative.dev/)
- [React Redux](https://react-redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Google Firebase](https://firebase.google.com/)
- [React Native UUID](https://www.npmjs.com/package/react-native-uuid)
- [React Native Paper - Radio Button](https://callstack.github.io/react-native-paper/radio-button.html)
- [Moment](https://momentjs.com/)
- [Date Picker](https://www.npmjs.com/package/react-native-date-picker)
- [Image Picker](https://github.com/react-native-image-picker/react-native-image-picker)
- [React Native Geolocation Sevice](https://github.com/Agontuk/react-native-geolocation-service)

## :man_technologist: Autor

| [<img src="https://avatars.githubusercontent.com/u/60938127?v=4" width=115><br><sub>Matheus Henrique Ferreira</sub>](https://github.com/matheushenriqueferreira) |  
| :---: |
