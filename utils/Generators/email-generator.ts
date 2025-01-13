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
    addRandomNumber?: boolean;
    includeSymbols?: boolean;
    maxLength?: number;
  }): string => {

    const config = {
      domainPool: ['example.com', 'mail.com', 'test.org', 'company.net', 'service.io', 
      'app.dev', 'platform.xyz', 'mydomain.org', 'business.co', 'startup.tech',
      'appcloud.com', 'webmail.biz', 'secure.net', 'innovation.ai', 'workspace.pro',
      'portal.app', 'connect.dev', 'dash.site', 'support.help', 'testlab.io',],
      includeRealisticNames: true,
      addRandomNumber: true,
      includeSymbols: true,
      maxLength: 25, 
      ...options,
    };
  
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = ['.', '_', '-'];
    const realisticFirstNames = ['john', 'jane', 'alex', 'rachel', 'michael', 'emily', 'daniel', 'sarah'];
    const realisticLastNames = ['smith', 'brown', 'williams', 'johnson', 'miller', 'davis', 'garcia', 'martinez'];
    const genericPrefixes = [
        'info', 'admin', 'team', 'support', 'contact', 'user', 'noreply', 'help',
        'service', 'orders', 'clients', 'staff', 'sales', 'testing', 'testuser',
    ];
  
    const randomize = (pool: string | string[], length: number = 1): string =>
      Array.from({ length }, () => pool[Math.floor(Math.random() * pool.length)]).join('');
  
    let username = '';
  
    if (config.includeRealisticNames && Math.random() > 0.3) {

      const firstName = randomize(realisticFirstNames);
      const lastName = randomize(realisticLastNames);
      username = `${firstName}${config.includeSymbols ? randomize(symbols) : ''}${lastName}`;
    } else {

      const prefix = randomize(genericPrefixes);
      username = prefix;
    }
  

    if (config.addRandomNumber && Math.random() > 0.5) {
      username += randomize(numbers, Math.floor(Math.random() * 3 + 1)); 
    }
  

    username = username.slice(0, config.maxLength);
  

    const domain = randomize(config.domainPool);
  
    return `${username}@${domain}`;
  };
// To call a custom email generator function, use the following call as example: 
// console.log(generateUltimateEmail({ domainPool: ['gmail.com'], maxLength: 10})); this will generate a random email with a maximum length of 10 characters and the domain 'gmail.com'.