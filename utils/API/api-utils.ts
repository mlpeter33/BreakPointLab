import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios/index';

// Automatically retries failed API requests using exponential backoff

export async function retryWrapper<T>(
    url: string,
    method: Method = 'GET', 
    config: AxiosRequestConfig = {},
    retries: number = 3,
    delay: number = 500
): Promise<AxiosResponse<T>> {
    let attempt = 0;
    //Logs the number of attempts and the method and url of the request
    while (attempt < retries) {
        try {
            console.log(`Attempt ${attempt + 1} for ${method} ${url}`);
            return await axios.request<T>({ ...config, url, method });
        } catch (error) {
            console.warn(`Retry attempt ${attempt + 1} failed:`, error);
            if (attempt < retries - 1) {
                await new Promise((resolve) =>
                    setTimeout(resolve, delay * Math.pow(2, attempt))
                );
            } else {
                throw error;
            }
        }
        attempt++;
    }
    throw new Error("Failed to fetch data");
}

/**Example usage: 
 * retryWrapper("https://api.example.com/data", "GET") // GET request
    .then(response => console.log("Data:", response.data)) // Success
    .catch(error => console.error("Final API Error:", error)); // Failure
 */