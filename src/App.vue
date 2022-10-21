<template>
  <nav class="bg-blue-200">
    <ul class="flex p-4 ">

      <li>
        <router-link class="text-black font-bold  px-4" to="/">
          Home page

        </router-link>
      </li>
      <li>
        <router-link class="text-black font-bold  px-4" to="/form">
          Form
        </router-link>
      </li>
      <li>
        <router-link class="text-black  font-bold  px-4" to="/classe">
          Modifier via les classes
        </router-link>
      </li>
    </ul>
  </nav>

  <router-view class="m-2 border-2 p-2" />
</template>

<script setup lang="ts">
import MontreProfil from "./components/MontreProfil.vue";

</script>
