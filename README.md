## Phone Validation module
Module to validate various phone numbers return true for valid phone numbers and false for invalid phone numbers

## Installing and using as a dependency
`npm install phone-validation --save`

## Testing
`npm run test`

## Using Package
In order to use the package in your modules, 
- Import the module

      const { isValidPhone } = require('phone-validation')

- The `isValidPhone(phoneNumber)` function returns a true or false for valid or invalid phone numbers

      const validPhone = isValidPhone('(+254)-701-123-456');


## Sample Validation Table
|No.| Valid Phone Numbers | Invalid Phone Numbers |
|---|------- | ---------------------- |
|1.| +254 701 123 456 | -701-123-345|
|2.| +254-701-123-456  | -701123345 |
|3.| 254 701 123 456   | (254) 701 123 456 |
|4.| 0-701-123-456   | (+254) 701 123 456 |
|5.| 0 701 123 456   | (+254)-701-123-456 |
|6.| 0701 123 456  | undefined |
|7.| 0701-123-456  | null |
|8.| 0701123456  | empty string |
|9.| 701123456  | aphabets |
|10.| 701123459  |  alphanumerics |
|11.| +255-701-123-456  |  |
|12.| +251 701 123 456  |  |
|13.| +256-701-123-456  |  |
|14.| +541-712-3456  |  |
|15.| 1-541-712-3456  |  |
|16.| 001-541-712-3456  |  |
 

## Reach out
For any concerns, please raise an issue on the repo, or reach out to [Charles Okoyoh](mailto:cokoyoh.dev@gmail.com)

## Disclaimer
The sample phone numbers used in all of our examples are representative and are not for specific people. Any resemblance to actual phone numbers is purely accidental and/or coincidental.




