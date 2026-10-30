export type Game = {
    slug: string;
    name: string;
    genre: string;
    type: "navigateur" | "telechargement";
    description: string;
};

export const games: Game[] = [
    { slug: "agar-io", name: "Agar.io", genre: "Arcade", type: "navigateur", description: "Dévore les autres cellules pour grandir sans te faire manger." },
    { slug: "slither-io", name: "Slither.io", genre: "Arcade", type: "navigateur", description: "Guide ton serpent, grandis en mangeant et évite les collisions." },
    { slug: "krunker-io", name: "Krunker.io", genre: "FPS", type: "navigateur", description: "Un jeu de tir rapide à la première personne, dans ton navigateur." },
    { slug: "skribbl-io", name: "Skribbl.io", genre: "Party", type: "navigateur", description: "Dessine et devine avec tes amis, en ligne." },
    { slug: "shell-shockers", name: "Shell Shockers", genre: "FPS", type: "navigateur", description: "Un jeu de tir multijoueur où tu incarnes un œuf armé." },
    { slug: "2048", name: "2048", genre: "Puzzle", type: "navigateur", description: "Fusionne les tuiles pour atteindre 2048." },
    { slug: "hextris", name: "Hextris", genre: "Puzzle", type: "navigateur", description: "Un puzzle à la Tetris, sur un hexagone qui tourne." },
    { slug: "little-alchemy-2", name: "Little Alchemy 2", genre: "Réflexion", type: "navigateur", description: "Combine des éléments pour en découvrir de nouveaux." },
    { slug: "valorant", name: "Valorant", genre: "FPS", type: "telechargement", description: "Un jeu de tir tactique en équipe, à télécharger sur PC." },
    { slug: "minecraft", name: "Minecraft", genre: "Aventure", type: "telechargement", description: "Construis, explore et survis dans un monde de blocs." },
    { slug: "portal-2", name: "Portal 2", genre: "Puzzle", type: "telechargement", description: "Résous des énigmes avec un pistolet à portails." },
];