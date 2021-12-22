import { MutationTypes } from '@/store/Catalog/catalog.mutations';
import { fetchServices } from '@/store/Catalog/catalog.service';

export enum ActionTypes {
  FETCH_SERVICES = 'FETCH_SERVICES',
}

export const catalogActions = {
  fetchServicesActions (context): void {
    context.commit(MutationTypes.LOADED_SERVICES);

    setTimeout(() => {
      fetchServices().then((res) => {
        context.commit(MutationTypes.LOADED_SERVICES_SUCCESS, res.data);
      }).catch(error => {
        context.commit(MutationTypes.LOADED_SERVICES_FAILURE, error as Error);
      });
    }, 5000);
  }
};
