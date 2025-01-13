// Random characters email generator function.
export const generateRandomEmail = (domain: string = 'example.com'): string => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const username = Array.from({ length: 8 }, () => chars[Math.random() * chars.length | 0]).join('');
    return `${username}@${domain}`;
  };
//define the domain name when calling the function: generateRandomEmail('domain.com')