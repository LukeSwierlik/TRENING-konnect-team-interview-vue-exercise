<template>
  <main class="container">
    <Hero
      :search-value="searchValueParent"
    />
    <Catalog
      :services="displayedServices()"
      :catalog-state-view="catalogStateView"
    />
    <Pagination
      :is-first-page="isFirstPage"
      :is-last-page="isLastPage"
      :paging-directions="pagingDirections()"
      :page="page"
      :services-length="listServices.length"
      @nextPage="nextPage"
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
import Catalog from '../components/Catalog.vue';

const ITEM_COUNT = 12;

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
    ...mapGetters('CatalogModule', ['services', 'catalogStateView', 'filterServices']),
    pagingFrom (): number {
      return ITEM_COUNT * (this.page - 1);
    },
    pagingTo (): number {
      return ITEM_COUNT * this.page;
    },
    isFirstPage (): boolean {
      return this.page === 1;
    },
    isLastPage (): boolean {
      return ITEM_COUNT * this.page >= this.listServices.length;
    }
  },
  watch: {
    searchTerm (val) {
      console.log(val);
    },
    services (newValue) {
      this.listServices = newValue;
    }
  },
  mounted () {
    this.fetchServicesActions();
  },
  methods: {
    ...mapActions('CatalogModule', ['fetchServicesActions']),
    searchValueParent (value: string) {
      this.listServices = this.filterServices(value);
    },
    displayedServices (): Service[] {
      return this.listServices.slice(this.pagingFrom, this.pagingTo);
    },
    pagingDirections (): string {
      return `${this.pagingFrom + 1} - ${Math.min(
        this.pagingTo,
        this.listServices.length
      )} of ${this.listServices.length}`;
    },
    nextPage () {
      if (!this.isLastPage) this.page += 1
    },
    previousPage () {
      if (!this.isFirstPage) this.page -= 1
    },
    resetPage () {
      this.page = 1
    },
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
