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

export enum CatalogStateView {
  CATALOG = 'catalog',
  LOADING = 'loading',
  ERROR = 'error',
  EMPTY = 'empty',
}

export interface CatalogState {
  catalogStateView: CatalogStateView;
  services: Service[],
  loaded: boolean,
  error?: Error,
}
