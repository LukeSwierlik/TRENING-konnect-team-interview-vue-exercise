import { CatalogState, CatalogStateView, Service } from '@/shared/interfaces/catalog.interfaces';

export const catalogGetters = {
  services (state: CatalogState): Service[] {
    return state.services;
  },
  loadedService (state: CatalogState): boolean {
    return state.loaded;
  },
  catalogStateView (state: CatalogState): CatalogStateView {
    return state.catalogStateView;
  },
  filterServices: (state: CatalogState) => (searchTerm?: string): Service[] => {
    console.log('searchTerm', searchTerm);

    if (!searchTerm) {
      return state.services;
    }

    const result = state.services.filter(service => {
      return service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase());
    });

    console.log('result', result);

    return result;
  },
};
