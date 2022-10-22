<template>
  <nav class="bg-blue-700">
    <ul class=" flow-root">
      <div class="flex ">
        <li class="px-4">
          <RouterLink to="/">Accueil</RouterLink>
        </li>

        <li class="px-4">
          <RouterLink to="/classe">Modifier via les classes</RouterLink>
        </li>

        <li class="px-4">
          <RouterLink to="/form">Personnaliser</RouterLink>
        </li>

        <li class="float-right">
          <LoginLogout />
        </li>
      </div>

    </ul>
  </nav>

  <router-view class="m-2 border-2 p-2" />
</template>

<script setup lang="ts">
import LoginLogout from "./components/LoginLogout.vue";

</script>
