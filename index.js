const isValidPhone = phone => {
  const validPhoneRegEx = /^\+?(\d{1,3}|0|)[- ]?\d{3}[- ]?\d{3}[- ]?\d{3,4}$/;
  return validPhoneRegEx.test(phone);
}

module.exports = { isValidPhone };