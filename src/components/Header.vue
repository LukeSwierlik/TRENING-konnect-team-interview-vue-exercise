<template>
  <header>
    <div class="nav">
      <router-link
        to="/"
        class="nav-item nav-item-wide"
      >
        <img
          class="logo"
          height="15px"
          :src="`${publicPath}assets/Konnect.svg`"
        >
      </router-link>
      <img
        class="nav-item"
        height="20px"
        width="20px"
        :src="`${publicPath}assets/Notifications.svg`"
      >
      <img
        class="nav-item"
        height="20px"
        width="20px"
        :src="`${publicPath}assets/Help.svg`"
      >
      <img
        class="user nav-item"
        height="32px"
        width="32px"
        :src="`${publicPath}assets/Avatar.png`"
      >
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      publicPath: process.env.BASE_URL
    };
  }
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

    &-wide {
      margin-right: auto;
    }
  }

  .logo {
    display: block;
  }

  .user {
    border-radius: 50%;
  }
}
</style>
