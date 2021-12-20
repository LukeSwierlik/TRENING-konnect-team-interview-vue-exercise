<template>
  <main class="container">
    <Hero
      :search-value="searchValueParent"
    />
    <Catalog
      :services="listServices"
      :catalog-state-view="catalogStateView"
    />
  </main>
</template>

<script lang="ts">

import Hero from '@/components/Hero.vue';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import Catalog from '../components/Catalog.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Hero,
    Catalog
  },
  data () {
    return {
      listServices: []
    }
  },
  computed: {
    ...mapGetters('CatalogModule', ['services', 'catalogStateView', 'filterServices']),
  },
  watch: {
    searchTerm (val) {
      console.log(val);
    },
    services(newValue) {
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
