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
</script>

<template>
    <div>
        <div class="">
            <div>

            </div>
            <div class="flex justify-center min-h-screen ">
                <div class="container sm:mt-20 mt-20 my-auto max-w-md  shadow-xl bg-noirfond">

                    <div class="text-center m-6">
                        <h1 class="text-3xl font-semibold font-roboto text-blanctext">S'INSCRIRE</h1>
                        <p class="font-thin text-sm font-roboto text-blanctext">Une question ? Un problème ? N'hésitez à
                            nous contactez ci-dessous.</p>
                    </div>

                    <div class=" m-6">
                        <form class="mb-4">
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                    Adresse mail</label>
                                <input type="email" name="email" id="email" placeholder="xxx@xxx.xxx"
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                    Votre message</label>
                                <input placeholder="Bonjour ..."
                                    class="w-full px-3 py-16 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div class="mb-6">
                                <button type="button"
                                    class="w-full px-3 py-4 text-noirfond bg-blanctext focus:outline-none duration-100 ease-in-out">ENVOYER</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

</script>



