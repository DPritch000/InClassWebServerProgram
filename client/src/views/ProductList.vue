<script>
import {useProductStore} from '../stores/products';

const products = useProductsStore()
</script>

<template>
  <h1 class="title is-1">Product List</h1>
  <div class = grid>
    <div v-for="product in products.products" :key="product.id" class ="box">
     <img :src="product.imageUrl" alt="Product Image" class="image is-4by3">
     <b>{{product.title}}</b>
      <p>{{product.description}}</p>
      <div class="price">

    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
