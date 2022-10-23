<script setup lang="ts">
import type { Montre } from "@/types";
import { colors } from "@/types"
import { ref } from "vue";
import MontreProfil from "./MontreProfil.vue";

const props = defineProps<{
    data?: Montre;
    id?: string;
}>();

const montrevue = ref<Montre>(props.data ?? {});

</script>

<!-- submit-attrs="{classes: {input: 'bg-green-600'}} -->

<template class="">
    <div class="flex bg-beige  ">
        <div class=" w-full h-full">
            <MontreProfil v-bind="montrevue" id="profil" />
        </div>

        <div class="float-right p-4 bg-white ">

            <FormKit type="form" v-model="montrevue" submit-label="Commander votre montre">
                <div>
                    <h1 class="font-bold">CADRAN</h1>
                    <FormKit name="fondaffichageheure" label="Background du cadran" value="#FFFFFF" type="radio"
                        :options="colors" :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                        input-class="peer sr-only" options-class="flex gap-1 mb-3 mt-1">
                        <template #label="context">
                            <div class="h-4 w-6  border-2 peer-checked:border-black"
                                :style="{ backgroundColor: context.option.value }" />
                            <span class="sr-only">{{ context.option.label }}</span>
                        </template>
                    </FormKit>

                    <FormKit name="cadranintbg" label="Cadran intérieur" value="#FFFFFF" type="radio" :options="colors"
                        :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                        input-class="peer sr-only" options-class="flex gap-1 mb-3 mt-1">
                        <template #label="context">
                            <div class="h-4 w-6  border-2 peer-checked:border-black"
                                :style="{ backgroundColor: context.option.value }" />
                            <span class="sr-only">{{ context.option.label }}</span>
                        </template>
                    </FormKit>

                    <FormKit name="cadranextbg" label="Cadran extérieur" value="#FFFFFF" type="radio" :options="colors"
                        :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                        input-class="peer sr-only" options-class="flex gap-1 mb-3 mt-1">
                        <template #label="context">
                            <div class="h-4 w-6  border-2 peer-checked:border-black"
                                :style="{ backgroundColor: context.option.value }" />
                            <span class="sr-only">{{ context.option.label }}</span>
                        </template>
                    </FormKit>
                </div>

                <div class="py-8">
                    <h1 class="font-bold">BRACELET</h1>
                    <FormKit name="braceletbasbg" label="Bracelet bas" value="#FFFFFF" type="radio" :options="colors"
                        :sections-schema="{ inner: { $el: null }, decorator: { $el: null }, }"
                        input-class="peer sr-only" options-class="flex gap-1 mb-3 mt-1">
                        <template #label="context">
                            <div class="h-4 w-6  border-2 peer-checked:border-black"
                                :style="{ backgroundColor: context.option.value }" />
                            <span class="sr-only">{{ context.option.label }}</span>
                        </template>
                    </FormKit>

                    <FormKit name="bracelethautbg" label="Bracelet haut" value="#FFFFFF" type="radio" :options="colors"
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
