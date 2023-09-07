<script setup lang="ts">
import Section from "../header/Section.vue";
import Items from "../product/Items.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useGetSlide } from "../../../hook/useGetSlide";
import { useGetScreenSize } from "../../../hook/useGetScreen";
import "swiper/css";
import "swiper/css/effect-fade";

const { screenWidth } = useGetScreenSize();
</script>

<template>
  <div class="p-[32px]">
    <Section text="For You" />
    <swiper
      :slides-per-view="useGetSlide(screenWidth)"
      :space-between="5"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      autoplay:delay="5000"
      autoplay:stopOnLastSlide="false"
      autoplay:disableOnInteraction="false"
      backtodropdown
      autoplay
      class="mt-[24px]"
    >
      <SwiperSlide v-for="i in 15" class="flex items-center animation-slide">
        <Items />
      </SwiperSlide>
    </swiper>
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
