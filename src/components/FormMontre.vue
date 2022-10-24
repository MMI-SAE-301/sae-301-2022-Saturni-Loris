<script setup lang="ts">
import type { Montre } from "@/types";
import { colors } from "@/types"
import { ref } from "vue";
import MontreProfil from "./MontreProfil.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const montre = ref({});
const props = defineProps(["id", "Montre"]);
if (props.id) {
    // On charge les données de la table montre
    let { data, error } = await supabase
        .from("Montre")
        .select("*")
        .eq("id", props.id);
    if (error || !data)
        console.log("n'a pas pu charger la table Montre :", error);
    else montre.value = data[0];
}

async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("Montre").upsert(dataForm);
    if (error) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push({ name: "montre-edit-id", params: { id: data[0].id } });
    }
}



const montrevue = ref<Montre>(props.data ?? {});

</script>

<!-- submit-attrs="{classes: {input: 'bg-green-600'}} -->

<template class="">
    <div class="flex bg-beige  ">
        <div class=" w-full h-full">
            <MontreProfil v-bind="montrevue" id="profil" />
        </div>

        <div class="float-right p-4 bg-white ">

            <FormKit @submit="upsertMontre" type="form" v-model="montrevue" submit-label="Commander votre montre">
                <div>
                    <h1 class="font-bold">CADRAN</h1>
                    <FormKit name="ecran" label="Background du cadran" value="#FFFFFF" type="radio" :options="colors"
                        :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                        input-class="peer sr-only" options-class="flex gap-1 mb-3 mt-1">
                        <template #label="context">
                            <div class="h-4 w-6  border-2 peer-checked:border-black"
                                :style="{ backgroundColor: context.option.value }" />
                            <span class="sr-only">{{ context.option.label }}</span>
                        </template>
                    </FormKit>
                </div>
            </FormKit>
        </div>
    </div>
</template>
