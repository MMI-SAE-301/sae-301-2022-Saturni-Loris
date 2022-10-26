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
        router.push("/panier");
    }
}
const montrevue = ref<Montre>(props.data ?? {});
</script>



<template class="">
    <div class="flex gap-20 items-center">
        <div class="sm:mt-20 mt-20 my-auto max-w-md  shadow-xl ">
            <FormKit @submit="upsertmontre" type="form" v-model="montrevue"
                :submit-attrs="{inputClass:'px-4 py-2 font-semibold bg-blanctext'}" submit-label=" Commander">
                <div>
                    <h1 class="text-blanctext font-semibold px-10 py-2 text-3xl">MODÈLE N°59</h1>
                    <p class="text-blanctext px-10 pb-5 text-sm font-thin">Un modèle de montre StreetWear, avec son
                        alure
                        classe et
                        épuré.
                        Permettez-vous de la modifer en apportant votre touche
                        personnel. Profitez d’un choix varié de couleurs, se complémentant
                        avec des bracelets de cuir, de carbone, ou d’anthracite.</p>

                    <h2 class="text-base ml-3 font-semibold text-blanctext">Coloris</h2>

                    <div class="flex ml-10">
                        <div>
                            <p class="text-sm font-thin text-blanctext">Écran</p>
                            <FormKit class="pl-4" name="ecran" label="" value="#000000" type="radio" :options="colors"
                                :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                                input-class="peer sr-only" options-class="flex gap-1 mb-3 mt-1">

                                <template #label="context">
                                    <div class="h-4 w-6  border-2 peer-checked:border-black"
                                        :style="{ backgroundColor: context.option.value }" />
                                    <span class="sr-only">{{ context.option.label }}</span>
                                </template>
                            </FormKit>

                            <p>Bouton</p>
                            <FormKit name="bouton" label="" value="#000000" type="radio" :options="colors"
                                :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                                input-class="peer sr-only" options-class="flex gap-1 mb-3 mt-1">
                                <template #label="context">
                                    <div class="h-4 w-6  border-2 peer-checked:border-black"
                                        :style="{ backgroundColor: context.option.value }" />
                                    <span class="sr-only">{{ context.option.label }}</span>
                                </template>
                            </FormKit>

                            <p>Bracelet inférieur</p>
                            <FormKit name="bracelet_bas" label="" value="#FFFFFF" type="radio" :options="colors"
                                :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                                input-class="peer sr-only" options-class="flex gap-1 mb-3 mt-1">
                                <template #label="context">
                                    <div class="h-4 w-6  border-2 peer-checked:border-black"
                                        :style="{ backgroundColor: context.option.value }" />
                                    <span class="sr-only">{{ context.option.label }}</span>
                                </template>
                            </FormKit>

                            <p class="text-sm font-thin text-blanctext">Bracelet supérieur</p>
                            <FormKit name="bracelet_haut" label="" value="#FFFFFF" type="radio" :options="colors"
                                :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                                input-class="peer sr-only" options-class="flex ml-4 mb-3 mt-1">
                                <template #label="context">
                                    <div class="h-4 w-6  border-2 peer-checked:border-black"
                                        :style="{ backgroundColor: context.option.value }" />
                                    <span class="sr-only">{{ context.option.label }}</span>
                                </template>
                            </FormKit>

                            <p>Cadran</p>
                            <FormKit name="cadran" label="" value="#000000" type="radio" :options="colors"
                                :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                                input-class="peer sr-only" options-class="flex gap-1 mb-3 mt-1">
                                <template #label="context">
                                    <div class="h-4 w-6  border-2 peer-checked:border-black"
                                        :style="{ backgroundColor: context.option.value }" />
                                    <span class="sr-only">{{ context.option.label }}</span>
                                </template>
                            </FormKit>
                        </div>
                        <div>
                            <FormKit name="materiaux.value" label="Matériaux" type="radio" :options="materiaux"
                                :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                                input-class="peer sr-only" options-class="flex gap-6 mb-3 mt-1">
                                <template #label="context">
                                    <img class="h-4 w-6  border-2 peer-checked:border-black"
                                        :src="context.option.value" />
                                    <span class="">{{ context.option.label }}</span>
                                </template>
                            </FormKit>
                        </div>
                    </div>
                </div>
            </FormKit>
        </div>


        <MontreProfil class="ml-40" v-bind="montrevue" id="profil" />

    </div>
</template>
