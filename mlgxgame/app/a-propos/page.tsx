import type { Metadata } from "next";
import TextPage from "@/components/TextPage";

export const metadata: Metadata = {
  title: "À propos - MLGxGame",
  description:
    "MLGxGame sélectionne des jeux pour se divertir sainement, des templates web et du matériel gaming.",
};

export default function AboutPage() {
  return (
    <TextPage title="À propos de MLGxGame">
      <p>
        MLGxGame est un site de jeux pensé pour divertir sainement. Chaque jeu
        est choisi à la main : le but est de s&apos;amuser, jamais de pousser
        à la violence, à la drogue ou au sexe.
      </p>

      <h2>Ce que tu trouves ici</h2>
      <ul>
        <li>Des jeux en ligne, jouables directement dans ton navigateur</li>
        <li>
          Des jeux à télécharger sur PC et Android : on t&apos;envoie vers la
          boutique officielle
        </li>
        <li>Bientôt : des templates de sites web et une sélection de matériel gaming</li>
      </ul>

      <h2>Notre indépendance</h2>
      <p>
        MLGxGame n&apos;est affilié à aucun éditeur de jeux. Les noms de jeux
        et les marques cités appartiennent à leurs propriétaires respectifs.
        Nous ne faisons que présenter les jeux et renvoyer vers leurs sites
        officiels.
      </p>

      <h2>Liens d&apos;affiliation</h2>
      <p>
        Certains liens, notamment pour le matériel gaming, pourront nous
        rapporter une petite commission si tu achètes, sans aucun coût
        supplémentaire pour toi. Cela nous aide à faire vivre le site.
      </p>

      <h2>Nous contacter</h2>
      <p>Adresse e-mail : emmbrayan145@gmail.com </p>
    </TextPage>
  );
}