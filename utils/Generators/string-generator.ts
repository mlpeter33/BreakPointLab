// Generate a random string with custom options like uppercase, lowercase, numbers, and special characters. 
// This is useful for creating unique test data like passwords, usernames, email addresses, etc.
// Also, it helps to create more realistic test data.
export const generateRandomString = (
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
    // Collect enabled pools and ensure at least one character per enabled type
    const enabledPools = Object.entries(charPools)
    .filter(([key]) => options[key as keyof typeof options]) 
    .map(([, chars]) => chars); 
  
    // Validate input
    if (enabledPools.length === 0) {
         throw new Error('At least one character type must be enabled.');
    }

    if (length < enabledPools.length) {
        throw new Error(
            `Length must be at least ${enabledPools.length} to include at least one of each selected character type.`
        );
    }
  

    const guaranteedChars = enabledPools.map(
        (pool) => pool.charAt(Math.floor(Math.random() * pool.length))
    );


    const combinedPool = enabledPools.join('');
    const remainingLength = length - guaranteedChars.length;
    const remainingChars = Array.from({ length: remainingLength }, () =>
    combinedPool.charAt(Math.floor(Math.random() * combinedPool.length))
    );

    const finalResult = [...guaranteedChars, ...remainingChars]
    .sort(() => Math.random() - 0.5) 
    .join('');

    return finalResult;
  };

  /*To use this function, it must be called with the expected behavior. For example:
  const randomNumberString = generateRandomString(8, { uppercase: false, lowercase: false, numbers: true });
  console.log(randomNumberString); // Example output: '38475021'

  the following path contains more calls to the function that serve as examples:
    BreakPointLab/
    │
    └── utils/                   
          └── Custom/                
  */