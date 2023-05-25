import axios from 'axios';
import type { AxiosInstance } from 'axios';

export class AxiosSingleton {

    private static instance: AxiosInstance;
    private static baseURL: string = 'http://localhost:5283/api/v1';
    private static timeout: number = 10000;

    private constructor() {}

    static getInstance(): AxiosInstance {
        if(!AxiosSingleton.instance){
            AxiosSingleton.instance = axios.create({
                baseURL: this.baseURL,
                timeout: this.timeout,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        return AxiosSingleton.instance;
    }

}