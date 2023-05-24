export const isPasswordStrong = () =>{
    let steps = 0;

    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /[0-9]/;
  
    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
  
    if (password.length < 6) {
      steps += 6 - password.length;
    } else if (password.length > 20) {
      steps += password.length - 20;
    }
  
    if (!lowercaseRegex.test(password)) {
      hasLower = true;
    }
    if (!uppercaseRegex.test(password)) {
      hasUpper = true;
    }
    if (!digitRegex.test(password)) {
      hasDigit = true;
    }
  
    if (hasLower) {
      //show error mesage
    }
    if (hasUpper) {
        //show error mesage
    }
    if (hasDigit) {
        //show error mesage
    }
  
    return steps;

}