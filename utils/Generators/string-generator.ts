// Generate a random string with custom options like uppercase, lowercase, numbers, and special characters. 
// This is useful for creating unique test data like passwords, usernames, email addresses, etc.
// Also, it helps to create more realistic test data.
export const generateEnhancedString = (
    length: number,
    options: {
      uppercase?: boolean;
      lowercase?: boolean;
      numbers?: boolean;
      specialChars?: boolean;
    } = {}
  ): string => {
    // Default options
    const { uppercase = true, lowercase = true, numbers = true, specialChars = false } = options;
  
    // Define character pools
    const charPools: Record<string, string> = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      specialChars: '!@#$%^&*()-_=+[]{}|;:",.<>?/~`',
    };
  
    // Combine selected character pools
    let chars = '';
    if (uppercase) chars += charPools.uppercase;
    if (lowercase) chars += charPools.lowercase;
    if (numbers) chars += charPools.numbers;
    if (specialChars) chars += charPools.specialChars;
  
    // Validate input
    if (!chars) {
      throw new Error('At least one character type must be enabled.');
    }
  
    // Generate random string
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    return result;
  };

  /*To use this function, it must be called with the expected behavior. For example:
  const randomString = generateRandomString(8, { uppercase: false, lowercase: false, numbers: true });
  console.log(randomString); // Example output: '38475021'

  the following path contains more calls to the function that serve as examples:
    BreakPointLab/
    │
    └── utils/                   
          └── Custom/                
  */