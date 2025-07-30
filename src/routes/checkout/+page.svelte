<script lang="ts">
  import Toast from "$lib/components/Toast.svelte";
  import { cartStore, totalPrice } from "$lib/store/cartStore";
  import { stripePromise } from "$lib/stripe";

  let name = "";
  let address = "";
  let phone = "";
  let showToast = false;

  async function handlePayment() {
    if (!name || !address || !phone) {
      alert("Please fill in all shipping details.");
      return;
    }

    const stripe = await stripePromise;
    const res = await fetch("/api/payment/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cartItems: $cartStore,
        shippingInfo: {
          name,
          address,
        },
      }),
    });

    const data = await res.json();

    if (data.sessionId && stripe) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });
      if (error) alert(error.message);
    } else {
      alert("Failed to create checkout session");
    }
  }
</script>

<div class="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
  <div class="lg:col-span-2 space-y-6">
    <div>
      <h2 class="text-xl font-bold mb-2">Your Checkout</h2>
      {#if $cartStore.length === 0}
        <p class="text-slate-500">Your cart is empty.</p>
      {:else}
        <ul class="space-y-4">
          {#each $cartStore as item}
            <li
              class="flex justify-between border p-4 rounded-xl border-slate-200 pb-3"
            >
              <div>
                <h3 class="font-semibold">{item.name}</h3>
                <p class="text-sm text-slate-500">
                  ${item.price} × {item.quantity}
                </p>
              </div>
              <div class="font-medium">${item.price * item.quantity}</div>
            </li>
          {/each}
        </ul>
      {/if}
    </div>

    <div>
      <h2 class="text-xl font-bold mb-2">🚚 Shipping Information</h2>
      <form class="space-y-4">
        <input
          bind:value={name}
          placeholder="Full Name"
          class="w-full border border-slate-200 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
        />
        <input
          bind:value={address}
          placeholder="Shipping Address"
          class="w-full border border-slate-200 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
        />
        <input
          bind:value={phone}
          type="tel"
          placeholder="Phone Number"
          class="w-full border border-slate-200 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
        />
      </form>
    </div>

    <div class="flex justify-between mt-6">
      <a
        href="/cart"
        class="bg-slate-200 text-slate-800 px-6 py-2 rounded-full hover:bg-slate-300"
      >
        ← Back to Cart
      </a>
      <button
        onclick={handlePayment}
        class="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
      >
        Make Payment
      </button>
    </div>
  </div>

  <div class="border border-slate-200 p-6 rounded-lg">
    <h2 class="text-xl font-bold mb-4">Order Summary</h2>
    <ul class="space-y-2">
      {#each $cartStore as item}
        <li class="flex justify-between text-sm">
          <span>{item.name} × {item.quantity}</span>
          <span>${item.price * item.quantity}</span>
        </li>
      {/each}
    </ul>

    <div
      class="border-t border-slate-300 mt-4 pt-4 flex justify-between font-bold text-lg"
    >
      <span>Total</span>
      <span>$<span>{$totalPrice}</span></span>
    </div>
  </div>
</div>

<!-- <button
  onclick={() => {
    showToast = false;
    setTimeout(() => (showToast = true), 10);
  }}>Show Toast</button
>

{#if showToast}
  <Toast message="This is a toast message!" />
{/if} -->
