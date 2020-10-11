## Phone Validation module
Module to validate various phone numbers return true for valid phone numbers and false for invalid phone numbers

## Installing and using as a dependency
`npm install @cokoyoh/phone-validation`

## Testing
`npm run test`

## Expected future additions
While it would be easy to simply validate the international phone numbers by chnaging the regEx as shown below, a descision has to be made whether to add a different methods that validates international phone numbers or include is as one. This is in order to avoid over engineering.

    const validPhoneRegEx = /^\+?(\d{1,3}|0|)[- ]?\d{3}[- ]?\d{3}[- ]?\d{3,4}$/;

##Using Package
In order to use the package in your modules, 
- Import the modules 

      const { isValidPhone } = require('@cokoyoh/phone-validation')

- The `isValidPhone(phoneNumber)` function returns a true or false for valid or invalid phone numbers




