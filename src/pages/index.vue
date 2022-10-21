<script setup lang="ts">
import MontreProfil from "../components/MontreProfil.vue";
import type { Montre } from "../types";
const exemple: Montre = [{

}];
</script>
<template>
  <section>
    <h1 class="text-2xl">Exemples de la chaussure dans la home page</h1>
    <h2>Ici, vous pourrez modifier les couleurs de votre objet dans les classes de l'index.vue</h2>
    <div class="flex flex-wrap gap-2">
      <div class="w-64">

        <MontreProfil class="w-64" semelle="blue" />

      </div>
    </div>
  </section>
</template>