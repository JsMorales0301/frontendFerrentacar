import axios from 'axios';
import type { AxiosInstance } from 'axios';

export class AxiosCloudinarySingleton {

    private static instance: AxiosInstance;
    private static baseURL: string = 'https://api.cloudinary.com/v1_1/dy9krwnj1';
    private static timeout: number = 10000;

    private constructor() {}

    static getInstance(): AxiosInstance {
        if(!AxiosCloudinarySingleton.instance){
            AxiosCloudinarySingleton.instance = axios.create({
                baseURL: this.baseURL,
                timeout: this.timeout,
            });
        }
        return AxiosCloudinarySingleton.instance;
    }

}