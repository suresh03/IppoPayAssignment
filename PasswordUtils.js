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
  
    if (!hasLower) {
      steps++;
    }
    if (!hasUpper) {
      steps++;
    }
    if (!hasDigit) {
      steps++;
    }
  
    for (let i = 2; i < password.length; i++) {
      if (
        password[i] === password[i - 1] &&
        password[i - 1] === password[i - 2]
      ) {
        steps++;
        break;
      }
    }
  
    return steps;

}