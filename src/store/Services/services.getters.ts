import { ServicesState, ServicesStateView, Service } from '@/shared/interfaces/catalog.interfaces';

const ITEM_COUNT = 12;

export const servicesGetters = {
  services (state: ServicesState): Service[] {
    return state.services;
  },
  catalogStateView (state: ServicesState): ServicesStateView {
    return state.servicesStateView;
  },
  filterServices: (state: ServicesState) => (searchTerm?: string): Service[] => {
    if (!searchTerm) {
      return state.services;
    }

    const result = state.services.filter(service => {
      return service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return result;
  },
  paginationDirections:(state: ServicesState) => (listServices: Service[]): string =>{
    const { services, pagination } = state;

    return `${pagination.from + 1} - ${Math.min(
      pagination.to,
      listServices.length
    )} of ${listServices.length}`;
  },
  currentPage (state: ServicesState): number {
    return state.pagination.currentPage;
  },
  isFirstPageGetter (state: ServicesState): boolean {
    return state.pagination.currentPage === 1;
  },
  isLastPageGetter:(state: ServicesState) => (listServices: Service[]): boolean => {
    return ITEM_COUNT * state.pagination.currentPage >= listServices.length;
  },
  displayedListServices: (state: ServicesState) => (listServices: Service[]): Service[] => {
    return listServices.slice(state.pagination.from, state.pagination.to);
  }
};
