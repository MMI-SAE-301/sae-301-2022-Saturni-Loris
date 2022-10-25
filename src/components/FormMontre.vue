<script setup lang="ts">
import type { Montre } from "@/types";
import { colors, materiaux } from "@/types"
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

async function upsertmontre(dataForm, node) {
    const { data, error } = await supabase.from("montre").upsert(dataForm);
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
    <div class="flex">
        <div class=" w-full h-full">
            <MontreProfil v-bind="montrevue" id="profil" />
        </div>

        <div class="float-right p-4 bg-white ">

            <FormKit @submit="upsertmontre" type="form" v-model="montrevue" submit-label="Commander votre montre">
                <div>
                    <FormKit name="bouton" label="Bouton" value="#000000" type="radio" :options="colors"
                        :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                        input-class="peer sr-only" options-class="flex gap-1 mb-3 mt-1">
                        <template #label="context">
                            <div class="h-4 w-6  border-2 peer-checked:border-black"
                                :style="{ backgroundColor: context.option.value }" />
                            <span class="sr-only">{{ context.option.label }}</span>
                        </template>
                    </FormKit>

                    <FormKit name="bracelet_bas" label="Bracelet inférieur" value="#FFFFFF" type="radio"
                        :options="colors" :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                        input-class="peer sr-only" options-class="flex gap-1 mb-3 mt-1">
                        <template #label="context">
                            <div class="h-4 w-6  border-2 peer-checked:border-black"
                                :style="{ backgroundColor: context.option.value }" />
                            <span class="sr-only">{{ context.option.label }}</span>
                        </template>
                    </FormKit>

                    <FormKit name="cadran" label="Cadran" value="#000000" type="radio" :options="colors"
                        :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                        input-class="peer sr-only" options-class="flex gap-1 mb-3 mt-1">
                        <template #label="context">
                            <div class="h-4 w-6  border-2 peer-checked:border-black"
                                :style="{ backgroundColor: context.option.value }" />
                            <span class="sr-only">{{ context.option.label }}</span>
                        </template>
                    </FormKit>

                    <FormKit name="bracelet_haut" label="Bracelet supérieur" value="#FFFFFF" type="radio"
                        :options="colors" :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                        input-class="peer sr-only" options-class="flex gap-1 mb-3 mt-1">
                        <template #label="context">
                            <div class="h-4 w-6  border-2 peer-checked:border-black"
                                :style="{ backgroundColor: context.option.value }" />
                            <span class="sr-only">{{ context.option.label }}</span>
                        </template>
                    </FormKit>

                    <FormKit name="materiaux.value" label="materiaux.value" type="radio" :options="materiaux"
                        :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                        input-class="peer sr-only" options-class="flex gap-1 mb-3 mt-1">
                        <template #label="context">
                            <img class="h-16 w-16 rounded-full border-2 peer-checked:border-red-600"
                                :src="context.option.value" />
                            <span class="">{{ context.option.label }}</span>
                        </template>
                    </FormKit>
                </div>
            </FormKit>
        </div>
    </div>
</template>
