import { catalogActions } from '@/store/Catalog/catalog.actions';
import { catalogGetters } from '@/store/Catalog/catalog.getters';
import { catalogMutations } from '@/store/Catalog/catalog.mutations';
import { catalogState } from '@/store/Catalog/catalog.state';

export const CatalogModule = {
  namespaced: true,
  state: catalogState,
  getters: catalogGetters,
  mutations: catalogMutations,
  actions: catalogActions
};
