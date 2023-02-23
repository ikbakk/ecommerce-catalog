<script setup lang="ts">
import Product from './views/Product.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'

interface IListItems {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: {
    count: number
    rate: number
  }
  title: string
}

const listItems: Ref<IListItems[]> = ref([])

async function getData(): Promise<void> {
  const res = await fetch('https://fakestoreapi.com/products?limit=20')
  const finalRes = await res.json()
  listItems.value = finalRes
}

getData()
</script>

<template>
  <div class="unavailable">
    <div class="background"></div>
    <div class="container">
      <h3>This Product is unavailable to show</h3>
      <button class="next-btn">Next Product</button>
    </div>
  </div>
</template>

<style scoped>
.unavailable {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: white;
  padding: 5rem;
}

.background {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 75%;
  background-color: #d8d7d7;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  font-size: 1.2rem;
  gap: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.next-btn {
  background-color: white;
  width: 30%;
  outline: 1px;
  padding: 0.5rem;
  border-radius: 0.2rem;
}

.next-btn:hover {
  transition-duration: 300ms;
  background-color: #d8d7d7;
  cursor: pointer;
}
</style>
