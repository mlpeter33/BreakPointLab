import { generateRandomString } from "../Generators/string-generator";

//default behavior: alphanumeric string.
export const randomString = generateRandomString(10, {lowercase: true, uppercase: true, numbers: true });
console.log(randomString);

//uppercase alphanumeric string.
export const randomCapsString = generateRandomString(10, {uppercase: true, lowercase: false, numbers: false });
console.log(randomCapsString);

//lowercase alphanumeric string.
export const randomLowerString = generateRandomString(10, {lowercase: true, uppercase: false, numbers: false });
console.log(randomLowerString);

//numeric string.
export const randomNumberString = generateRandomString(10, {numbers: true, uppercase: false, lowercase: false });
console.log(randomNumberString);

//special characters only string.  
export const randomSpecialString = generateRandomString(10, {uppercase: false, lowercase: false, numbers: false, specialChars: true });
console.log(randomSpecialString);

//Password string.
export const randomPassword = generateRandomString(14, {uppercase: true, lowercase: true, numbers: true, specialChars: true });