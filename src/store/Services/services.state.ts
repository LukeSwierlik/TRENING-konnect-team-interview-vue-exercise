import { CatalogState, CatalogStateView } from '@/shared/interfaces/catalog.interfaces';

export const servicesState: CatalogState = {
  catalogStateView: CatalogStateView.EMPTY,
  services: [],
  loaded: true
};
