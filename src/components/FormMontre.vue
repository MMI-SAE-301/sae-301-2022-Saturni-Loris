<script setup lang="ts">
import type { Montre } from "@/types";
import { colors } from "@/types"
import { ref } from "vue";
import MontreProfil from "./MontreProfil.vue";

const props = defineProps<{
    data?: Montre;
    id?: string;
}>();

const chaussure = ref<Montre>(props.data ?? {});

</script>

<template>
    <div class="p-2">
        <div class="carousel w-64">
            <MontreProfil v-bind="chaussure" id="profil" />
        </div>
        <FormKit type="form" v-model="chaussure">
            <FormKit name="bracelethaut" label="Haut du bracelet" value="#FFFFFF" type="radio" :options="colors"
                :sections-schema="{inner:{$el:null},decorator:{$el:null},}" input-class="peer sr-only"
                options-class="flex gap-1 mb-3 mt-1">
                <template #label="context">
                    <div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                        :style="{backgroundColor: context.option.value}" />
                    <span class="sr-only">{{context.option.label}}</span>
                </template>
            </FormKit>
            <FormKit name="braceletbas" label="Bas du bracelet" value="#FFFFFF" type="radio" :options="colors"
                :sections-schema="{inner:{$el:null},decorator:{$el:null},}" input-class="peer sr-only"
                options-class="flex gap-1 mb-3 mt-1">
                <template #label="context">
                    <div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                        :style="{backgroundColor: context.option.value}" />
                    <span class="sr-only">{{context.option.label}}</span>
                </template>
            </FormKit>
            <FormKit name="fondheure" label="Fond de l'heure" value="#FFFFFF" type="radio" :options="colors"
                :sections-schema="{inner:{$el:null},decorator:{$el:null},}" input-class="peer sr-only"
                options-class="flex gap-1 mb-3 mt-1">
                <template #label="context">
                    <div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                        :style="{backgroundColor: context.option.value}" />
                    <span class="sr-only">{{context.option.label}}</span>
                </template>
            </FormKit>

        </FormKit>
    </div>
</template>
