<script setup lang="ts">


</script>


<template>

    <div class="px-48 pt-36 font-light underline text-blanctext">
        <h1>NOS PRODUITS PHARES</h1>
    </div>

    <div class="flex justify-center pt-24 content-between gap-40
    ">
        <div class=" ">
            <MauveFleur />
        </div>
        <div class=" ">
            <CuirIntense />
        </div>
        <div class=" ">
            <PierreAnth />
        </div>

    </div>

    <div class="flex justify-center pt-24 content-between gap-40">
        <div class="">
            <CuirIntense />
        </div>
        <div class="px-32">
            <BleuClaire />
        </div>
        <div class="">
            <PierreAnth />
        </div>
    </div>

    <div class="flex justify-center pt-24 content-between">
        <div class="">
            <MauveFleur />
        </div>
        <div class="px-32">
            <BleuMarines />
        </div>
        <div class="">
            <PierreAnth />
        </div>
    </div>
</template>


<script setup lang="ts">
import PierreAnth from "../components/montre/PierreAnth.vue";
import CuirIntense from "../components/montre/CuirIntense.vue";
import BleuClaire from "../components/montre/BleuClaire.vue";


import MauveFleur from "../components/montre/MauveFleur.vue";
import BleuMarine from "../components/montre/BleuMarine.vue";
</script>