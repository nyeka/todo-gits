<template>
  <div class="flex flex-col gap-[24px] w-[100%] h-full">
    <div class="text-xl flex justify-center">TODOS</div>
    <input
      @keyup.enter="CreateTodo(ModelInputTodo)"
      v-model="ModelInputTodo"
      placeholder="Input Todo Title"
      class="text-[black]"
    />
    <div class="flex justify-between items-center">
      <div>{{ state.getAllLengthTodo }} Item left</div>
      <ul class="flex w-fit gap-[24px] justify-center">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = tab"
          :class="{ active: activeTab === tab }"
        >
          {{ tab }}
        </li>
      </ul>

      <div @click="state.clearTodo" class="clearComp">Clear Completed</div>
    </div>
    <div v-if="activeTab == 'All'" class="flex flex-col gap-[12px] h-[100%]">
      <div v-if="state.loading">Loding</div>
      <TodoList :Todo="state.Todo" />
    </div>
    <div
      v-if="activeTab === 'Active'"
      class="flex flex-col gap-[12px] h-[100vh]"
    >
      <TodoList :Todo="state.activeTodo" />
    </div>
    <div
      v-if="activeTab === 'Completed'"
      class="flex flex-col gap-[12px] h-[100vh]"
    >
      <TodoList :Todo="state.getTodoCompleted" />
    </div>
  </div>
</template>

<style scoped>
.active {
  color: #fff;
  background-color: grey;
}
li {
  cursor: pointer;
  background-color: #1a1a1a;
  padding: 6px;
  width: fit-content;
  border-radius: 5px;
}
.clearComp {
  cursor: pointer;
}
</style>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useCounterStore } from "@/stores/counter";
import axios from "axios";
const state = useCounterStore();
import TodoList from "@/components/TodoList.vue";

const CreateTodo = async (title: string) => {
  if (!title) return alert("Please Input Todo");
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        id: state.Todo.length + 1,
        userId: 1,
        completed: false,
        title,
      }
    );

    if (response.status === 201) {
      ModelInputTodo.value = "";
      alert("Success Create Todo");
      state.Todo = [response.data, ...state.Todo];
    }
  } catch (error) {
    console.log(error);
  }
};
watch(state.Todo, () => {
  state.fetchTodo();
});

onMounted(() => {
  state.fetchTodo();
});

const ModelInputTodo = ref("");

const tabs = ["All", "Active", "Completed"];
const activeTab = ref(tabs[0]);
</script>
