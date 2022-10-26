<script setup lang="ts">


</script>


<template>

    <div class="px-48 pt-36 font-light underline text-blanctext">
        <h1>NOS PRODUITS</h1>
    </div>



    <div class="flex justify-center pt-24 content-between">
        <div class="">
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-20">
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure class="">
                    <MauveFleur />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
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