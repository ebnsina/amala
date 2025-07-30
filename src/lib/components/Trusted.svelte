<script lang="ts">
  const readers = [
    { name: "Adam", country: "Srilanka" },
    { name: "Nuh", country: "Turkey" },
    { name: "Musa", country: "Egypt" },
    { name: "Isa", country: "Palestine" },
    { name: "Muhammad", country: "Saudi Arabia" },
    { name: "Yusuf", country: "Egypt" },
    { name: "Dawud", country: "Palestine" },
    { name: "Sulayman", country: "Palestine" },
    { name: "Yunus", country: "Iraq" },
    { name: "Zakariya", country: "Palestine" },
    { name: "Yahya", country: "Palestine" },
    { name: "Ilyas", country: "Syria" },
    { name: "Idris", country: "Egypt" },
    { name: "Hud", country: "Yemen" },
    { name: "Saleh", country: "Saudi Arabia" },
    { name: "Lut", country: "Iraq" },
    { name: "Shu'ayb", country: "Jordan" },
  ];
</script>

<section class="bg-lime-50 py-20">
  <div class="container mx-auto">
    <h2 class="text-xl font-semibold text-center mb-10">
      Trusted by thousands of readers around the world
    </h2>

    <div class="flex overflow-x-scroll space-x-6">
      {#each readers as reader}
        <article
          class="flex flex-col justify-center items-center min-w-[160px] text-center"
        >
          <h3 class="text-xl font-semibold">{reader.name}</h3>
          <p class="text-xs text-slate-600">({reader.country})</p>
        </article>
      {/each}
    </div>
  </div>
</section>
