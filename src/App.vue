<template>
  <nav class="bg-blue-700">
    <ul class=" flow-root">
      <div class="flex ">
        <li class="px-6 py-2  font-semibold text-cyan-50  hover:bg-cyan-50 hover:text-sky-700">
          <RouterLink to="/">Accueil</RouterLink>
        </li>

        <li class="px-6 py-2 font-semibold text-cyan-50  hover:bg-cyan-50 hover:text-sky-700">
          <RouterLink to="/classe">Modifier via les classes</RouterLink>
        </li>

        <li class="px-6 py-2 font-semibold text-cyan-50  hover:bg-cyan-50 hover:text-sky-700">
          <RouterLink to="/form">Personnaliser</RouterLink>
        </li>
      </div>

    </ul>
  </nav>
  <li class="float-right">
    <LoginLogout />
  </li>

  <router-view class="m-2 border-2 p-2" />
</template>

<script setup lang="ts">
import LoginLogout from "./components/LoginLogout.vue";

</script>
