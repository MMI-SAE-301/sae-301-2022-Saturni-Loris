<template>
  <h1 class="text-2xl p-6">Exemple de montre</h1>

  <div>
    <MontreProfil class="mx-72" cadranextbg="blue" cadranintbg="yellow" fondaffichageheure="green"
      braceletbasbg="purple" bracelethautbg="purple" />

    <button class="m-6 px-6 py-2 float-right bg-blue-900 rounded-md text-white font-semibold hover:bg-sky-700">
      <RouterLink to="/form">Personnaliser votre montre</RouterLink>
    </button>
  </div>
</template>

<script setup lang="ts">
import MontreProfil from "../components/MontreProfil.vue";
</script>