<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { supabase, user } from "../supabase";
async function signIn(data, node) {
    const { user, error } = await (nvlUtilisateur.value
        ? supabase.auth.signUp(data)
        : supabase.auth.signIn(data));
    if (error) {
        console.error(error);
        node.setErrors([error.message]);
    }
}
const nvlUtilisateur = ref(false);
</script>

<template>
    <div class="">
        <button class="bg-beige p-2 rounded-md" v-if="user" @pointerdown="supabase.auth.signOut()">
            Se déconnecter du compte {{ user.email }}
        </button>
        <FormKit v-else type="form" :submit-label="nvlUtilisateur ? 'S\'inscrire' : 'Se connecter'" @submit="signIn">
            <div class="">
                <FormKit name="email" label="Mail" type="email" />
                <FormKit name="password" label="Mot de passe" type="password" />
                <FormKit label="Nouvel utilisateur ?" name="nvlUtilisateur" type="checkbox" v-model="nvlUtilisateur" />
            </div>
        </FormKit>
    </div>
</template>