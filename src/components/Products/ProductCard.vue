<template>
  <div>
    <SfProductCard
      :image="product.image"
      :colors="product.colors"
      :title="product.title"
      :regular-price="product.price.regular"
      :special-price="product.price.special"
      :score-rating="product.rating.score"
      :max-rating="product.rating.max"
      :is-in-wishlist="product.isInWishlist"
      :show-add-to-cart-button="true"
      :reviews-count="product.reviews"
      :badge-label="product.badgeLabel"
      :badge-color="product.badgeColor"
      :image-width="216"
      :image-height="326"
      image-tag="nuxt-img"
      :nuxt-img-config="{
        format: 'webp',
        fit: 'cover',
      }"
      @click:wishlist="toggleWishlist(index)"
      @click:colors="handleSelectedColor($event, index)"
      @click="clickedProduct(product.id)"
    />
  </div>
</template>

<script>
import { SfProductCard } from "@storefront-ui/vue";

export default {
  name: "ProductCard",
  components: {
    SfProductCard,
  },
  props: {
    product: {
      type: Object,
      default: () => {},
      require: true,
    },
  },
  methods: {
    clickedProduct(id = "no-id") {
      this.$router.push(`/product/${id}`);
    },
    toggleWishlist(index) {
      return (this.products[index].isInWishlist =
        !this.products[index].isInWishlist);
    },
    handleSelectedColor(color, index) {
      this.products[index].colors.map((el) => {
        el.selected = el.label === color.label ? !el.selected : false;
      });
    },
  },
};
</script>

<style scoped></style>
