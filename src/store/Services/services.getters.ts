import { ServicesState, ServicesStateView, Service } from '@/shared/interfaces/catalog.interfaces';

export const servicesGetters = {
  services (state: ServicesState): Service[] {
    return state.services;
  },
  catalogStateView (state: ServicesState): ServicesStateView {
    return state.servicesStateView;
  },
  filterServices: ({ services }: ServicesState) => (searchTerm?: string): Service[] => {
    if (!searchTerm) {
      return services;
    }

    return services.filter(service => {
      return service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase());
    });
  },
  paginationDirections:(state: ServicesState) => (listServicesLength: number): string =>{
    const { from, to } = state.pagination;

    return `${from + 1} - ${Math.min(
      to,
      listServicesLength
    )} of ${listServicesLength}`;
  },
  currentPage (state: ServicesState): number {
    return state.pagination.currentPage;
  },
  isFirstPageGetter (state: ServicesState): boolean {
    return state.pagination.currentPage === 1;
  },
  isLastPageGetter:({ pagination } : ServicesState) => (listServices: Service[]): boolean => {
    const {currentPage, itemCount} = pagination;

    return itemCount * currentPage >= listServices.length;
  },
  displayedListServices: (state: ServicesState) => (listServices: Service[]): Service[] => {
    const { from, to } = state.pagination;

    return listServices.slice(from, to);
  }
};
