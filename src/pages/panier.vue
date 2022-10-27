<script setup lang="ts">
import MontreProfil from "../components/MontreProfil.vue";
import type { Montre } from "../types";
import { ref } from "vue"
import { supabase, user } from "../supabase"

const listeMontre = ref()

async function getMontre() {
    const { error, data } = await supabase
        .from('montre')
        .select('*')
        .eq('utilisateur', supabase.auth.user().id)
    listeMontre.value = data
}

getMontre()

const montre = defineProps(["id", "Montre"]);
</script>

<template>
    <div class="justify-center pt-24 content-between pl-40
        ">
        <div class=" grid grid-cols-2">
            <MontreProfil v-for="Liste_Montre in listeMontre" :key="Liste_Montre.id" v-bind="Liste_Montre" />
        </div>
    </div>
    <!-- 
    <section>
        <div class="px-48 pt-36 font-light underline text-blanctext">
            <h1>VOS PRODUITS</h1>
        </div>
        <div class="flex justify-center pb-20 ">
            <div class="">
                <MontreProfil v-for="Liste_Montre in listeMontre" :key="Liste_Montre.id" v-bind="Liste_Montre" />
            </div>
        </div>
    </section> -->
</template>