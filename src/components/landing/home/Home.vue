<script setup lang="ts">
import Navbar from '../navbar/Navbar.vue'
</script>

<template>
  <div class="bg-gradient-to-b from-[#C5E5FD] to-[#fff] font-semibold">
    <Navbar />
    <div class="flex justify-between">
      <div class="flex flex-col items-center justify-center px-[32px]">
        <h3 class="text-[34px] md:text-[60px]">Welcome to GITS Commerce</h3>
        <div class="font-normal">
          Morpheme is a next-gen financial technology company in the process of reinventing banking.
        </div>
        <button
          class="mt-[24px] self-start text-[#fff] bg-[#0984DD] flex justify-center gap-[12px] rounded-[8px] items-center pl-[18px] pr-[18px] pt-[10px] pb-[10px]"
        >
          <img src="/src/assets/cart.svg" alt="cart" />
          <span> Start Shopping </span>
        </button>
      </div>
      <div class="hidden md:flex">
        <img src="/src/assets/home.svg" alt="home" />
      </div>
    </div>
  </div>
</template>
