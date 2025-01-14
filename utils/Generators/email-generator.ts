// Random characters email generator function.
export const generateRandomEmail = (domain: string = 'example.com'): string => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const username = Array.from({ length: 8 }, () => chars[Math.random() * chars.length | 0]).join('');
    return `${username}@${domain}`;
  };
//define the domain name when calling the function: generateRandomEmail('domain.com')


// Ultimate email generator function (almost realistic).
export const generateUltimateEmail = (options?: {
    domainPool?: string[];
    includeRealisticNames?: boolean;
    includePrefixes?: boolean;
    addRandomNumber?: boolean;
    includeSymbols?: boolean;
    maxLength?: number;
  }): string => {
    // Default configuration
    const config = {
      domainPool: [
        'example.com', 'mail.com', 'test.org', 'company.net', 'service.io',
        'app.dev', 'platform.xyz', 'mydomain.org', 'business.co', 'startup.tech',
        'webmail.biz', 'secure.net', 'innovation.ai', 'workspace.pro',
      ],
      includeRealisticNames: true,
      includePrefixes: true,
      addRandomNumber: true,
      includeSymbols: true,
      maxLength: 25,
      ...options,
    };
  
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = ['.', '_', '-'];
    const realisticFirstNames = [
      'john', 'jane', 'alex', 'rachel', 'michael', 'emily', 'daniel', 'sarah',
      'david', 'laura', 'chris', 'anna', 'jason', 'linda', 'mark', 'olivia',
      'paul', 'mia', 'robert', 'ella', 'kevin', 'zoe', 'ryan', 'amelia',
    ];
    const realisticLastNames = [
      'smith', 'brown', 'williams', 'johnson', 'miller', 'davis', 'garcia',
      'martinez', 'lee', 'thompson', 'taylor', 'clark', 'rodriguez', 'walker',
    ];
    const genericPrefixes = [
      'info', 'admin', 'support', 'contact', 'user', 'noreply', 'help',
      'service', 'team', 'orders', 'staff', 'sales', 'testing',
    ];

    const randomize = (pool: string | string[], length: number = 1): string =>
      Array.from({ length }, () => pool[Math.floor(Math.random() * pool.length)]).join('');
  
    let username = '';
  
    if (config.includePrefixes && Math.random() > 0.3) {

      username += randomize(genericPrefixes) + randomize(symbols);
    }
  
    if (config.includeRealisticNames && Math.random() > 0.5) {

      const firstName = randomize(realisticFirstNames);
      const lastName = randomize(realisticLastNames);
      username += firstName + randomize(symbols) + lastName;
    } else {
      username += randomize(letters, Math.floor(Math.random() * 8 + 3)); 
    }
  
    if (config.addRandomNumber) {
      username += randomize(numbers, Math.floor(Math.random() * 3 + 1)); // 1-3 digits
    }
  
    username = username.slice(0, config.maxLength);
  
    const domain = randomize(config.domainPool);
  
    return `${username}@${domain}`;
  };
/*  
 Basic Usage
console.log(generateUltimateEmail());

 Customized Usage
console.log(
    generateUltimateEmail({
    domainPool: ['customdomain.com', 'product.org'], // Custom domain pool
    includePrefixes: true,                          // Add realistic prefixes
    includeRealisticNames: true,                    // Realistic names
    addRandomNumber: true,                          // Random numbers at the end
    includeSymbols: true,                           // Include symbols
    maxLength: 30,                                  // Maximum length of the email address
  })
); */