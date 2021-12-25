<template>
  <main class="container">
    <Hero
      :search-value="searchValueParent"
      :catalog-state-view="catalogStateView"
    />
    <Catalog
      :services="displayedServices()"
      :catalog-state-view="catalogStateView"
    />
    <Pagination
      :is-first-page="isFirstPageGetter"
      :is-last-page="isLastPageGetter(this.listServices)"
      :paging-directions="paginationDirections(listServices)"
      :page="currentPage"
      :services-length="listServices.length"
      @nextPage="nextPage()"
      @previousPage="previousPage()"
    />
  </main>
</template>

<script lang="ts">

import Hero from '@/components/Hero.vue';
import Pagination from '@/components/Pagination.vue';
import { Service } from '@/shared/interfaces/catalog.interfaces';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import Catalog from '../components/Services.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Pagination,
    Hero,
    Catalog
  },
  data () {
    return {
      listServices: [],
      page: 1
    };
  },
  computed: {
    ...mapGetters('ServicesModule', [
      'services',
      'catalogStateView',
      'filterServices',
      'paginationDirections',
      'currentPage',
      'isFirstPageGetter',
      'isLastPageGetter',
      'displayedListServices'
    ]),
  },
  watch: {
    services (newValue) {
      this.listServices = newValue;
    }
  },
  mounted () {
    this.fetchServicesActions();
  },
  methods: {
    ...mapActions('ServicesModule', [
      'fetchServicesActions',
      'setStatus',
      'nextPagePagination',
      'previousPagePagination',
      'resetPagination'
    ]),
    searchValueParent (value: string) {
      this.listServices = this.filterServices(value);
      this.resetPagination();
    },
    displayedServices (): Service[] {
      console.log('this.listServices', this.listServices);
      return this.displayedListServices(this.listServices);
    },
    nextPage () {
      this.nextPagePagination(this.listServices.length);
    },
    previousPage () {
      this.previousPagePagination();
    }
  }
});
</script>

<style lang="scss">
.container {
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 1000px) {
        padding: 20px;
    }

    @media (max-width: 500px) {
        padding: 10px;
    }
}
</style>
