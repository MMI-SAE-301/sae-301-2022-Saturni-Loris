<template>
  <h1 class="text-2xl p-6">Exemple de montre</h1>

  <div class="carousel w-full">
    <div id="item1" class="carousel-item w-full">
      <img src="https://placeimg.com/800/200/arch" class="w-full" />
    </div>
    <div id="item2" class="carousel-item w-full">
      <img src="https://placeimg.com/800/200/arch" class="w-full" />
    </div>
    <div id="item3" class="carousel-item w-full">
      <img src="https://placeimg.com/800/200/arch" class="w-full" />
    </div>
    <div id="item4" class="carousel-item w-full">
      <img src="https://placeimg.com/800/200/arch" class="w-full" />
    </div>
  </div>
  <div class="flex justify-center w-full py-2 gap-2">
    <a href="#item1" class="btn btn-xs">1</a>
    <a href="#item2" class="btn btn-xs">2</a>
    <a href="#item3" class="btn btn-xs">3</a>
    <a href="#item4" class="btn btn-xs">4</a>
  </div>

  <div>
    <MontreProfil class="" cadranextbg="blue" cadranintbg="yellow" fondaffichageheure="green" braceletbasbg="purple"
      bracelethautbg="purple" />

    <button class="m-6 px-6 py-2 float-right bg-blue-900 rounded-md text-white font-semibold hover:bg-sky-700">
      <RouterLink to="/form">Personnaliser votre montre</RouterLink>
    </button>
  </div>


</template>

<script setup lang="ts">
import MontreProfil from "../components/MontreProfil.vue";
</script>