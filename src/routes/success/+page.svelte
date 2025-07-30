<script lang="ts">
  import { cartStore } from "$lib/store/cartStore";
  import { onMount } from "svelte";

  onMount(() => {
    cartStore.clearCart();
  });
</script>

<section class="min-h-screen flex items-center justify-center bg-green-50 px-4">
  <div class="text-center">
    <h1 class="text-3xl font-bold text-green-700">🎉 Payment Successful!</h1>
    <p class="mt-2 text-gray-600">
      Thank you for your purchase. Your payment has been processed successfully.
    </p>
    <a
      href="/"
      class="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
    >
      Go back to Home
    </a>
  </div>
</section>
