<template>
  <h1 class="text-2xl">Exemple de ...</h1>

  <div>
    <MontreProfil class="" semelle="blue" />

    <button class=" px-4 bg-blue-900 rounded-md text-white font-semibold hover:bg-sky-700">
      <RouterLink to="/form">Personnaliser</RouterLink>
    </button>
  </div>
</template>

<script setup lang="ts">
import MontreProfil from "../components/MontreProfil.vue";
</script>