// Formats a Date object into a human-readable string, useful for verifying or injecting dates in forms.
export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
};

/* Unnecessary function
// Generates a completely random alphanumeric string of the given length, useful for creating unique test data like usernames.
export const randomString = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}; */
  
// Pauses the execution for a specified duration, helpful for debugging or simulating real-world wait times.
export const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
  