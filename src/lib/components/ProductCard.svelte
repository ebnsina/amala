<script lang="ts">
  import { cartStore } from "../store/cartStore";
  const { product } = $props();

  const buyNow = () => {
    cartStore.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    alert(`Added ${product.name} to cart`);
  };
</script>

<article
  class="flex flex-col bg-white border border-slate-200 p-4 rounded-xl transition"
>
  <div>
    <img
      src={product.image}
      alt={product.name}
      class="w-full h-48 object-cover rounded"
    />
    <h2 class="text-base font-bold mt-2">{product.name}</h2>
    <p class="text-slate-600 mb-2">${product.price}</p>
    {#if product.description}
      <p class="text-sm text-slate-500 truncate">{product.description}</p>
    {/if}
  </div>

  <div class="mt-auto">
    <button
      onclick={buyNow}
      class="mt-4 w-full bg-lime-600 text-white py-2 px-4 rounded-full hover:bg-lime-700 transition"
    >
      Buy Now
    </button>
  </div>
</article>
