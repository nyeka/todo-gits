<script setup lang="ts">
import Section from '../header/Section.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useGetScreenSize } from '../../hook/useGetScreen'
import 'swiper/css'
const { screenWidth } = useGetScreenSize()
const data = [
  {
    title: "men's fashion",
    img: 'kacapembesar'
  },
  {
    title: "women's fashion",
    img: 'kopi'
  },
  {
    title: 'Bicycle',
    img: 'shiield'
  },
  {
    title: 'Handphone',
    img: 'hp'
  },
  {
    title: 'hobbies and collections',
    img: 'jampasir'
  },
  {
    title: 'Household',
    img: 'jampasir'
  }
]
var logo = document.querySelector('.animation-slide') as HTMLElement
var slide = logo?.cloneNode(true)
document.querySelector('.logos')?.appendChild(slide)
</script>

<template>
  <div class="p-[32px]">
    <Section text="Categories" />
    <div class="swiper-container">
      <swiper
        :slides-per-view="screenWidth > 560 ? 5 : 2"
        :scrollbar="{ draggable: true }"
        :space-between="20"
        autoplay:delay="5000"
        autoplay:stopOnLastSlide="false"
        autoplay:disableOnInteraction="false"
        :autoplay="true"
        class="pt-[24px]"
      >
        <SwiperSlide v-for="item in data" :key="item.title" class="animation-slide">
          <div class="flex flex-col items-center">
            <img :src="`/src/assets/${item.img}.svg`" class="h-[50px] md:h-fit" />
            <div class="mt-[12px] text-center">{{ item.title }}</div>
          </div>
        </SwiperSlide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
@keyframes slide {
  from {
    transform: translateX(-0);
  }
  to {
    transform: translateX(-100%);
  }
}

.animation-slide {
  animation: 5s slide infinite linear;
}
</style>
../hook/useGetScreen
