<script setup lang="ts">
import MontreProfil from "../components/MontreProfil.vue";
import type { Montre } from "../types";
const exemple: Montre = [{
    ecran: "FFFFFF",
    bracelet_haut: "000000",
    bracelet_bas: "FFFFFF",
    bouton: "000000",
    cadran: "FFFFFF",
}];
</script>

<template>
    <section>
        <h1 class="text-2xl">Exemples de montre</h1>
        <div class="flex flex-wrap gap-2">
            <div class="w-64">
                <RouterLink v-for="ex in exemple" :key="exemple.id" :to="{
                    name: 'montre-exemple-data',
                    params: { data: JSON.stringify(ex) },
                }">
                    <MontreProfil class="w-64" v-bind="ex" />
                </RouterLink>
            </div>
        </div>
    </section>
</template>