import { ref, onMounted, onBeforeUnmount } from 'vue'

const screenWidth = ref(window.innerWidth)
const screenHeight = ref(window.innerHeight)

export const useGetScreenSize = () => {
  const updateScreenSize = () => {
    screenWidth.value = window.innerWidth
    screenHeight.value = window.innerHeight
  }

  onMounted(() => {
    window.addEventListener('resize', updateScreenSize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateScreenSize)
  })

  return {
    screenWidth,
    screenHeight
  }
}
