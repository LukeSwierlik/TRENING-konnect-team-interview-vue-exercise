<template>
  <header class="nav">
    <router-link
      to="/"
      class="nav-item nav-item-wide logo"
    >
      <img
        class="logoImg"
        :src="`./assets/Konnect.svg`"
      >
    </router-link>
    <img
      class="nav-item"
      :src="`./assets/Notifications.svg`"
    >
    <img
      class="nav-item"
      :src="`./assets/Help.svg`"
    >
    <img
      class="user nav-item"
      :src="`./assets/avatar.png`"
    >
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">
.nav {
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  &-item {
    display: block;
    width: 20px;
    height: 20px;

    &-wide {
      margin-right: auto;
    }
  }

  .logo {
    display: block;
    height: 15px;
    width: auto;

    .logoImg {
      width: 100%;
    }
  }

  .user {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
}
</style>
