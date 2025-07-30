<script lang="ts">
  import { page } from "$app/stores";
</script>

<section class="min-h-screen flex items-center justify-center bg-red-50 px-4">
  <div class="text-center">
    <h1 class="text-3xl font-bold text-red-700">Payment Cancelled</h1>
    <p class="mt-2 text-gray-600">
      It looks like you cancelled the checkout. No worries, you can try again.
    </p>
    <a
      href="/cart"
      class="inline-block mt-6 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
    >
      Back to Cart
    </a>
  </div>
</section>
