<template>
  <section>
    <div class="hero">
      <h1 class="title">
        Services
      </h1>

      <div>
        <button
          class="action"
          data-cy="btnAddNewService"
        >
          Add new service
        </button>
      </div>
    </div>

    <div
      class="search-bar"
    >
      <input
        class="inputSearchBar"
        name="searchTerm"
        data-cy="searchBar"
        placeholder="search term"
        :disabled="servicesStateView === viewState.ERROR"
        @input="debounceInput"
      >
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { ServicesStateView } from '@/shared/interfaces/catalog.interfaces';
import Debounce from 'lodash/debounce';

export default Vue.extend({
  name: 'Hero',
  props: {
    searchServices: {
      type: Function
    },
    servicesStateView: {
      type: String as PropType<ServicesStateView>,
      default: ServicesStateView.EMPTY
    }
  },
  data () {
    return {
      viewState: ServicesStateView
    };
  },
  created () {
    this.debounceInput = Debounce(this.debounceInput, 500);
  },
  methods: {
    debounceInput (e) {
      this.searchServices(e.target.value);
    }
  }
});
</script>

<style scoped lang="scss">
.hero {
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    margin-top: 1rem;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }

.title {
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #0a2b66;
}

.action {
  padding: 8px 12px;
  font-size: 16px;
  color: #ffffff;
  background: #1456cb;
  border: 0;
  border-radius: 3px;
  cursor: pointer;

  &:active {
     transform: translateY(1px);
     filter: saturate(150%);
   }
  }
}

.search-bar {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: left;
  column-gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .inputSearchBar {
    background: url(/assets/Magnifying_Glass.svg) no-repeat scroll 10px;
    padding: 10px 10px 10px 34px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    box-sizing: border-box;
    width: 100%;

    &:disabled {
      background-color: #eee;
    }
  }
}
</style>
