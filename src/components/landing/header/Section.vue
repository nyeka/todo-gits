<template>
  <div class="flex justify-between">
    <div class="flex gap-[12px] items-center md:text-[24px] flex-wrap">
      <p>{{ text }}</p>
      <button
        v-if="text === 'Flash Sale'"
        class="bg-[#F04438] p-[8px] rounded-[8px] text-[#fff]"
      >
        00:12:12
      </button>
    </div>
    <div
      class="flex gap-[12px] text-[#0764A7] h-fit md:text-[18px] stroke-primary"
      v-if="text !== 'Promo'"
    >
      <p>View All</p>
      <img src="/src/assets/rightarrow.svg" alt="arrow" class="fill-primary" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: String,
});
</script>
