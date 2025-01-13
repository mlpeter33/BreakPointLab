import { generateRandomString } from "../Generators/string-generator";

//default behavior: alphanumeric string.
const randomString = generateRandomString(10);
console.log(randomString);

//uppercase alphanumeric string.
const randomCapsString = generateRandomString(10, {lowercase: false, numbers: false });
console.log(randomCapsString);