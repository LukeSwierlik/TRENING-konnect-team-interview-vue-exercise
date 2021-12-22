<template>
  <section class="services">
    <div
      v-if="catalogStateView === viewState.CATALOG"
      class="catalog"
    >
      <KCard
        v-for="service in services"
        :key="service.id"
        class="card"
      >
        <template slot="title">
          <div class="card-title">
            {{ service.name }}
          </div>
        </template>
        <template slot="body">
          <div class="card-body">
            {{ service.description }}
          </div>

          <div class="card-footer">
            <div class="card-footer-badge">
              {{ service.versions.length }}
            </div>
            <b>Versions</b>
          </div>
        </template>
      </KCard>
    </div>

    <div
      v-else-if="catalogStateView === viewState.LOADING"
    >
      <KSkeleton
        type="card"
        :card-count="9"
      />
    </div>

    <div v-else-if="catalogStateView === viewState.EMPTY">
      <KEmptyState cta-is-hidden>
        <template #title>
          No Content
        </template>
        <template #message>
          You do not have any content here 😉️
        </template>
      </KEmptyState>
    </div>
  </section>
</template>

<script lang="ts">
import { CatalogStateView, Service } from '@/shared/interfaces/catalog.interfaces';
import KCard from '@kongponents/kcard';
import KEmptyState from '@kongponents/kemptystate';
import { KSkeleton } from '@kongponents/kskeleton';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'Catalog',
  components: {
    KCard,
    KEmptyState,
    KSkeleton
  },
  props: {
    services: {
      type: Array as PropType<Service[]>,
      default: []
    },
    catalogStateView: {
      type: String as PropType<CatalogStateView>,
      default: CatalogStateView.EMPTY
    }
  },
  data () {
    return {
      // services: [],
      filteredServices: [],
      viewState: CatalogStateView
    };
  }
});
</script>

<style lang="scss">
@import '../assets/spinner';

.services {
  margin-top: 2rem;
}

.catalog {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  text-align: left;
  column-gap: 2rem;
  row-gap: 2rem;

  .k-card-title {
    width: 100%;
  }

  .card {
    padding: 2rem 1rem;
    min-width: 0;
    min-height: 0;

    &:hover {
      border: 1px solid #A6C6FF;
      cursor: pointer;
    }

    &-title {
      font-size: 1rem;
      font-weight: bold;
      color: #1456cb;

      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    &-body {
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.45);
      line-height: 1.2rem;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
    }

    &-footer {
      margin-top: 18px;
      font-size: 13px;

      &-badge {
        font-weight: bold;
        line-height: 1;

        /* blue-500 */

        color: #1456cb;
        display: inline-block;
        border-radius: 40px;
        border: 1px solid #d9e7ff;
        padding: 2px 10px;
        margin-right: 5px;
      }
    }
  }
}

.paging {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;

  margin-bottom: 82px;

  .arrow {
    display: block;
    background: none;
    border: none;
    cursor: pointer;

    &:active {
      transform: translateY(1px);
      filter: saturate(150%);
    }

    .reversed {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
  }

  .directions {
    padding: 0 48px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.45);
    opacity: 0.7;
  }
}
</style>
