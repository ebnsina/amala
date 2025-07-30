<script lang="ts">
  const socials = [
    { href: "#", label: "Facebook" },
    { href: "#", label: "Twitter" },
    { href: "#", label: "Instagram" },
    { href: "#", label: "LinkedIn" },
    { href: "#", label: "Youtube" },
  ];
</script>

<section
  class="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
>
  <div class="container mx-auto flex relative">
    <div class="flex-1 relative z-10">
      <div class="max-w-lg mb-40 space-y-2">
        <h1 class="text-5xl font-extrabold">
          Find the book you're looking for easier to read away.
        </h1>
        <p class="text-base text-slate-600">
          The most appropriate book site to search for books.
        </p>
      </div>

      <form
        action=""
        class="max-w-md flex border border-slate-200 rounded-full py-2 px-4 bg-white overflow-hidden"
      >
        <input
          class="border-0 flex-1 focus:outline-none focus:ring-0"
          type="search"
          placeholder="Find your favorite book"
        />
        <button
          class="px-10 py-3 bg-lime-500 text-white rounded-full hover:bg-lime-600 transition-colors duration-300"
          >Search</button
        >
      </form>

      <div class="mt-10">
        <h4 class="text-lg font-bold">Follow us</h4>
        <ul class="flex space-x-4 items-center">
          {#each socials as { href, label }}
            <li>
              <a
                class="text-slate-600 text-xs hover:underline hover:text-lime-500 transition-colors duration-300"
                {href}>{label}</a
              >
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="w-[50%] relative z-0 -ml-16 lg:-ml-20 xl:-ml-36">
      <div class="relative">
        <img
          class="w-full h-[500px] rounded-full relative z-10"
          src="images/hero.svg"
          alt="Hero"
        />
      </div>
    </div>
  </div>
</section>
