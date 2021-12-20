import { Service } from '@/shared/interfaces/catalog.interfaces';
import { API_CATALOG } from '@/shared/resources/catalog.resources';
import axios, { AxiosPromise } from 'axios';

export const fetchServices = (): AxiosPromise<Service[]> => axios.get(API_CATALOG.servicesPackages());
