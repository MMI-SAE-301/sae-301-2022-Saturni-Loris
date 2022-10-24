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
        document.getElementById('status').innerHTML = 'You are logged with the email: ' + session.user.email;
    }
})

</script>

<template>
    <h1>{{ msg }}</h1>
    <p>
        Please login if you have an account or register :
    </p>
    <button @click="login()">Sign In</button><br>
    <button @click="logout()">Sign Out</button><br>
    <label id="status">You are not yet logged ! </label>
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
        }
    }
}  
</script>

