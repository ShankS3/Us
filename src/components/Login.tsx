import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import logo from '@images/Us_logo.png';

interface Props {}

const Login: React.FC<Props> = ({}) => {
  const [userName, setUserName] = useState<string>('');

  function onPress(): void {
    console.log(userName);
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={(text) => setUserName(text)}
          placeholder={'Enter User Nickname'}
          maxLength={12}
          multiline={false}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor={'#328FE6'}
          onPress={() => onPress()}>
          <Text style={styles.label}>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#8AECEC',
  },
  logo: {
    alignSelf: 'center',
    width: '50%',
    marginTop: '25%',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    color: '#555555',
    padding: 10,
    height: 50,
    borderColor: '#ad67ea',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    borderColor: '#328FE6',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#ad67ea',
  },
  label: {
    width: 230,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default Login;
