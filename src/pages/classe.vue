<template>
    <div>
        <h1 class="text-2xl p-6 ">Modifier votre .. dans l'éditeur de code.</h1>
        <h2 class="text-sm px-6 py-2 ">Rendez-vous dans votre éditeur de code. Puis, rendez-vous dans
            (src/pages/classe.vue#L10). Puis modifier les couleurs voulues dans les classes.
            <hr>
        </h2>
    </div>
    <MontreProfil class="p-6" cadranextbg="blue" cadranintbg="yellow" fondaffichageheure="green" />
</template>

<script setup lang="ts">
import MontreProfil from "../components/MontreProfil.vue";
</script>
