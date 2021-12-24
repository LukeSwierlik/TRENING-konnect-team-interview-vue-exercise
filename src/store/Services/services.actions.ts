import { MutationTypes } from '@/store/Services/services.mutations';
import { fetchServices } from '@/store/Services/services.service';
import {CatalogStateView} from "@/shared/interfaces/catalog.interfaces";

export const servicesActions = {
  fetchServicesActions (context): void {
    context.commit(MutationTypes.LOADED_SERVICES);

    setTimeout(() => {
      fetchServices().then((res) => {
        context.commit(MutationTypes.LOADED_SERVICES_SUCCESS, res.data);
      }).catch(error => {
        context.commit(MutationTypes.LOADED_SERVICES_FAILURE, error as Error);
      });
    }, 500);
  },
  setStatus (context, status: CatalogStateView): void {
    context.commit(MutationTypes.SET_STATUS, status);
  }
};
