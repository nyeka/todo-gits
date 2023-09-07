<script setup lang="ts">
import Category from '@/components/categories/Category.vue'
import Flashsale from '@/components/sale/Flashsale.vue'
import Home from '@/components/home/Home.vue'
import LatestProduct from '@/components/latest/LatestProduct.vue'
import Promo from '@/components/promo/Promo.vue'
import Foryou from '@/components/foryou/Foryou.vue'
import Footer from '@/components/footer/Footer.vue'
import NewsLetter from '@/components/newsletter/NewsLetter.vue'
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
