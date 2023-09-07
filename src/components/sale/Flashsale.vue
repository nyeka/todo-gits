<script setup lang="ts">
import Section from '../header/Section.vue'
import Items from '../product/Items.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useGetScreenSize } from '../../hook/useGetScreen'
import { useGetSlide } from '@/hook/useGetSlide'
import 'swiper/css'
import 'swiper/css/effect-fade'
const { screenWidth } = useGetScreenSize()
</script>

<template>
  <div class="p-[34px] bg-[#F9FAFB]">
    <div class="relative">
      <Section text="Flash Sale" />
      <swiper
        class="flex justify-between py-[24px] flex-wrap gap-[12px]"
        :slides-per-view="useGetSlide(screenWidth)"
        :scrollbar="{ draggable: true }"
        :space-between="5"
        autoplay:delay="5000"
        autoplay:stopOnLastSlide="false"
        autoplay:disableOnInteraction="false"
        :autoplay="true"
      >
        <SwiperSlide v-for="i in 10" class="flex items-center animation-slide">
          <Items />
        </SwiperSlide>
      </swiper>
      <div
        class="absolute content top-[50%] right-[0] z-[2] bg-[#0000004D] p-[8px] rounded-[99px] text-[#fff]"
      >
        <img src="/src/assets/chevron.svg" alt="chevron" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
