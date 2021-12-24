<template>
  <section class="paging">
    <button
      name="previous"
      class="arrow"
      data-cy="btnPreviousPage"
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

    <div class="directions" data-cy="directions">
      {{ pagingDirections }}
    </div>

    <button
      class="arrow"
      name="next"
      data-cy="btnNextPage"
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

export default Vue.extend({
  name: 'Pagination',
  props: {
    page: {
      type: Number,
      required: true,
      default: 1
    },
    servicesLength: {
      type: Number,
      required: true,
      default: 1
    },
    isFirstPage: {
      type: Boolean
    },
    pagingDirections: {
      type: String
    },
    isLastPage: {
      type: Boolean
    }
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    };
  },
  methods: {
    nextPage () {
      this.$emit('nextPage');
    },
    previousPage () {
      this.$emit('previousPage');
    },
    resetPage () {
      this.$emit('resetPage');
    }
  }
});
</script>
