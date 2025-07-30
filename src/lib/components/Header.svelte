<script lang="ts">
  const links = [
    { href: "#", label: "Book Types" },
    { href: "#", label: "Recommendations" },
    { href: "#", label: "Popular" },
    { href: "#", label: "Download App" },
  ];
</script>

<header class="fixed w-full top-0 z-50 bg-white py-4">
  <div class="container mx-auto flex justify-between items-center">
    <div class="flex space-x-6 items-center">
      <a class="text-2xl font-bold" href="/">Amala.</a>

      <nav>
        <ul class="flex space-x-3 items-center">
          {#each links as { href, label }}
            <li>
              <a
                class="text-slate-600 hover:text-lime-500 transition-colors duration-300"
                {href}>{label}</a
              >
            </li>
          {/each}
        </ul>
      </nav>
    </div>

    <div class="flex space-x-4 items-center">
      <a href="/login">Login</a>
      <a href="/cart">Cart</a>
      <button
        class="px-10 py-3 bg-lime-500 text-white rounded-full hover:bg-lime-600 transition-colors duration-300"
        >Start For Free</button
      >
    </div>
  </div>
</header>
