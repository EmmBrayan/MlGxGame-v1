import type { Metadata } from "next";
import TextPage from "@/components/TextPage";

export const metadata: Metadata = {
  title: "Conditions d'utilisation - MLGxGame",
  description: "Les règles d'utilisation du site MLGxGame.",
};

export default function TermsPage() {
  return (
    <TextPage title="Conditions d'utilisation" updated="12 novembre 2026">
      <p>
        En utilisant MLGxGame, tu acceptes les règles ci-dessous. Si tu
        n&apos;es pas d&apos;accord, tu peux simplement ne pas utiliser le
        site.
      </p>

      <h2>Ce qu&apos;est MLGxGame</h2>
      <p>
        MLGxGame présente une sélection de jeux, de templates de sites web et
        de matériel gaming. Nous ne créons ni n&apos;hébergeons les jeux :
        nous t&apos;envoyons vers les sites officiels des éditeurs.
      </p>

      <h2>Utilisation du site</h2>
      <ul>
        <li>Le site est destiné à un usage personnel et légal.</li>
        <li>
          Tu ne dois pas essayer de perturber le site, de le pirater ou
          d&apos;en copier massivement le contenu.
        </li>
        <li>
          Les enfants doivent utiliser le site avec l&apos;accord d&apos;un
          parent ou d&apos;un responsable.
        </li>
      </ul>

      <h2>Liens et sites extérieurs</h2>
      <p>
        Quand tu quittes MLGxGame pour jouer, télécharger ou acheter, tu
        arrives sur un site que nous ne contrôlons pas. Son contenu, ses prix
        et ses règles sont de la responsabilité de son propriétaire. Vérifie
        toujours les informations sur le site officiel avant de télécharger
        ou d&apos;acheter.
      </p>

      <h2>Marques et propriété intellectuelle</h2>
      <p>
        Les noms de jeux, les marques et les logos cités appartiennent à leurs
        propriétaires respectifs. MLGxGame n&apos;est affilié à aucun éditeur
        de jeux et ne prétend pas l&apos;être. Le design et les textes
        originaux du site appartiennent à MLGxGame.
      </p>

      <h2>Liens d&apos;affiliation</h2>
      <p>
        Certains liens pourront nous rapporter une commission si tu achètes,
        sans coût supplémentaire pour toi. Quand c&apos;est le cas, nous
        l&apos;indiquons.
      </p>

      <h2>Aucune garantie</h2>
      <p>
        Nous faisons de notre mieux pour que les informations soient justes
        (types de jeux, plateformes, prix), mais elles peuvent changer ou
        contenir des erreurs. Le site est fourni tel quel, sans garantie.
        Dans la limite permise par la loi, MLGxGame ne peut pas être tenu
        responsable des dommages liés à l&apos;utilisation du site ou des
        sites vers lesquels il renvoie.
      </p>

      <h2>Modifications</h2>
      <p>
        Nous pouvons modifier ces conditions. La date de mise à jour en haut
        de la page indique la dernière version.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Ces conditions sont régies par les lois des États-Unis et de
        l&apos;État où réside l&apos;éditeur du site.
      </p>

      <h2>Nous contacter</h2>
      <p>Adresse e-mail : emmbrayan145@gmail.com</p>
    </TextPage>
  );
}