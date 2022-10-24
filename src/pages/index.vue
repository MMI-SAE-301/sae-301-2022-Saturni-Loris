<template>
  <li class="float-right">
    <LoginLogout />
  </li>
  <h1 class="text-2xl p-6">Exemple de montre</h1>
  <div class="flex justify-center w-full gap-2">
    <a href="#item1" class="btn btn-xs">Montre 1</a>
    <a href="#item2" class="btn btn-xs">Montre 2</a>
    <a href="#item3" class="btn btn-xs">Montre 3</a>
    <a href="#item4" class="btn btn-xs">Montre 4</a>
  </div>
  <div class="carousel w-full ">

    <div id="item1" class="carousel-item w-full">
      <MontreProfil class="" cadranextbg="blue" cadranintbg="yellow" fondaffichageheure="green" braceletbasbg="purple"
        bracelethautbg="green" />
    </div>

    <div id="item2" class="carousel-item w-full">
      <MontreProfil class="" cadranextbg="" cadranintbg="yellow" fondaffichageheure="red" braceletbasbg="purple"
        bracelethautbg="blue" />
    </div>
    <div id="item3" class="carousel-item w-full">
      <MontreProfil class="" cadranextbg="blue" cadranintbg="gray" fondaffichageheure="blue" braceletbasbg="purple"
        bracelethautbg="purple" />
    </div>
    <div id="item4" class="carousel-item w-full">
      <MontreProfil class="" cadranextbg="blue" cadranintbg="pink" fondaffichageheure="yellow" braceletbasbg="purple"
        bracelethautbg="yellow" />
    </div>

  </div>

  <FormMontre />


  <div>


    <button class="m-6 px-6 py-2 float-right bg-blue-900 rounded-md text-white font-semibold hover:bg-sky-700">
      <RouterLink to="/form">Personnaliser votre montre</RouterLink>
    </button>
  </div>


</template>

<script setup lang="ts">
import MontreProfil from "../components/MontreProfil.vue";
import FormMontre from '../components/FormMontre.vue'
</script>