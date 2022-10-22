<template>
  <nav class="bg-blue-700">
    <ul class=" flow-root">
      <div class="flex ">
        <li>
          <RouterLink to="/">Accueil</RouterLink>
        </li>

        <li>
          <RouterLink to="/classe">Modifier via les classes</RouterLink>
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
import MontreProfil from "./components/MontreProfil.vue";
import LoginLogout from "./components/LoginLogout.vue";
import FormMontre from "./components/FormMontre.vue";

</script>
