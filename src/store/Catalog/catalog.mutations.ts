import { CatalogState, CatalogStateView, Service } from '@/shared/interfaces/catalog.interfaces';
import Vue from 'vue';
import { MutationTree } from 'vuex';

export enum MutationTypes {
  LOADED_SERVICES = '[Catalog] Loaded Services',
  LOADED_SERVICES_SUCCESS = '[Catalog] Loaded Services Success',
  LOADED_SERVICES_FAILURE = '[Catalog] Loaded Services Failure',
}

export type CatalogMutations<S = CatalogState> = {
  [MutationTypes.LOADED_SERVICES] (state: S): void,
  [MutationTypes.LOADED_SERVICES_SUCCESS](state: S, payload: Service[]): void,
  [MutationTypes.LOADED_SERVICES_FAILURE](state: S, error: Error): void,
}

export const catalogMutations: MutationTree<CatalogState> & CatalogMutations = {
  [MutationTypes.LOADED_SERVICES] (state: CatalogState): void {
    state.loaded = false;
    state.catalogStateView = CatalogStateView.LOADING;
  },
  [MutationTypes.LOADED_SERVICES_SUCCESS] (state: CatalogState, services: Service[]): void {
    if (services.length) {
      state.catalogStateView = CatalogStateView.LOADING;
    } else {
      state.catalogStateView = CatalogStateView.EMPTY;
    }

    Vue.set(state, 'services', services);
    state.loaded = true;
  },
  [MutationTypes.LOADED_SERVICES_FAILURE] (state: CatalogState, error: Error): void {
    state.loaded = true;
    state.error = error;

    state.catalogStateView = CatalogStateView.ERROR;
  }
};
