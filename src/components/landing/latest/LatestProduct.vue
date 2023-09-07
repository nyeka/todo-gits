<script setup lang="ts">
import Section from "../header/Section.vue";
import Items from "../product/Items.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useGetScreenSize } from "../../../hook/useGetScreen";
import "swiper/css";
import { useGetSlide } from "../../../hook/useGetSlide";
const { screenWidth } = useGetScreenSize();
</script>

<template>
  <div class="p-[32px]">
    <Section text="Latest Product" />
    <div class="flex py-[24px]">
      <div
        class="rounded-[8px] bg-[#28A0F6] md:w-[952px] p-[32px] md:h-[494px] hidden lg:block"
      >
        <p class="text-[#fff] font-normal">Discount</p>
        <p class="font-bold text-[48px] text-[#fff]">More And More</p>
        <div class="mt-[60px]">
          <p class="font-normal text-[#fff]">Up To</p>
          <span class="font-bold text-[#FCE834] text-[72px]">50%</span>
        </div>
      </div>
      <swiper
        class="flex justify-between flex-wrap ml-[-50px]"
        :slides-per-view="useGetSlide(screenWidth)"
        :space-between="5"
        :scrollbar="{ draggable: true }"
        autoplay:delay="5000"
        autoplay:stopOnLastSlide="false"
        autoplay:disableOnInteraction="false"
        :autoplay="true"
      >
        <swiper-slide v-for="i in 20" class="flex items-center animation-slide">
          <Items />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
