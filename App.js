import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

export default function App() {

  pressButton = () => {
    alert("O botão não funciona ainda...");
  }

  return (
    <View style={styles.container}>

      {/* Imagem de fundo */}
      <ImageBackground
        source={require('./src/assets/images/fundo.png')}
        style={styles.img}>

        <View style={styles.secondaryContainer}>

          {/* Título */}
          <Text style={styles.login}>Login</Text>

          {/* Caixas de textos */}
          <TextInput style={styles.inputName}
            placeholder='Digite o seu email'
            inputMode='text'
            placeholderTextColor='black'
          />

          <TextInput style={styles.inputName}
            placeholder='Digite a sua senha'
            keyboardType='numeric'
            secureTextEntry={true}
            placeholderTextColor='black'
          />

          {/* Botão de 'Click here' */}
          <Button
            style={{ backgroundColor: 'red' }}
            onPress={pressButton}
            title='Click here'
            color='black'
          />

          {/* Logo */}
          <Image
            source={require('./src/assets/images/logo.png')}
            style={styles.logo} 
            resizeMode='cover'
            />

        </View>

        <View style={{ width: '100%', height: 60 }}>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondaryContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputName: {
    height: 60,
    width: 320,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
  },
  login: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center'
  },
  img: {
    width: '100%',
    height: '100%',
  },
  logo: {
    margin: 20,
    width: 200,
    height: 100,
  },

});

