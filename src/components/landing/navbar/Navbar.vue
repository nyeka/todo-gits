<script setup lang="ts"></script>
<template>
  <div class="flex justify-between items-center p-[32px]">
    <div class="flex gap-[12px] text-center">
      <img src="/src/assets/Logo.png" alt="kntl" />
      <div class="md:flex hidden gap-[32px] list-none items-center">
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
      </div>
    </div>
    <div class="md:flex gap-[24px] items-center hidden">
      <button class="text-[#475467]">Log in</button>
      <button
        class="text-[#fff] bg-[#0984DD] flex justify-center rounded-[8px] items-center pl-[18px] pr-[18px] pt-[10px] pb-[10px]"
      >
        Sign Up
      </button>
    </div>
    <div class="md:hidden">
      <img src="/src/assets/burger.svg" alt="menu" />
    </div>
  </div>
</template>
