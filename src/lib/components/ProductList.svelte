<script lang="ts">
  import { products } from "$lib/data/products";
  import ProductCard from "./ProductCard.svelte";
</script>

<div class="bg-slate-50 py-20">
  <div
    class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
  >
    {#each products as product (product.id)}
      <ProductCard {product} />
    {/each}
  </div>
</div>
