export type Game = {
    slug: string;
    name: string;
    genre: string;
    type: "navigateur" | "telechargement";
    description: string;
    platforms?: ("pc" | "android")[]; // seulement pour les jeux à télécharger
    price?: "gratuit" | "payant"; // seulement pour les jeux à télécharger
    featured?: boolean; // "true" = jeu à la une de sa plateforme
};

export const games: Game[] = [
    // --- Jeux dans le navigateur ---
    { slug: "agar-io", name: "Agar.io", genre: "Arcade", type: "navigateur", description: "Dévore les autres cellules pour grandir sans te faire manger." },
    { slug: "slither-io", name: "Slither.io", genre: "Arcade", type: "navigateur", description: "Guide ton serpent, grandis en mangeant et évite les collisions." },
    { slug: "krunker-io", name: "Krunker.io", genre: "FPS", type: "navigateur", description: "Un jeu de tir rapide à la première personne, dans ton navigateur." },
    { slug: "skribbl-io", name: "Skribbl.io", genre: "Party", type: "navigateur", description: "Dessine et devine avec tes amis, en ligne." },
    { slug: "shell-shockers", name: "Shell Shockers", genre: "FPS", type: "navigateur", description: "Un jeu de tir multijoueur où tu incarnes un œuf armé." },
    { slug: "2048", name: "2048", genre: "Puzzle", type: "navigateur", description: "Fusionne les tuiles pour atteindre 2048." },
    { slug: "hextris", name: "Hextris", genre: "Puzzle", type: "navigateur", description: "Un puzzle à la Tetris, sur un hexagone qui tourne." },
    { slug: "little-alchemy-2", name: "Little Alchemy 2", genre: "Réflexion", type: "navigateur", description: "Combine des éléments pour en découvrir de nouveaux." },

    // --- Jeux à télécharger (l'ordre mélange PC et Android sur la rangée du bas) ---
    { slug: "valorant", name: "Valorant", genre: "FPS", type: "telechargement", platforms: ["pc"], price: "gratuit", featured: true, description: "Un jeu de tir tactique en équipe, à télécharger sur PC." },
    { slug: "clash-royale", name: "Clash Royale", genre: "Stratégie", type: "telechargement", platforms: ["android"], price: "gratuit", featured: true, description: "Des duels de cartes en temps réel, sur mobile." },
    { slug: "minecraft", name: "Minecraft", genre: "Aventure", type: "telechargement", platforms: ["pc", "android"], price: "payant", description: "Construis, explore et survis dans un monde de blocs." },
    { slug: "subway-surfers", name: "Subway Surfers", genre: "Arcade", type: "telechargement", platforms: ["android"], price: "gratuit", description: "Cours, saute et esquive les trains sans t'arrêter." },
    { slug: "league-of-legends", name: "League of Legends", genre: "MOBA", type: "telechargement", platforms: ["pc"], price: "gratuit", description: "Un jeu d'arène en équipe, très compétitif, sur PC." },
    { slug: "genshin-impact", name: "Genshin Impact", genre: "RPG", type: "telechargement", platforms: ["pc", "android"], price: "gratuit", description: "Explore un vaste monde ouvert et combats avec des personnages variés." },
    { slug: "portal-2", name: "Portal 2", genre: "Puzzle", type: "telechargement", platforms: ["pc"], price: "payant", description: "Résous des énigmes avec un pistolet à portails." },
    { slug: "brawl-stars", name: "Brawl Stars", genre: "Action", type: "telechargement", platforms: ["android"], price: "gratuit", description: "Des combats rapides à plusieurs, en équipe, sur mobile." },
    { slug: "rocket-league", name: "Rocket League", genre: "Sport", type: "telechargement", platforms: ["pc"], price: "gratuit", description: "Du football avec des voitures, sur PC." },
    { slug: "stardew-valley", name: "Stardew Valley", genre: "Simulation", type: "telechargement", platforms: ["pc", "android"], price: "payant", description: "Reprends une ferme, cultive, pêche et fais-toi des amis au village." },
    { slug: "ea-sports-fc-mobile", name: "EA Sports FC Mobile", genre: "Sport", type: "telechargement", platforms: ["android"], price: "gratuit", description: "Du football sur mobile : construis ton équipe et joue en ligne." },
    { slug: "terraria", name: "Terraria", genre: "Aventure", type: "telechargement", platforms: ["pc", "android"], price: "payant", description: "Creuse, construis et combats dans un monde en 2D." },
];