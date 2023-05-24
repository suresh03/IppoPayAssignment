/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import {getFontSize} from './src/Components/ResponsiveSize';
import {
  password_icon,
  passwordShow,
  passwordHide,
  tickIcon,
} from './src/Assets/icon';
const {width} = Dimensions.get('window');
import Spacer from './src/Components/Space';
import Scaler from './src/Components/Scaler';

const PasswordInput = props => {
  const {
    inputViewStyle,
    imgStyle,
    errorMessage,
    inputTitle,
    textInputStyle,
    ValidationErrorStyle,
    inputTitleStyle,
    hidePassword,
    onShowPassword,
    passwordMatched,
  } = props;
  const [getBorderColor, setBorderColor] = useState('#a9a9a9');

  return (
    <>
      <View
        style={[
          styles.container,
          inputViewStyle,
          {borderColor: getBorderColor},
        ]}>
        <Image
          resizeMode="contain"
          source={password_icon}
          style={[
            {
              width: Scaler(40),
              resizeMode: 'contain',
              marginHorizontal: Scaler(5),
            },
            imgStyle,
          ]}
        />
        <TextInput
          {...props}
          style={[styles.textInputStyle, textInputStyle]}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onBlur={() => setBorderColor('#a9a9a9')}
          autoCorrect={false}
          secureTextEntry={hidePassword}
          returnKeyType={props.returnKeyType ?? 'done'}
        />
        {passwordMatched ? (
          <Image
            resizeMode="contain"
            source={tickIcon}
            style={[
              {
                width: 28,
                resizeMode: 'contain',
              },
            ]}
          />
        ) : (
          <TouchableOpacity onPress={() => onShowPassword()}>
            <Image
              resizeMode="contain"
              source={!hidePassword ? passwordShow : passwordHide}
              style={[
                {
                  width: 28,
                  resizeMode: 'contain',
                },
              ]}
            />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage?.length > 0 && <Spacer size={5} />}
      {errorMessage?.length > 0 &&
        (
          <Text key={errorMessage} style={[styles.errorText, ValidationErrorStyle]}>
            {errorMessage}
          </Text>
        )}

      <Text style={[styles.inputTitleStyle, inputTitleStyle]}>
        {inputTitle}
      </Text>
    </>
  );
};

PasswordInput.propTypes = {
  onShowPassword: PropTypes.func,
  hidePassword: PropTypes.bool,
  inputViewStyle: PropTypes.object,
  textInputStyle: PropTypes.object,
  ValidationError: PropTypes.object,
  inputTitleStyle: PropTypes.object,
  imgStyle: PropTypes.object,
  img: PropTypes.any,
  errorMessage: PropTypes.arrayOf(PropTypes.string),
  inputTitle: PropTypes.string,
};

PasswordInput.defaultProps = {
  hidePassword: false,
  inputViewStyle: {},
  imgStyle: {},
  errorMessage: [],
  inputTitle: '',
  textInputStyle: {},
  ValidationErrorStyle: {},
  inputTitleStyle: {},
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width - 44,
    height: Scaler(65),
    borderColor: '#a9a9a9',
    borderWidth: Scaler(1),
    borderRadius: Scaler(10),
    paddingHorizontal: Scaler(5),
  },
  textInputStyle: {
    flex: 0.96,
    color: '#110D26',
    height: 68,
    borderRadius: Scaler(10),
    fontSize: Scaler(15),
    fontFamily: 'Poppins-Regular',
  },
  errorText: {
    color: 'red',
    fontSize: getFontSize(14),
    textAlign: 'justify',
  },
});
