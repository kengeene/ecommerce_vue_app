<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Layout",
  components: {
    Footer: () => import("./Footer.vue"),
    Header: () => import("./Header.vue"),
  },
};
</script>

<style scoped></style>
