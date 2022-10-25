export interface Montre {
  ecran?: string;
  bracelet_haut?: string;
  bracelet_bas?: string;
  bouton?: string;
  cadran?: string;
  materiaux?: { label: '', value: '' }
}


export const colors = {
  "#000000": "Noir",
  "#FFFFFF": "Blanc",
  "#FF0000": "Rouge",
  "#00FF00": "Vert",
  "#0000FF": "Bleu",
  "#FFFF00": "Jaune",
  "#FF00FF": "Magenta",
  "#00FFFF": "Cyan",
  "#C0C0C0": "Gris clair",
  "#808080": "Gris",
  "#800000": "Marron",
  "#808000": "Olive",
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