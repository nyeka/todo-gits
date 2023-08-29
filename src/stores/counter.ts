import { defineStore } from 'pinia'
import axios from 'axios'

interface ITodo {
  userId?: number
  id?: number
  title: string
  completed: boolean
}

export const useCounterStore = defineStore('counter', {
  state: (): {
    Todo: ITodo[]
  } => ({
    Todo: []
  }),

  getters: {
    getTodoCompleted(): ITodo[] {
      return this.Todo.filter((item: any) => item.completed === true)
    },
    activeTodo(): ITodo[] {
      return this.Todo.filter((item: any) => item.completed === false)
    },
    getAllTodo(): ITodo[] {
      return this.Todo
    },
    getAllLengthTodo(): number {
      return this.Todo.filter((item: any) => item.completed === false).length
    }
  },

  actions: {
    async fetchTodo(): Promise<void> {
      await axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
        this.Todo = res.data.slice(0, 10)
      })
    },
    async deleteTodo(id: number): Promise<void> {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
    async pushTodoActive(id: number) {
      const index = this.Todo.findIndex((item) => item.id === id)
      this.Todo[index].completed = !this.Todo[index].completed
      try {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          title: this.Todo[index].title,
          completed: !this.Todo[index].completed,
          userId: 1,
          id
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  // const fetchTodo = async () => {
  //   await axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
  //     Todo.value = res.data
  //   })
  // }

  // const getAllTodo = computed(() => {
  //   return Todo.value
  // })

  // const getTodoComleted = computed(() => {
  //   return Todo.value.filter((item) => item.completed === true)
  // })

  // const activeTodo = computed(() => {
  //   return Todo.value.filter((item) => item.completed === false)
  // })
  // const updateTodo = async (id: number) => {
  //   try {
  //     await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
  //       completed: true
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const deleteTodo = async (id: number) => {
  //   try {
  //     await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const GetLengthItem = computed(() => {
  //   return Todo.value.filter((item) => item.completed === false).length
  // })

  // const pushTodoActive = (id: number) => {
  //   const index = Todo.value.findIndex((item) => item.id === id)
  //   Todo.value[index].completed = !Todo.value[index].completed
  // }

  // return {
  //   Todo,
  //   fetchTodo,
  //   getTodoComleted,
  //   activeTodo,
  //   getAllTodo,
  //   updateTodo,
  //   deleteTodo,
  //   GetLengthItem,
  //   pushTodoActive
  // }
})
