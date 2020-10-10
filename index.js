const validate = phoneNumber => {
  const validPhoneRegEx = /^\+?[2540]?\d{3}[\- ]?\d{3}[\- ]?\d{3}$/;
  return validPhoneRegEx.test(phoneNumber);
}

module.exports = { validate };