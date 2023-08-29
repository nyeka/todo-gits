<template>
  <div
    v-for="todo in Todo"
    :key="todo.id"
    class="bg-slate-400 p-[24px] flex flex-row items-center align-center"
  >
    <div class="flex justify-between w-full">
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
          @click="state.pushTodoActive(Number(todo.id))"
          class="w-[20px] h-[20px]"
        />

        <p class="text-lg">{{ todo.title }}</p>
      </div>
      <span class="text-xl cursor-pointer" @click="state.deleteTodo(Number(todo.id))">X</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const state = useCounterStore()

interface ITodo {
  userId?: number
  id?: number
  title: string
  completed: boolean
}

defineProps({
  Todo: {
    type: Array as () => ITodo[],
    required: true
  }
})
</script>
