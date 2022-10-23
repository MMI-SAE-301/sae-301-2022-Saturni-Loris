<script setup lang="ts">
import type { Montre } from "@/types";

withDefaults(defineProps<Montre>(), {
    cadran: "red",
    empeigne: "white",
    pointe: "white",
    oeillet: "white",
    bande: "white",
    languette: "white",
    lacet: "white",
    trimestre: "white",
});
</script>

<template>
    <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" viewBox="0 0 1366 768" style="enable-background:new 0 0 1366 768;" xml:space="preserve">
        <g>
            <g>
                <defs>
                    <rect id="SVGID_1_" width="1366" height="768" />
                </defs>
                <clipPath id="SVGID_2_">
                    <use xlink:href="#SVGID_1_" style="overflow:visible;" />
                </clipPath>




                <path class="cadran" d="M550.4,73.4c0,0,52.2-20.3,98.6-18.8c46.4,1.4,95.7,15.9,95.7,15.9s-29,271-26.1,349.3
			C721.4,498,746.1,727,746.1,727s-47.8,21.7-92.8,18.8c-44.9-2.9-97.1-17.4-97.1-17.4s23.9-239.1,23.9-333.3S550.4,73.4,550.4,73.4
			" :fill="cadran"></path>


                <path class="cadran" d="M550.4,73.4c0,0,52.2-20.3,98.6-18.8c46.4,1.4,95.7,15.9,95.7,15.9s-29,271-26.1,349.3
			C721.4,498,746.1,727,746.1,727s-47.8,21.7-92.8,18.8c-44.9-2.9-97.1-17.4-97.1-17.4s23.9-239.1,23.9-333.3S550.4,73.4,550.4,73.4
			z" :fill="cadran" />
                <path class="cadran" d="M509.8,199.4c0,0,39.1-72.5,34.8-126.1c0,0,17.4-27.5,102.9-27.5s110.1,18.8,110.1,18.8
			s14.8,110.1,35.1,130.4c0,0-96,18.8-148.1,18.8S509.8,199.4,509.8,199.4" :fill="cadran" />
                <path class="cadran" d="M509.8,199.4c0,0,39.1-72.5,34.8-126.1c0,0,17.4-27.5,102.9-27.5s110.1,18.8,110.1,18.8
			s14.8,110.1,35.1,130.4c0,0-96,18.8-148.1,18.8S509.8,199.4,509.8,199.4z" :fill="cadran" />
                <path class="cadran" d="M795.1,607.8c0,0-41.9,70.9-39.6,124.7c0,0-18.4,26.9-103.9,23.6s-109.3-23-109.3-23s-10.6-110.6-30.1-131.7
			c0,0,96.6-15.2,148.7-13.2C713.1,590.2,795.1,607.8,795.1,607.8" :fill="cadran" />
                <path class="braceletbas" d="M795.1,607.8c0,0-41.9,70.9-39.6,124.7c0,0-18.4,26.9-103.9,23.6s-109.3-23-109.3-23s-10.6-110.6-30.1-131.7
			c0,0,96.6-15.2,148.7-13.2C713.1,590.2,795.1,607.8,795.1,607.8z" :fill="braceletbas" />
            </g>
            <g>
                <defs>
                    <rect id="SVGID_3_" width="1366" height="768" />
                </defs>
                <clipPath id="SVGID_4_">
                    <use xlink:href="#SVGID_3_" style="overflow:visible;" />
                </clipPath>
                <path class="cadran" d="M758.5,629.8H540.2c-44.6,0-80.8-36.2-80.8-80.8V257c0-44.6,36.2-80.8,80.8-80.8h218.3
			c44.6,0,80.8,36.2,80.8,80.8v292C839.3,593.6,803.2,629.8,758.5,629.8" />
                <path class="cadran" d="M758.5,629.8H540.2c-44.6,0-80.8-36.2-80.8-80.8V257c0-44.6,36.2-80.8,80.8-80.8h218.3
			c44.6,0,80.8,36.2,80.8,80.8v292C839.3,593.6,803.2,629.8,758.5,629.8z" />
                <path class="cadran" d="M747.9,604.4h-197c-39.9,0-72.2-32.3-72.2-72.2V273.8c0-39.9,32.3-72.2,72.2-72.2h197
			c39.9,0,72.2,32.3,72.2,72.2v258.4C820.1,572.1,787.7,604.4,747.9,604.4" />
                <path class="cadran" d="M747.9,604.4h-197c-39.9,0-72.2-32.3-72.2-72.2V273.8c0-39.9,32.3-72.2,72.2-72.2h197
			c39.9,0,72.2,32.3,72.2,72.2v258.4C820.1,572.1,787.7,604.4,747.9,604.4z" />
                <path class="cadran" d="M735.9,587.9H562.8c-36,0-65.2-29.2-65.2-65.2V283.3c0-36,29.2-65.2,65.2-65.2h173.1
			c36,0,65.2,29.2,65.2,65.2v239.4C801.1,558.7,771.9,587.9,735.9,587.9z" />
            </g>
            <g>
                <defs>
                    <rect id="SVGID_5_" width="1366" height="768" />
                </defs>
                <clipPath id="SVGID_6_">
                    <use xlink:href="#SVGID_5_" style="overflow:visible;" />
                </clipPath>
            </g>
        </g>
    </svg>
</template>

<style>
.st0 {
    clip-path: url(#SVGID_2_);
}

.st1 {
    clip-path: url(#SVGID_4_);
    fill: #FFFFFF;
}

.st2 {
    clip-path: url(#SVGID_4_);
    fill: none;
    stroke: #000000;
    stroke-width: 0.5;
    stroke-miterlimit: 10;
}

.st3 {
    clip-path: url(#SVGID_6_);
    fill: #FFFFFF;
}

.st4 {
    clip-path: url(#SVGID_6_);
    fill: none;
    stroke: #000000;
    stroke-width: 0.5;
    stroke-miterlimit: 10;
}

.st5 {
    clip-path: url(#SVGID_6_);
    fill: #B3B3B3;
}

.st6 {
    font-family: 'ArialMT';
}

.st7 {
    font-size: 98px;
}

.st8 {
    letter-spacing: -10;
}

.st9 {
    font-size: 30px;
}

.st10 {
    clip-path: url(#SVGID_10_);
}

.st11 {
    clip-path: url(#SVGID_12_);
    fill: #BBBDBF;
}

.st12 {
    clip-path: url(#SVGID_12_);
    fill: #929497;
}

.st13 {
    clip-path: url(#SVGID_12_);
    fill: #A6A8AB;
}

.st14 {
    clip-path: url(#SVGID_12_);
    fill: #231F20;
}

.st15 {
    clip-path: url(#SVGID_12_);
    fill: #58595B;
}

.st16 {
    clip-path: url(#SVGID_12_);
    fill: #404041;
}

.st17 {
    clip-path: url(#SVGID_12_);
    fill: #808284;
}

.st18 {
    clip-path: url(#SVGID_12_);
    fill: #6D6E70;
}

.st19 {
    clip-path: url(#SVGID_14_);
}

.st20 {
    clip-path: url(#SVGID_16_);
}

.st21 {
    filter: url(#Adobe_OpacityMaskFilter);
}

.st22 {
    clip-path: url(#SVGID_18_);
    fill: url(#SVGID_20_);
}

.st23 {
    clip-path: url(#SVGID_18_);
    mask: url(#SVGID_19_);
    fill: url(#SVGID_21_);
}

.st24 {
    clip-path: url(#SVGID_23_);
    fill: url(#SVGID_24_);
}

.st25 {
    clip-path: url(#SVGID_14_);
    fill: #8C98A0;
}

.st26 {
    opacity: 0.6;
    clip-path: url(#SVGID_14_);
}

.st27 {
    clip-path: url(#SVGID_26_);
}

.st28 {
    clip-path: url(#SVGID_28_);
    fill: url(#SVGID_29_);
}

.st29 {
    opacity: 0.8;
    clip-path: url(#SVGID_14_);
}

.st30 {
    clip-path: url(#SVGID_31_);
}

.st31 {
    clip-path: url(#SVGID_33_);
    fill: url(#SVGID_34_);
}

.st32 {
    clip-path: url(#SVGID_36_);
}

.st33 {
    clip-path: url(#SVGID_38_);
    fill: url(#SVGID_39_);
}

.st34 {
    clip-path: url(#SVGID_41_);
}

.st35 {
    clip-path: url(#SVGID_43_);
    fill: url(#SVGID_44_);
}

.st36 {
    clip-path: url(#SVGID_46_);
}

.st37 {
    clip-path: url(#SVGID_48_);
    fill: url(#SVGID_49_);
}

.st38 {
    clip-path: url(#SVGID_51_);
}

.st39 {
    clip-path: url(#SVGID_53_);
    fill: url(#SVGID_54_);
}

.st40 {
    clip-path: url(#SVGID_56_);
}

.st41 {
    clip-path: url(#SVGID_58_);
    fill: url(#SVGID_59_);
}

.st42 {
    clip-path: url(#SVGID_61_);
}

.st43 {
    clip-path: url(#SVGID_63_);
    fill: url(#SVGID_64_);
}

.st44 {
    opacity: 0.4;
    clip-path: url(#SVGID_14_);
}

.st45 {
    clip-path: url(#SVGID_66_);
}

.st46 {
    clip-path: url(#SVGID_68_);
    fill: url(#SVGID_69_);
}

.st47 {
    opacity: 0.7;
    clip-path: url(#SVGID_14_);
}

.st48 {
    clip-path: url(#SVGID_71_);
}

.st49 {
    clip-path: url(#SVGID_73_);
    fill: url(#SVGID_74_);
}

.st50 {
    clip-path: url(#SVGID_76_);
}

.st51 {
    clip-path: url(#SVGID_78_);
    fill: url(#SVGID_79_);
}

.st52 {
    clip-path: url(#SVGID_81_);
}

.st53 {
    clip-path: url(#SVGID_83_);
    fill: url(#SVGID_84_);
}

.st54 {
    clip-path: url(#SVGID_86_);
}

.st55 {
    clip-path: url(#SVGID_88_);
    fill: url(#SVGID_89_);
}

.st56 {
    clip-path: url(#SVGID_91_);
}

.st57 {
    clip-path: url(#SVGID_93_);
    fill: url(#SVGID_94_);
}

.st58 {
    clip-path: url(#SVGID_96_);
}

.st59 {
    clip-path: url(#SVGID_98_);
    fill: url(#SVGID_99_);
}

.st60 {
    clip-path: url(#SVGID_101_);
}

.st61 {
    clip-path: url(#SVGID_103_);
    fill: url(#SVGID_104_);
}

.st62 {
    clip-path: url(#SVGID_101_);
    fill: #B2B4B7;
}

.st63 {
    clip-path: url(#SVGID_106_);
    fill: url(#SVGID_107_);
}

.st64 {
    clip-path: url(#SVGID_109_);
    fill: url(#SVGID_110_);
}

.st65 {
    clip-path: url(#SVGID_101_);
    fill: #8C98A0;
}

.st66 {
    opacity: 0.8;
    clip-path: url(#SVGID_101_);
}

.st67 {
    clip-path: url(#SVGID_112_);
}

.st68 {
    clip-path: url(#SVGID_114_);
    fill: url(#SVGID_115_);
}
</style>