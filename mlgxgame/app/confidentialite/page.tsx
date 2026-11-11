import type { Metadata } from "next";
import TextPage from "@/components/TextPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité - MLGxGame",
  description:
    "Quelles informations MLGxGame collecte, pourquoi, et quels sont tes droits.",
};

export default function PrivacyPage() {
  return (
    <TextPage
      title="Politique de confidentialité"
      updated="9 novembre 2026"
    >
      <p>
        Ta vie privée compte. Cette page explique, simplement, quelles
        informations MLGxGame utilise.
      </p>

      <h2>Ce que nous collectons aujourd&apos;hui</h2>
      <p>
        MLGxGame ne demande ni compte, ni nom, ni mot de passe. Nous ne
        vendons aucune donnée et nous n&apos;affichons pas de publicité
        personnalisée.
      </p>
      <ul>
        <li>
          <strong>Historique de jeux :</strong> pour te proposer
          &laquo;&nbsp;Reprendre&nbsp;&raquo; et &laquo;&nbsp;Pour
          toi&nbsp;&raquo;, le site enregistre les jeux que tu ouvres dans le
          stockage de ton propre navigateur. Cette information reste sur ton
          appareil : nous ne la recevons pas. Tu peux l&apos;effacer en
          vidant les données du site dans ton navigateur.
        </li>
        <li>
          <strong>Données techniques d&apos;hébergement :</strong> notre
          hébergeur (Vercel) peut enregistrer des informations techniques
          standard lors de ta visite, comme ton adresse IP, le type
          d&apos;appareil et les pages demandées, pour faire fonctionner et
          sécuriser le site.
        </li>
      </ul>

      <h2>Liens vers d&apos;autres sites</h2>
      <p>
        Quand tu cliques sur un jeu ou un produit, tu peux être envoyé vers un
        site extérieur (l&apos;éditeur du jeu, une boutique officielle).
        Ces sites ont leur propre politique de confidentialité, que nous te
        conseillons de lire. Nous n&apos;en sommes pas responsables.
      </p>

      <h2>Enfants</h2>
      <p>
        MLGxGame veut rester un endroit sûr pour tous. Nous ne collectons pas
        sciemment d&apos;informations personnelles auprès d&apos;enfants de
        moins de 13 ans. Si tu penses qu&apos;un enfant nous a transmis des
        informations, écris-nous et nous les supprimerons.
      </p>

      <h2>Si nous ajoutons des comptes ou des outils</h2>
      <p>
        Plus tard, MLGxGame pourra proposer des comptes, des achats ou des
        statistiques de visite. Avant cela, nous mettrons cette page à jour
        pour t&apos;expliquer exactement ce qui est collecté, pourquoi, et
        combien de temps c&apos;est conservé.
      </p>

      <h2>Tes droits</h2>
      <p>
        Tu peux nous demander quelles informations nous avons sur toi, les
        corriger ou les supprimer. Selon l&apos;endroit où tu vis (par
        exemple dans l&apos;Union européenne ou en Californie), tu disposes
        aussi de droits prévus par la loi. Écris-nous et nous te répondrons.
      </p>

      <h2>Nous contacter</h2>
      <p>Adresse e-mail : emmbrayan145@gmail.com</p>
    </TextPage>
  );
}