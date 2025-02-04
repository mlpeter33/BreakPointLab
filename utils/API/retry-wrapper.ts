import axios, { AxiosRequestConfig, AxiosResponse } from 'axios/index';

// Automatically retries failed API requests using exponential backoff
export async function retryWrapper<T>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    config: AxiosRequestConfig,
    retries: number = 3,
    delay: number = 500
): Promise<AxiosResponse<T>> {
    let attempt = 0;

    while (attempt < retries) {
        try {
            return await axios.request<T>({ ...config, url, method });
        } catch (error) {
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