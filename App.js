import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import PasswordInput from './PassswordInput';

const App = () => {
  const [password, setPassword] = useState('');
  const [passwordMatched, setPasswordMatched] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const showAlertWithCustomStyle = (title, message) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setShowAlert(true);
  };
  const handleRegister = () => {
    validatePassword(password);
  };

  const valueChange = async setState => async val => {
    if (val.length > 6) {
      setPasswordMatched(false);
    }

    setState(val);
  };

  const validatePassword = password => {
    let steps = 0;

    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /[0-9]/;

    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    if (password.length == 0) {
      setPasswordMatched(false);
      showAlertWithCustomStyle('Ippo Pay', 'Please enter password');
      return;
    }
    if (password.length < 6) {
      setPasswordMatched(false);
      steps += 6 - password.length;
      showAlertWithCustomStyle(
        'Ippo Pay',
        'Password must contain minimum six letters',
      );
      //return steps;
    } else if (password.length > 20) {
      setPasswordMatched(false);
      steps += password.length - 20;
      //return steps;
    }

    console.log('test lowercase letter', lowercaseRegex.test(password));
    if (lowercaseRegex.test(password)) {
      hasLower = true;
    }
    if (uppercaseRegex.test(password)) {
      hasUpper = true;
    }
    if (digitRegex.test(password)) {
      hasDigit = true;
    }

    if (!hasLower) {
      setPasswordMatched(false);
      showAlertWithCustomStyle(
        'Ippo Pay',
        'Password must contain at least one lowercase letter',
      );
      return;
      console.log('Contains at least one lowercase letter');
      //"Contains at least one lowercase letter");
    }
    if (!hasUpper) {
      setPasswordMatched(false);
      showAlertWithCustomStyle(
        'Ippo Pay',
        'Password must contain at least one uppercase letter',
      );
      return;
      console.log('at least one uppercase letter');
      //alert("at least one uppercase letter");
    }
    if (!hasDigit) {
      setPasswordMatched(false);
      showAlertWithCustomStyle(
        'Ippo Pay',
        'Password must contain at least one digit',
      );
      console.log('at least one digit');
      //alert("at least one digit");
    }

    if (steps == 0) {
      setPasswordMatched(true);
      showAlertWithCustomStyle('Ippo Pay', 'Strong Password');
    }
  };

  const _onPressButton = async () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ippo Pay</Text>
      <PasswordInput
        placeholder={'Password'}
        placeholderTextColor={'grey'}
        value={password}
        onChangeText={text => valueChange(setPassword(text))}
        hidePassword={hidePassword}
        onShowPassword={() => setHidePassword(!hidePassword)}
        returnKeyType="done"
        returnKeyLabel="Done"
        onSubmitEditing={() => handleRegister()}
        passwordMatched={passwordMatched}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Check Password</Text>
      </TouchableOpacity>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={alertTitle}
        message={alertMessage}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor={passwordMatched ? 'green' : '#DD6B55'}
        onConfirmPressed={() => setShowAlert(false)}
        contentContainerStyle={styles.alertContainer}
        titleStyle={styles.alertTitle}
        messageStyle={styles.alertMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#DD6B55',
    width: '100%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertContainer: {
    borderRadius: 8,
    backgroundColor: 'white',
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  alertMessage: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
