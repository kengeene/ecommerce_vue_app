<template>
  <div id="default">
    <SfHeader :logo="shopLogo" :title="shopName" active-icon="account">
      <template #navigation>
        <SfHeaderNavigationItem
          v-for="(category, key) in shopRootCategories"
          :key="`sf-header-navigation-item-${key}`"
          :link="`/${category}`"
          :label="category"
        />
      </template>
    </SfHeader>
  </div>
</template>
<script>
import { SfHeader } from "@storefront-ui/vue";
export default {
  name: "Header",
  components: {
    SfHeader,
  },
  data() {
    return {
      shopLogo: "/assets/logo.svg",
      shopName: "Storefront UI",
      shopRootCategories: ["women", "man", "kids"],
      footerColumns: [
        {
          title: "About us",
          items: ["Who we are", "Quality in the details", "Customer Reviews"],
        },
        {
          title: "Departments",
          items: ["Women fashion", "Men fashion", "Kidswear", "Home"],
        },
        {
          title: "Help",
          items: ["Customer service", "Size guide", "Contact us"],
        },
        {
          title: "Payment & delivery",
          items: ["Purchase terms", "Guarantee"],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
</style>
