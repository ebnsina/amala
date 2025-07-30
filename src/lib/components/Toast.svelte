<script lang="ts">
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  export let message: string;
  export let duration = 3000;
  let visible = false;

  onMount(() => {
    visible = true;
    const timeout = setTimeout(() => {
      visible = false;
    }, duration);

    return () => clearTimeout(timeout);
  });
</script>

{#if visible}
  <div
    role="alert"
    aria-live="assertive"
    class="fixed bottom-20 right-6 bg-green-500 text-white px-4 py-3 rounded-xl"
    transition:slide={{ duration: 300 }}
  >
    {message}
  </div>
{/if}
