import { generateRandomString } from "../Generators/string-generator";

//default behavior: alphanumeric string.
const randomString = generateRandomString(10);
console.log(randomString);

//uppercase alphanumeric string.
const randomCapsString = generateRandomString(10, {lowercase: false, numbers: false });
console.log(randomCapsString);

//lowercase alphanumeric string.
const randomLowerString = generateRandomString(10, {uppercase: false, numbers: false });
console.log(randomLowerString);

//numeric string.
const randomNumberString = generateRandomString(10, {uppercase: false, lowercase: false });
console.log(randomNumberString);

//special characters only string.  
const randomSpecialString = generateRandomString(10, {uppercase: false, lowercase: false, numbers: false, specialChars: true });
console.log(randomSpecialString);

//Password string.
const randomPassword = generateRandomString(14, {uppercase: true, lowercase: true, numbers: true, specialChars: true });
