<template>
  <div id="nav">
    <span
      v-for="link in links"
      :key="link.url"
    >
      <router-link :to="link.url">{{link.title}}</router-link> |
    </span>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: 'Home', url: '/' },
      { title: 'Fruits', url: '/fruits' },
      { title: 'Sweets', url: '/sweets' },
      { title: 'Basket', url: '/basket' }
    ]
  })
}
</script>
