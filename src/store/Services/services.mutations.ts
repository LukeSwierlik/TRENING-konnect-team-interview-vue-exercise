import { ServicesState, ServicesStateView, Service } from '@/shared/interfaces/catalog.interfaces';
import Vue from 'vue';
import { MutationTree } from 'vuex';

export enum MutationTypes {
  LOADED_SERVICES = '[Services] Loaded Services',
  LOADED_SERVICES_SUCCESS = '[Services] Loaded Services Success',
  LOADED_SERVICES_FAILURE = '[Services] Loaded Services Failure',
  SET_STATUS = '[Services] Set Status',
  NEXT_PAGE = '[Services] Next Page',
  PREVIOUS_PAGE = '[Services] Previous Page',
  RESET_PAGINATION = '[Services] Reset Pagination'
}

const ITEM_COUNT = 12;

export type ServicesMutations<S = ServicesState> = {
  [MutationTypes.LOADED_SERVICES] (state: S): void,
  [MutationTypes.LOADED_SERVICES_SUCCESS](state: S, payload: Service[]): void,
  [MutationTypes.LOADED_SERVICES_FAILURE](state: S, error: Error): void,
}

export const catalogMutations: MutationTree<ServicesState> & ServicesMutations = {
  [MutationTypes.LOADED_SERVICES] (state: ServicesState): void {
    state.servicesStateView = ServicesStateView.LOADING;
  },
  [MutationTypes.LOADED_SERVICES_SUCCESS] (state: ServicesState, services: Service[]): void {
    if (services.length) {
      state.servicesStateView = ServicesStateView.CATALOG;
      state.pagination = {
        from: 0,
        to: ITEM_COUNT,
        currentPage: 1
      };
    } else {
      state.servicesStateView = ServicesStateView.EMPTY;
    }

    Vue.set(state, 'services', services);
  },
  [MutationTypes.LOADED_SERVICES_FAILURE] (state: ServicesState, error: Error): void {
    state.error = error;

    state.servicesStateView = ServicesStateView.ERROR;
  },
  [MutationTypes.SET_STATUS] (state: ServicesState, status: ServicesStateView): void {
    state.servicesStateView = status;
  },
  [MutationTypes.NEXT_PAGE] (state: ServicesState, servicesLength: number): void {
    const isLastPage = ITEM_COUNT * state.pagination.currentPage >= servicesLength;
    console.log('isLastPage', isLastPage);

    if (!isLastPage) {
      state.pagination.currentPage += 1;
      state.pagination.from = ITEM_COUNT * (state.pagination.currentPage - 1);
      state.pagination.to = ITEM_COUNT * state.pagination.currentPage;
    }
  },
  [MutationTypes.PREVIOUS_PAGE] (state: ServicesState): void {
    const isFirstPage = state.pagination.currentPage === 1;

    if (!isFirstPage) {
      state.pagination.currentPage -= 1;
      state.pagination.from = ITEM_COUNT * (state.pagination.currentPage - 1);
      state.pagination.to = ITEM_COUNT * state.pagination.currentPage;
    }
  },
  [MutationTypes.RESET_PAGINATION] (state: ServicesState): void {
    state.pagination = {
      from: 0,
      to: ITEM_COUNT,
      currentPage: 1
    };
  }
};
