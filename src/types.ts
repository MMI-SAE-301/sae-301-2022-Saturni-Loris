export interface Montre {
  ecran?: string;
  bracelet_haut?: string;
  bracelet_bas?: string;
  bouton?: string;
  cadran?: string;
  texte?: string;
  materiaux?: { label: '', value: '' }
}


export const colors = {
  "#000000": "Noir",
  "#FFFFFF": "Blanc",
  "#EEC808": "Jaune",
  "#3D4D63": "Bleu",
  "#B7D5FF": "BleuClair",
  "#A348CD": "Magenta",
  "#00FFFF": "Cyan",

  "#E4AAFF": "Rose",

};


export const materiaux = [
  {
    value: "/public/materiaux/cuir.webp",
    label: "Cuir"
  },
  {
    value: "/public/materiaux/carbone.png",
    label: "Carbone"
  },
  {
    value: "/public/materiaux/pierre.jpg",
    label: "Pierre"
  },

]