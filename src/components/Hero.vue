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
      class="search-bar">
      <input
        v-model="searchTerm"
        name="searchTerm"
        data-cy="searchBar"
        placeholder="search term"
        :disabled="catalogStateView === viewState.ERROR"
      >
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { ServicesStateView } from '@/shared/interfaces/catalog.interfaces';

export default Vue.extend({
  name: 'Hero',
  props: {
    searchValue: {
      type: Function,
    },
    catalogStateView: {
      type: String as PropType<ServicesStateView>,
      default: ServicesStateView.EMPTY
    },
  },
  data () {
    return {
      searchTerm: '',
      viewState: ServicesStateView
    };
  },
  watch: {
    searchTerm (val) {
      console.log(val);
      this.searchValue(val);
    }
  }
});
</script>

<style scoped lang="scss">
.hero {
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;

@media (max-width: 1000px) {
  margin-top: 20px;
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
  margin-top: 24px;
  text-align: left;

input {
  background: url(/assets/Magnifying_Glass.svg) no-repeat scroll 10px;
  padding: 10px 10px 10px 34px;
  width: calc(25% - 44px - 24px);

@media (max-width: 1000px) {
  width: calc(100% - 44px);
}

font-size: 16px;
color: rgba(0, 0, 0, 0.45);

border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 3px;
}
}
</style>
