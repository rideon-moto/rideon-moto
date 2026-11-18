# RIDEON — P7-LEGAL-FINAL / P7-LEGAL-APPROVAL
Mise à jour : 8 novembre 2026 (Québec)  
PR : [rideon-moto/rideon-moto#1](https://github.com/rideon-moto/rideon-moto/pull/1) — `p7-02-legal-support-pages`.

**Décisions intégrées : PASS éditorial / PARTIEL opérationnel. Tests Web : PASS.**  
**PR prête pour approbation finale : NON. Prête pour revue finale des brouillons : OUI. Publication : NO-GO.**

Ce rapport unique remplace la liste de décisions à obtenir du précédent P7-LEGAL-FINAL. Les décisions du propriétaire sont acquises; seules les validations décrites ci-dessous restent ouvertes. Aucun nouvel audit global ni contrôle Android/SQL n’a été entrepris.

## Décisions du propriétaire intégrées
« PASS » signifie que la décision est intégrée dans son périmètre documentaire. « PARTIEL » distingue l’intégration achevée d’une validation juridique ou opérationnelle encore nécessaire; ce statut ne demande pas au propriétaire de reprendre sa décision.

| Nº | Décision confirmée et intégration | Statut |
|---|---|---|
| 1 | Xavier Armstrong exploite RIDEON en nom personnel, sous le nom commercial RIDEON. Formulation conservée et harmonisée dans les quatre pages FR/EN. | PASS |
| 2 | Xavier Armstrong est responsable de la protection des renseignements personnels. Identifié ainsi dans les quatre pages FR/EN. | PASS |
| 3 | Contact public unique : hello@rideon-moto.com. Adresse personnelle retirée des quatre pages, y compris les coordonnées secondaires d’Assistance et le parcours postal de suppression. La conformité juridique d’un contact public uniquement par courriel reste à valider. | PASS éditorial; validation juridique ouverte |
| 4 | Avatars et photos moto destinés à être publics : URL publiques acceptées; lecture possible par toute personne possédant le lien. Les contenus privés doivent rester protégés. Confidentialité décrit cette exigence et précise que la protection de tous les parcours privés n’est pas démontrée par cette décision. | PARTIEL opérationnel |
| 5 | Fournisseurs externes et traitements hors Québec acceptés sous réserve des protections et vérifications applicables. Confidentialité intègre l’acceptation de l’exploitant sans inventer régions, ententes ou EFVP réalisées. Cette acceptation ne vaut pas consentement des utilisateurs. | PARTIEL juridique/opérationnel |
| 6 | Conservation pendant la durée nécessaire au fonctionnement du compte, puis suppression ou anonymisation à la fermeture, avec exceptions justifiées. Principe intégré en Confidentialité et Suppression, séparé de sa mise en œuvre encore partielle. Aucun délai chiffré, effacement immédiat ou expiration de sauvegarde annoncé. | PARTIEL opérationnel |
| 7 | Le propriétaire d’un groupe doit transférer la propriété ou supprimer son groupe avant de supprimer son compte. Règle intégrée aux quatre pages selon leur rôle. Refus 409 conservé; transfert intégré et voie de résolution non présentés comme vérifiés. | PARTIEL opérationnel |
| 8 | RIDEON réservé aux 18 ans et plus, avec auto-déclaration à l’inscription. Même formulation FR/EN sur les quatre pages : politique approuvée, contrôle technique en préparation et non déployé, aucune certification d’âge ou d’identité. | PASS éditorial; contrôle opérationnel non déployé |
| 9 | Tous les comptes existants sont des comptes de test, selon le propriétaire. Leur suppression avant bêta est autorisée sur le principe uniquement. Décision consignée ici; aucune suppression effective autorisée ou effectuée dans cette intervention. | PASS documentaire |
| 10 | Aucune migration d’anciens comptes à développer uniquement pour préserver les comptes de test. Aucun chantier de migration ni exigence de conservation de ces comptes ajouté. | PASS |

Les décisions 9 et 10 relèvent de la préparation interne de la bêta : elles ne sont pas ajoutées aux pages destinées aux utilisateurs comme une action réalisée ou un traitement de leurs futurs comptes.

## Pages révisées
- `confidentialite/index.html` : identité/contact, politique 18+, images publiques et exigence de protection privée, acceptation conditionnelle des fournisseurs/hors Québec, conservation et préalable groupe.
- `conditions/index.html` : identité/contact, politique d’âge approuvée et contrôle non déployé, préalable groupe avec lien vers Suppression. Retrait de la demande devenue inutile de reconfirmer la règle d’admissibilité.
- `support/index.html` : contact unique sans adresse personnelle, âge et aide au propriétaire de groupe sans garantie de transfert manuel.
- `suppression-compte/index.html` : retrait de l’adresse et du canal postal, préalable groupe, principe de conservation et limites du flux réel.

Versions FR/EN équivalentes, avertissements de brouillon conservés. CSS, JavaScript produit, Android et Supabase inchangés.

## Seules validations encore bloquantes
Ces points reprennent les réserves existantes et ne créent pas de nouvel audit.

1. **Validation juridique finale des pages.** Confirmer que le courriel seul satisfait aux coordonnées publiques exigées dans le contexte de RIDEON; si une adresse doit être publiée, faire approuver une solution appropriée sans réafficher automatiquement l’adresse personnelle. Valider les clauses finales de modération/contenus, responsabilité et événements, loi applicable et différends. L’identité, le responsable et l’âge minimum ne sont plus des questions à trancher.
2. **Mise en œuvre de la conservation et des demandes.** Préciser les exceptions justifiées par catégorie et le traitement des contenus partagés, journaux, diagnostics, support, reçus et sauvegardes; formaliser réception, vérification proportionnée, suivi des droits/plaintes/incidents et reprise d’une suppression partielle. Confirmer une voie réalisable pour le préalable transfert/suppression de groupe. La règle produit est décidée; la disponibilité du parcours reste à établir.
3. **Fournisseurs et flux réels.** Compléter les lieux, sous-traitants, garanties/ententes et EFVP applicables déjà demandés; confirmer les paramètres réels de Firebase/Sentry du build. L’acceptation de principe des fournisseurs et du hors Québec est acquise et ne prouve pas que ces vérifications sont terminées.
4. **Concordance du produit avant bêta.** Réutiliser la qualification technique distincte du contrôle 18+; ne le décrire comme actif qu’après preuve de déploiement. Confirmer les protections des contenus privés et l’information/consentement de localisation du build visé. La date de naissance Connect exige encore une description approuvée de ses finalités, accès, minimisation et conservation. Aucun nouveau contrôle applicatif n’a été exécuté ici.

La livraison push Meet n’est pas garantie par les pages; sa qualification ne bloque pas à elle seule l’approbation éditoriale tant que cette réserve demeure exacte. Le nettoyage des comptes de test reste une opération future séparée nécessitant une autorisation d’exécution explicite; aucune migration de préservation n’est exigée.

## Tests Web ciblés — P7-LEGAL-APPROVAL
**PASS.** Seuls les quatre fichiers HTML modifiés ont été retestés, avec le script Playwright existant adapté au même périmètre.
- **24/24 PASS** : quatre pages × FR/EN × 375/768/1440 px; HTTP 200, langue visible et attribut HTML, avis de brouillon, absence de débordement horizontal/titre, ressources internes et absence d’erreur JavaScript.
- **13 URL internes distinctes : PASS**, routes et ancres; menu mobile, fermeture Échap et persistance de l’anglais après navigation.
- `node --check legal.js` : PASS; aucun changement JavaScript nécessaire.
- Recherche ciblée : aucune adresse personnelle, ancien code postal ou instruction de demande postale dans les quatre pages révisées; mailto public conservé.
- Captures générées; Confidentialité mobile FR et Suppression ordinateur EN examinées visuellement : marque noire/verte et avis conservés, aucun défaut de mise en page observé.
- Lecture GitHub après écriture : les quatre pages correspondent exactement aux fichiers testés.
- Preuves locales : `.temp/p7-legal-approval-browser-results.json`, `.temp/p7-legal-approval-links-results.json`, `.temp/p7-legal-approval-screenshots/`; script dérivé `.temp/p7-legal-approval-browser-check.cjs`, contrôle de liens existant `.temp/p7-legal-final-links.cjs`.
- Serveur de test local uniquement, ressources tierces bloquées durant Playwright. Aucun envoi de formulaire/courriel; aucune vérification de réception de la boîte, de production ou de nouvelle Preview distante.

Les tests P7-LEGAL-FINAL (24/24 et 13 URL) et P7-06J restent historiques; les résultats ci-dessus concernent cette nouvelle révision. Aucun audit déjà terminé n’a été relancé.

## Référence factuelle conservée — P7-LEGAL-FINAL, sans nouvel audit
Sources : code local de l’application consulté en lecture seule; rapports P7-03, P7-05 final, P7-07 et P7-08A à G. Les constats déployés ci-dessous reposent sur ces validations datées, pas sur une nouvelle interrogation de production. Aucun audit SQL, Flutter ou Android antérieur n’a été rejoué.

| Surface | Éléments constatés | Déployé ou candidat / limite |
|---|---|---|
| Inscription/authentification | `lib/services/auth_service.dart` : courriel/mot de passe, Supabase Auth, inscription et sessions. | Fonction existante. Le booléen 18+ et l’enregistrement d’attestation du code local sont candidats; leur présence locale ne prouve pas leur déploiement. |
| Politique 18+ | P7-08A : règle produit approuvée pour toute l’application; P7-08B : serveur observé sans attestation ni garde d’âge. | Politique cible, contrôle non déployé. Une auto-déclaration ne certifie ni âge ni identité. |
| Profils/avatars | `rider_profile_service.dart`, modèles avatar : profil, images et photos moto; `avatars` et `getPublicUrl` pour photos moto. P7-08F documente les URL publiques. | Fonction existante; toute personne possédant une URL publique peut lire l’image. La candidate 18+ ne privatise pas ces liens. Visibilité publique approuvée par le propriétaire pour les images destinées à être publiques; protection des contenus privés à valider. |
| Géolocalisation/historique | `ride_tracker.dart`, services de stockage/synchronisation/historique et P7-07 : points sur appareil, synchronisation; suivi Android actif possible en arrière-plan avec notification persistante. | Fonction existante. Les permissions, l’état du suivi et le réseau influencent le fonctionnement. Avis/consentement du binaire cible restent à confirmer; aucune surveillance d’urgence annoncée. |
| Connect/Match | `matchmaking_service.dart`, `rider_match.dart`, `match_preferences_screen.dart` : préférences, suggestions, interactions, date de naissance distincte en mode Rencontres. P7-08C confirme les signatures et corps des RPC serveur. | Fonction existante. Le sélecteur 18+ ne vérifie pas l’âge réel. Finalités exactes, accès/visibilité, minimisation et conservation de la date à faire approuver; la réconciliation des RPC ne vaut pas approbation de ces pratiques. |
| Rideon Meet | `meet_service.dart`, P7-05 : tables, accès et trigger de suppression Auth documentés. | Meets individuels anonymisés/annulés; Meets de groupe conservés sans attribution au créateur supprimé. Livraison push Meet réelle non qualifiée. |
| Groupes/conversations | Services/modèles groupes et conversations; inventaires P7-08B/E. | Surfaces existantes; visibilité selon accès. Ne pas promettre effacement de tout contenu partagé ou confidentialité de toute image publique. |
| Notifications | `push_notification_service.dart` : permission, jeton FCM, synchronisation/retrait; P7-08B liste dispatch-push. | Fonction existante; livraison non garantie. Paramètres réels du build et flux Meet restent à confirmer. |
| Suppression | P7-05 final et P7-08B : delete-account v16, session vérifiée; refus 409 si propriétaire de groupe; erreur après traitement partiel possible. | Déploiement historiquement confirmé. Aucun compte supprimé ici; aucune garantie de délai, de reprise automatique ou d’expiration des sauvegardes. |
| Fournisseurs | Code et P7-07 : Supabase, Firebase Cloud Messaging, OpenFreeMap, Nominatim, OSRM, Open-Meteo; HTML/CSS du site : Google Fonts et FormSubmit. Sentry conditionnel à la DSN de build. | Liste de composants observés, pas preuve de configuration de chaque binaire. Région de base Canada Central rapportée; autres services, journaux, sauvegardes, sous-traitants et transferts à confirmer. |

### Ce que P7-08A à G ne permet pas d’annoncer comme livré
- A : formulaire et garde locale, stockage d’attestation et migration candidats seulement.
- B : 6/6 tests Flutter historiques réussis; serveur sans contrôle 18+ lors de l’inventaire. Un ancien client reste une limite.
- C : réconciliation des RPC serveur; aucun déploiement.
- D : 110 assertions historiques sur clone réduit; rôle réel et intégration complète non qualifiés.
- E : contrôles Auth/PostgREST locaux ciblés; migration complète, Storage et totalité des 74 signatures non qualifiés.
- F : corrections locales supplémentaires sur delete_group/remove_group_member; deux assertions nouvelles non exécutées; URL publiques non privatisées.
- G : précontrôle BLOCKED, aucun test ni déploiement. Empreinte candidate `60E9580EDFB99FC9DA2BBAE81A9CF1B548C3728169E198D1252A977252395AC3` non qualifiée par les résultats des versions précédentes.


## Références juridiques antérieures conservées
[Loi sur le privé](https://www.legisquebec.gouv.qc.ca/fr/pdf/lc/P-39.1.pdf) et [CAI — recours et plaintes](https://www.cai.gouv.qc.ca/protection-renseignements-personnels/citoyens-protection-renseignements-personnels/recours-devant-commission), vérifiées lors de P7-LEGAL-FINAL. Aucune nouvelle analyse juridique globale effectuée. Le délai légal d’accès/rectification décrit dans les pages n’est pas un délai général de soutien ou de suppression. Ce rapport ne constitue pas un avis juridique.

## Décision finale et traçabilité
**Décisions intégrées : PASS éditorial, PARTIEL opérationnel. Tests Web : PASS. PR non prête pour approbation finale inconditionnelle; prête pour revue juridique finale des brouillons. NO-GO publication** jusqu’à résolution des validations regroupées ci-dessus.

Révision depuis `7c1e558a0de421d4ee237fc8b259808f50f6277c`. Commits des pages : `976e7948` (Confidentialité), `f9b1912e` (Conditions), `7f1ed748` (Assistance), `a77640ba` (Suppression). Rapport existant mis à jour, aucun second rapport créé.

Aucune fusion, publication, modification Android/Supabase, suppression de comptes ou de données, migration ni déploiement de production. Aucun consentement de principe à une suppression n’a été traité comme une autorisation de l’exécuter.
