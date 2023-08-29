<template>
  <div class="flex flex-col gap-[12px] w-[100%] h-full">
    <div class="text-xl flex justify-center">TODOS</div>
    <input
      @keyup.enter="CreateTodo(ModelInputTodo)"
      v-model="ModelInputTodo"
      placeholder="Input Todo Title"
      class="text-[black]"
    />
    <div class="flex justify-between items-center">
      <div>{{ state.getAllLengthTodo }} Item left</div>
      <VTabs
        :items="items"
        default-class="!rounded-lg"
        inactive-class="hover:bg-success-50 hover:!text-success-600"
        active-class="bg-success-50 rounded-t text-success-600 font-semibold"
        hide-slider
        v-model="selected"
      />

      <div @click="state.clearTodo">Clear Completed</div>
    </div>
    <div v-if="selected == 0" class="flex flex-col gap-[12px] h-[100%]">
      <div v-if="state.loading">Loding</div>
      <TodoList :Todo="state.Todo" />
    </div>
    <div v-if="selected === 1" class="flex flex-col gap-[12px] h-[100vh]">
      <TodoList :Todo="state.activeTodo" />
    </div>
    <div v-if="selected === 2" class="flex flex-col gap-[12px] h-[100vh]">
      <TodoList :Todo="state.getTodoCompleted" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useCounterStore } from '@/stores/counter'
import axios from 'axios'
const state = useCounterStore()
import TodoList from '@/components/TodoList.vue'

const CreateTodo = async (title: string) => {
  if (!title) return alert('Please Input Todo')
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      id: state.Todo.length + 1,
      userId: 1,
      completed: false,
      title
    })

    if (response.status === 201) {
      ModelInputTodo.value = ''
      alert('Success Create Todo')
      state.Todo = [response.data, ...state.Todo]
    }
  } catch (error) {
    console.log(error)
  }
}
watch(state.Todo, () => {
  state.fetchTodo()
})

onMounted(() => {
  state.fetchTodo()
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
