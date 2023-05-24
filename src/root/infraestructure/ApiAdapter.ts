import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

class ApiAdapter {

    private axiosInstance: AxiosInstance;

    constructor(){
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:5283/api/v1',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {

        try {
            const response: AxiosResponse<T> = await this.axiosInstance.get<T, any>(url, config)
            return response.data;
        } catch (error: any) {
            throw new Error(`Error in the request GET ${url}: ${error.message} `)
        }

    }

    public async post<T>(url: string, data?: T, config?: AxiosRequestConfig): Promise<T> {
        
        try {
            const response: AxiosResponse<T> = await this.axiosInstance.post<T, any>(url, data, config);
            return response.data
        } catch (error: any) {
            throw new Error(`Error in the request POST ${url}: ${error.message} `)
        }
        
    }

}

export default ApiAdapter