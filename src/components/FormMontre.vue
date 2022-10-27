<script setup lang="ts">
import type { Montre } from "@/types";
import { colors, materiaux } from "@/types"
import { ref } from "vue";
import MontreProfil from "./MontreProfil.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps(["id", "Montre"]);


const montre = ref<Montre>(props.data ?? {});


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
    <div class="flex gap-20 items-center ">
        <div class="sm:mt-20 mt-20 my-auto max-w-md shadow-xl ">

            <FormKit @submit="upsertmontre" type="form" v-model="montrevue" :submit-attrs="{inputClass:''}"
                submit-label=" ">

                <h1 class="text-blanctext font-semibold px-10 py-2 text-3xl">MODÈLE N°59</h1>
                <p class="text-blanctext px-10 pb-5 text-sm font-thin">Un modèle de montre StreetWear, avec son
                    alure
                    classe et
                    épuré.
                    Permettez-vous de la modifer en apportant votre touche
                    personnel. Profitez d’un choix varié de couleurs, se complémentant
                    avec des bracelets de cuir, de carbone, ou d’anthracite.</p>

                <div class="flex gap-52">
                    <h2 class="text-base ml-3 pb-4 font-semibold text-blanctext">Coloris</h2>
                </div>

                <div class="ml-10 pb-5">
                    <div>

                        <p class="text-xs  font-bold  text-blanctext">ÉCRAN</p>
                        <FormKit class="pl-4" name="ecran" label="" value="#000000" type="radio" :options="colors"
                            :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                            input-class="peer sr-only" options-class="flex  ml-4 mb-3 mt-1">

                            <template #label="context">
                                <div class="h-4 w-6 mx-1 rounded-sm"
                                    :style="{ backgroundColor: context.option.value }" />
                                <span class="sr-only">{{ context.option.label }}</span>
                            </template>
                        </FormKit>

                        <p class="text-xs font-bold   text-blanctext">BOUTON</p>
                        <FormKit name="bouton" label="" value="#000000" type="radio" :options="colors"
                            :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                            input-class="peer sr-only" options-class="flex ml-4 mb-3 mt-1">
                            <template #label="context">
                                <div class="h-4 w-6 mx-1 rounded-sm"
                                    :style="{ backgroundColor: context.option.value }" />
                                <span class="sr-only">{{ context.option.label }}</span>
                            </template>
                        </FormKit>



                        <p class="text-xs font-bold  text-blanctext">BRACELET INFÉRIEUR</p>
                        <FormKit name="bracelet_bas" label="" value="#FFFFFF" type="radio" :options="colors"
                            :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                            input-class="peer sr-only" options-class="flex ml-4 mb-3 mt-1">
                            <template #label="context">
                                <div class="h-4 w-6 mx-1 rounded-sm"
                                    :style="{ backgroundColor: context.option.value }" />
                                <span class="sr-only">{{ context.option.label }}</span>
                            </template>
                        </FormKit>

                        <p class="text-xs font-bold  text-blanctext">JOUR & HEURE</p>
                        <FormKit name="texte" label="" value="#FFFFFF" type="radio" :options="colors"
                            :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                            input-class="peer sr-only" options-class="flex ml-4 mb-3 mt-1">
                            <template #label="context">
                                <div class="h-4 w-6 mx-1 rounded-sm"
                                    :style="{ backgroundColor: context.option.value }" />
                                <span class="sr-only">{{ context.option.label }}</span>
                            </template>
                        </FormKit>

                        <p class="text-xs font-bold  text-blanctext">BRACELET SUPÉRIEUR</p>
                        <FormKit name="bracelet_haut" label="" value="#FFFFFF" type="radio" :options="colors"
                            :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                            input-class="peer sr-only" options-class="flex ml-4 mb-3 mt-1">
                            <template #label="context">
                                <div class="h-4 w-6 mx-1 rounded-sm"
                                    :style="{ backgroundColor: context.option.value }" />
                                <span class="sr-only">{{ context.option.label }}</span>
                            </template>
                        </FormKit>

                        <p class="text-xs font-bold  text-blanctext">CADRAN</p>
                        <FormKit name="cadran" label="" value="#000000" type="radio" :options="colors"
                            :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                            input-class="peer sr-only" options-class="flex ml-4 mb-3 mt-1">
                            <template #label="context">
                                <div class="h-4 w-6 mx-1 rounded-sm"
                                    :style="{ backgroundColor: context.option.value }" />
                                <span class="sr-only">{{ context.option.label }}</span>
                            </template>
                        </FormKit>

                    </div>
                </div>
                <div class="flex gap-52">
                    <h2 class="text-base ml-3 font-semibold text-blanctext">Matériel</h2>


                </div>
                <div class="text-xs font-bold  text-blanctext">
                    <FormKit name="materiaux.value" label="" type="radio" :options="materiaux"
                        :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                        input-class="peer sr-only" options-class="flex ml-12 mb-3 mt-1">
                        <template #label="context">
                            <img class="h-10 w-20 mx-1 p-1 rounded-sm" :src="context.option.value" />
                        </template>
                    </FormKit>
                </div>

                <div class="pl-64 pt-5">
                    <FormKit type="submit" input-class="px-4 py-2 font-semibold bg-blanctext">Commander
                    </FormKit>
                    <FormKit v-if="props.id" name="commander" label="commander" type="button"></FormKit>
                    <!-- <FormKit v-if="props.id" name="Supprimer" label="supprimer" type="button"></FormKit> -->

                </div>

                <!-- <div v-if="commandeClick" class="bg-white">Merci d'avoir commandé</div> -->


            </FormKit>
        </div>


        <MontreProfil class="ml-40" v-bind="montrevue" id="profil" />

    </div>
</template>
