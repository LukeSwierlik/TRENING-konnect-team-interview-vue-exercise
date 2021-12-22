<template>
  <section class="paging">
    <button
      class="arrow"
      :disabled="isFirstPage"
      @click="previousPage"
    >
      <img
        class="reversed"
        height="44px"
        width="44px"
        :src="
          isFirstPage
            ? `${publicPath}assets/Grey-Arrow.svg`
            : `${publicPath}assets/Active-Arrow.svg`
        "
      >
    </button>
    <div class="directions">
      {{ pagingDirections }}
    </div>

    <button
      class="arrow"
      :disabled="isLastPage"
      @click="nextPage"
    >
      <img
        height="44px"
        width="44px"
        :src="
          isLastPage
            ? `${publicPath}assets/Grey-Arrow.svg`
            : `${publicPath}assets/Active-Arrow.svg`
        "
      >
    </button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

const ITEM_COUNT = 12;

export default Vue.extend({
  name: 'Pagination',
  props: {
    servicesLength: {
      type: Number,
      required: true,
      default: 1
    }
  },
  data () {
    return {
      page: 1,
      publicPath: process.env.BASE_URL
    };
  },
  computed: {
    pagingFrom (): number {
      return ITEM_COUNT * (this.page - 1);
    },
    pagingTo (): number {
      return ITEM_COUNT * this.page;
    },
    pagingDirections (): string {
      return `${this.pagingFrom + 1} - ${Math.min(
        this.pagingTo,
        this.servicesLength
      )} of ${this.servicesLength}`;
    },
    isFirstPage (): boolean {
      return this.page === 1;
    },
    isLastPage (): boolean {
      return ITEM_COUNT * this.page >= this.servicesLength;
    }
  },
  methods: {
    nextPage () {
      if (!this.isLastPage) this.page += 1;
    },
    previousPage () {
      if (!this.isFirstPage) this.page -= 1;
    },
    resetPage () {
      this.page = 1;
    }
  }
});
</script>

<style scoped>

</style>
