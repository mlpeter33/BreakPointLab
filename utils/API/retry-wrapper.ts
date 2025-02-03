import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios/index";

//Automatically retries failed API requests using exponential backoff

export async function requestWithRetry<T>(
    config: Omit<AxiosRequestConfig, "url"> & { url: string },
    retries = 3,
    delay = 500
): Promise<AxiosResponse<T>> {
    let attempt = 0;

    while (attempt < retries){
        try {
            return await axios(config as AxiosRequestConfig);
        } catch (error) {
            if (attempt < retries - 1) {
                await new Promise((resolve) => setTimeout(resolve, delay * Math.pow(2,attempt)));
            } else {
                throw error;
            }
        }
        attempt++;
    }
    throw new Error('Unexpected error in requestWithRetry');
}