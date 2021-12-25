import { MutationTypes } from '@/store/Services/services.mutations';
import {fetchServices, fetchServicesError} from '@/store/Services/services.service';
import {ServicesStateView} from "@/shared/interfaces/catalog.interfaces";

export const servicesActions = {
  fetchServicesActions (context): void {
    context.commit(MutationTypes.LOADED_SERVICES);

    setTimeout(() => {
      fetchServices().then((res) => {
        console.log('res', res);
        context.commit(MutationTypes.LOADED_SERVICES_SUCCESS, res.data);
      }).catch(error => {
        context.commit(MutationTypes.LOADED_SERVICES_FAILURE, error as Error);
      });
    }, 500);
  },
  setStatus (context, status: ServicesStateView): void {
    context.commit(MutationTypes.SET_STATUS, status);
  },
  nextPagePagination (context, servicesLength: number): void {
    context.commit(MutationTypes.NEXT_PAGE, servicesLength);
  },
  previousPagePagination(context): void {
    context.commit(MutationTypes.PREVIOUS_PAGE);
  },
  resetPagination(context): void {
    context.commit(MutationTypes.RESET_PAGINATION);
  }
};
