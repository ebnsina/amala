<script lang="ts">
  import { cartStore } from "$lib/store/cartStore";

  const total = $derived.by(() => {
    let total = 0;

    for (const item of $cartStore) {
      total += item.price * item.quantity;
    }
    return total;
  });
</script>

<div class="max-w-4xl mx-auto p-6 mt-20">
  <h1 class="text-2xl font-bold mb-4">Your Cart</h1>

  {#if $cartStore.length === 0}
    <p class="text-slate-500 text-sm">Your cart is empty.</p>
  {:else}
    <ul class="space-y-4">
      {#each $cartStore as item}
        <li
          class="flex justify-between items-center border-b border-slate-200 pb-3"
        >
          <div>
            <h2 class="font-semibold">{item.name}</h2>
            <p class="text-sm text-slate-500">
              Price: ${item.price} × {item.quantity}
            </p>
          </div>
          <div class="text-right">
            <p class="font-medium">${item.price * item.quantity}</p>
          </div>
        </li>
      {/each}
    </ul>

    <div
      class="mt-6 flex justify-between items-center border-t border-slate-300 pt-4"
    >
      <p class="text-lg font-bold">Total:</p>
      <p class="text-lg font-bold">
        $<span>{total}</span>
      </p>
    </div>

    <div class="mt-6 text-right">
      <a
        href="/checkout"
        class="inline-block bg-lime-600 text-white px-6 py-2 rounded-full hover:bg-lime-700 transition"
      >
        Proceed to Checkout →
      </a>
    </div>
  {/if}
</div>
