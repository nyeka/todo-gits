<template>
  <div
    v-for="todo in activeTodo"
    :key="todo.id"
    class="bg-slate-400 p-[24px] flex flex-row items-center align-center"
  >
    <div
      :class="
        !todo.completed
          ? 'flex gap-[20px] items-center'
          : 'flex gap-[20px] items-center line-through'
      "
    >
      <input
        type="checkbox"
        v-model="todo.completed"
        @click="pushTodoActive(Number(todo.id))"
        class="w-[20px] h-[20px]"
      />

      <p class="text-lg">{{ todo.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const { activeTodo, pushTodoActive } = useCounterStore()
</script>
