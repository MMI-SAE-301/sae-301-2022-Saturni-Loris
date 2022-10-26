<script setup lang="ts">
import MontreProfil from "../components/MontreProfil.vue";
import type { Montre } from "../types";
const exemple: Montre = [{
    ecran: "#0000FF     ",
    bracelet_haut: "#000000",
    bracelet_bas: "#FFFFFF",
    bouton: "#000000",
    cadran: "#FFFFFF",
}];
</script>

<template>
    <section>
        <div class="px-48 pt-36 font-light underline text-blanctext">
            <h1>VOS PRODUITS</h1>
        </div>
        <div class="flex justify-center pb-20 ">
            <div class="w-64">
                <RouterLink v-for="ex in exemple" :key="exemple.id" :to="{
                    name: 'montre-exemple-data',
                    params: { data: JSON.stringify(ex) },
                }">
                    <MontreProfil class="" v-bind="ex" />
                </RouterLink>
            </div>
        </div>
    </section>
</template>