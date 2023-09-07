<script setup lang="ts">
import Category from "@/components/landing/categories/Category.vue";
import Flashsale from "@/components/landing/sale/Flashsale.vue";
import Home from "@/components/landing/home/Home.vue";
import LatestProduct from "@/components/landing/latest/LatestProduct.vue";
import Promo from "@/components/landing/promo/Promo.vue";
import Foryou from "@/components/landing/foryou/Foryou.vue";
import Footer from "@/components/landing/footer/Footer.vue";
import NewsLetter from "@/components/landing/newsletter/NewsLetter.vue";
</script>

<template>
  <div class="font-semibold">
    <Home />
    <Category />
    <Flashsale />
    <LatestProduct />
    <Promo />
    <LatestProduct />
    <Foryou />
    <NewsLetter />
    <Footer />
  </div>
</template>
