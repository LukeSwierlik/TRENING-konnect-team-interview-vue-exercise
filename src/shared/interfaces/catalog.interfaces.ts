export interface Service {
  id: string,
  name: string
  description: string
  versions: {
    id: string,
    name: string,
    description: string,
  }[]
}

export enum ServicesStateView {
  CATALOG = 'catalog',
  LOADING = 'loading',
  ERROR = 'error',
  EMPTY = 'empty',
}

export interface ServicesState {
  servicesStateView: ServicesStateView;
  services: Service[],
  error?: Error,
  pagination: {
    from: number;
    to: number;
    currentPage: number;
  }
}
