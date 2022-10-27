<script setup>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'
defineProps({
    msg: String
})
const count = ref(0)
supabase.auth.onAuthStateChange((event, session) => {
    if (session == null) {
        document.getElementById('status').innerHTML = 'You are not logged !!!';
    } else {
        //alert('session value: ' + JSON.stringify(session)) 
        document.getElementById('status').innerHTML = 'Vous êtes connecté avec le compte: ' + session.user.email;
    }
})

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
    <div>
        <div class="">
            <div>

            </div>
            <div class="flex justify-center min-h-screen gap-36">
                <div class="container sm:mt-40 mt-24 my-auto max-w-md  p-3 shadow-xl bg-noirfond">

                    <div class="text-center m-6">
                        <h1 class="text-3xl font-semibold font-roboto text-blanctext">S'INSCRIRE</h1>
                        <p class="font-thin text-sm font-roboto text-blanctext pb-8">Créer votre compte, afin de pouvoir
                            réaliser
                            toutes vos
                            envies en personnalisant nos montres TikTak.</p>
                    </div>

                    <div class=" m-6">

                        <div class="flex flex-row gap-2 pb-20">
                            <button @click="login()"
                                class="bg-blanctext text-noirfond  w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-beige duration-100 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    class="w-5" viewBox="0 0 48 48">
                                    <defs>
                                        <path id="a"
                                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                    </defs>
                                    <clipPath id="b">
                                        <use xlink:href="#a" overflow="visible" />
                                    </clipPath>
                                    <path clip-path="url(#b)" fill="#1A1B20" d="M0 37V11l17 13z" />
                                    <path clip-path="url(#b)" fill="#1A1B20" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                    <path clip-path="url(#b)" fill="#1A1B20" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                    <path clip-path="url(#b)" fill="#1A1B20" d="M48 48L17 24l-4-3 35-10z" />
                                </svg>
                                Google
                            </button>
                            <button @click="loginWithFacebook()" class=" bg-blanctext text-noirfond  w-full p-2 flex flex-row justify-center gap-2 items-center
                        rounded-sm hover:bg-beige duration-100 ease-in-out">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px">
                                    <path fill="#1A1B20" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
                                    <path fill="#fff"
                                        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z" />
                                </svg>
                                Facebook
                            </button>
                        </div>
                    </div>
                </div>
                <div class="justify-center min-h-screen">
                    <div class="container sm:mt-40 mt-24 my-auto max-w-md  p-3 shadow-xl bg-noirfond">
                        <button v-if="user" @pointerdown="supabase.auth.signOut()">
                            Se déconnecter ({{ user.email }})
                        </button>

                        <FormKit v-else type="form" :submit-label="nvlUtilisateur ? 'S\'inscrire' : 'Se connecter'"
                            @submit="signIn">
                            <h1 class="text-3xl font-semibold font-roboto text-blanctext text-center m-2   ">S'INSCRIRE
                                VIA
                                MAIL</h1>

                            <h1 class="font-thin text-sm font-roboto text-blanctext">Votre mail</h1>
                            <FormKit name=" email" label="" type="email" />
                            <h1 class="font-thin text-sm font-roboto text-blanctext">Votre mot de passe</h1>
                            <FormKit name="password" label="" type="password" />
                            <p class="font-thin text-sm font-roboto text-blanctext pt-6">Nouvel utilisateur ? Cocher la
                                case
                                ci-dessous.</p>
                            <div>
                                <formKit label="" name="nvlUtilisateur" type="checkbox" v-model="nvlUtilisateur" />
                            </div>
                            <p>Pensez à confirmer vos mail dans votre boîte de réception.</p>
                        </FormKit>
                    </div>


                </div>
            </div>




        </div>
    </div>
</template>


<script>
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFobHpxZ2F1a3Jnc2dtb3JneWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY2MTUzMjgsImV4cCI6MTk4MjE5MTMyOH0.fa3nOVKjlOftF4qJz9u3uEj2HZrL2HmgtlpzMgIC1SU'
const SUPABASE_URL = "https://ahlzqgaukrgsgmorgyem.supabase.co"
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
export default {
    methods: {
        async logout() {
            try {
                const { user, session, error } = await supabase.auth.signOut();
                if (error) throw error;
                document.getElementById('status').innerHTML = 'You are disconnected !'
            } catch (error) {
                alert(error.error_description || error.message);
            }
        },
        //this method allows to log in the system using Google provider 

        async login() {
            try {
                const { user, session, error } = await supabase.auth.signIn({
                    provider: 'google',
                });
                if (error) throw error;
            } catch (error) {
                alert(error.error_description || error.message);
            }
        },

        async loginWithFacebook() {
            try {
                const { user, session, error } = await supabase.auth.signIn({
                    provider: 'facebook'
                });
                if (error) throw error;
            } catch (error) {
                alert(error.error_description || error.message);
            }
        },

        async logoutfb() {
            try {
                const { error } = await supabase.auth.signOut()
            } catch (error) {
                alert(error.error_description || error.message);
            }
        },


    }
}  
</script>



