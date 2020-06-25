<template>
  <div id="app">
    <NavBar/>
    <component :is="layout"/>
  </div>
</template>

<script>
import BasketLayout from '@/layouts/BasketLayouts'
import EmptyLayout from '@/layouts/EmptyLayouts'
import ProductLayout from '@/layouts/ProductLayouts'
import NavBar from '@/components/NavBar'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    BasketLayout,
    EmptyLayout,
    ProductLayout,
    NavBar
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
