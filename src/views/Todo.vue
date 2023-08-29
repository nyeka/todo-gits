<template>
  <div class="flex flex-col gap-[12px] w-[100%] h-full">
    <div class="text-xl flex justify-center">TODOS</div>
    <VInput @keyup.enter="CreateTodo(ModelInputTodo)" v-model="ModelInputTodo" />
    <div class="flex justify-between items-center">
      <div>{{ length }} Item left</div>
      <VTabs
        :items="items"
        default-class="!rounded-lg"
        inactive-class="hover:bg-success-50 hover:!text-success-600"
        active-class="bg-success-50 rounded-t text-success-600 font-semibold"
        hide-slider
        v-model="selected"
      />
      <div @click="fetchTodo">Clear Completed</div>
    </div>
    <div v-if="selected == 0" class="flex flex-col gap-[12px]">
      <TodoList :Todo="Todo" />
    </div>
    <div v-if="selected === 1" class="flex flex-col gap-[12px] h-[100vh]">
      <TodoList :Todo="activeTodo" />
    </div>
    <div v-if="selected === 2" class="flex flex-col gap-[12px] h-[100vh]">
      <TodoList :Todo="getTodoCompleted" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useCounterStore } from '@/stores/counter'
import axios from 'axios'
const { Todo, fetchTodo, getAllLengthTodo, getTodoCompleted, activeTodo } = useCounterStore()
import TodoList from '@/components/TodoList.vue'
const length = getAllLengthTodo

const CreateTodo = async (title: string) => {
  if (!title) return alert('Please Input Todo')
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title
    })

    if (response.status === 201) {
      fetchTodo()
      ModelInputTodo.value = ''
      alert('Success Create Todo')
    }
  } catch (error) {
    console.log(error)
  }
}
watch(Todo, () => {
  fetchTodo()
})

onMounted(() => {
  fetchTodo()
})

const ModelInputTodo = ref('')

const items = ref([
  {
    text: 'All'
  },
  {
    text: 'Active'
  },
  {
    text: 'Completed'
  }
])
const selected = ref(0)
</script>
