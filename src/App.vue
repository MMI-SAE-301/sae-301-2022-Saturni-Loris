<template >
  <nav class="bg-brunclair p-2">
    <ul class=" flow-root">
      <div class="float-right flex">
        <li class="mx-8 px-2 py-2  font-semibold text-black  hover:bg-white hover:text-brunfonce ">
          <RouterLink to="/">ACCUEIL</RouterLink>
        </li>

        <li class="mx-8 px-2 py-2 font-semibold text-black  hover:bg-white hover:text-brunfonce ">
          <RouterLink to="/classe">MODIFIER VIA CLASSES</RouterLink>
        </li>

        <li class="mx-8 px-2 py-2 font-semibold text-black  hover:bg-white hover:text-brunfonce ">
          <RouterLink to="/login">S'INSCRIRE</RouterLink>
        </li>

        <li class="px-8 mr-12 py-2 font-semibold text-white bg-brunfonce">
          <RouterLink to="/form">PERSONNALISER</RouterLink>
        </li>
      </div>

    </ul>

  </nav>


  <router-view class="m-2 border-2 p-2" />
</template>

<script setup lang="ts">
import LoginLogout from "./components/LoginLogout.vue";

</script>

