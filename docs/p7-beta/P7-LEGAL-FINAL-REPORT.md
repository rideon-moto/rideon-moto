# RIDEON — P7-LEGAL-FINAL
Date : 8 novembre 2026 (Québec)  
**Livraison éditoriale : terminée pour revue. Publication : NO-GO.**  
PR : [rideon-moto/rideon-moto#1](https://github.com/rideon-moto/rideon-moto/pull/1) — branche `p7-02-legal-support-pages`.

## Portée et résultat
Les quatre pages ont été révisées en français québécois et en anglais équivalent :
- `confidentialite/index.html` : compte, localisation, Connect/Match, visibilité des images publiques, fournisseurs constatés, limites de conservation et de suppression.
- `conditions/index.html` : politique cible 18+, limites des suggestions Connect/Match, conduite et événements; aucun engagement de disponibilité ni clause de responsabilité inventée.
- `support/index.html` : contact, minimisation des renseignements, absence de délai garanti; liens directs vers confidentialité et suppression.
- `suppression-compte/index.html` : étapes, refus propriétaire de groupe, traitement partiel possible, données partagées et sauvegardes; aucune promesse d’effacement immédiat.

Avis « Version de travail — validation requise / Working draft — review required » conservés. Les anciennes cibles de conservation 30/90 jours, 24 mois et 90 jours de sauvegardes ont été retirées des pages : elles ne prouvaient aucune pratique appliquée. Les détails de restauration et de copies Storage, destinés aux audits techniques, restent dans les rapports antérieurs plutôt que dans le parcours utilisateur.

L’identité et les coordonnées déjà présentes sont conservées sur la base de la confirmation du propriétaire consignée en P7-07; aucune nouvelle vérification de registre, de mandat ou de boîte courriel n’a été faite.

## Vérification factuelle ciblée
Sources : code local de l’application consulté en lecture seule; rapports P7-03, P7-05 final, P7-07 et P7-08A à G. Les constats déployés ci-dessous reposent sur ces validations datées, pas sur une nouvelle interrogation de production. Aucun audit SQL, Flutter ou Android antérieur n’a été rejoué.

| Surface | Éléments constatés | Déployé ou candidat / limite |
|---|---|---|
| Inscription/authentification | `lib/services/auth_service.dart` : courriel/mot de passe, Supabase Auth, inscription et sessions. | Fonction existante. Le booléen 18+ et l’enregistrement d’attestation du code local sont candidats; leur présence locale ne prouve pas leur déploiement. |
| Politique 18+ | P7-08A : règle produit approuvée pour toute l’application; P7-08B : serveur observé sans attestation ni garde d’âge. | Politique cible, contrôle non déployé. Une auto-déclaration ne certifie ni âge ni identité. |
| Profils/avatars | `rider_profile_service.dart`, modèles avatar : profil, images et photos moto; `avatars` et `getPublicUrl` pour photos moto. P7-08F documente les URL publiques. | Fonction existante; toute personne possédant une URL publique peut lire l’image. La candidate 18+ ne privatise pas ces liens. Faire approuver cette visibilité. |
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

## Décisions humaines et formulations proposées
Les formulations suivantes sont des propositions FR/EN à compléter ou confirmer; les crochets ne sont pas des faits et ne doivent pas être publiés tels quels.

| Décision / information à obtenir du propriétaire | Formulation proposée FR / EN |
|---|---|
| Identité légale et statut | FR : « RIDEON est exploité par Xavier Armstrong, en nom personnel sous le nom commercial RIDEON. » EN: “RIDEON is operated by Xavier Armstrong, an individual operating under the trade name RIDEON.” Confirmer que cette identité déjà consignée reste exacte. |
| Coordonnées officielles et responsable | FR : « Le responsable de la protection des renseignements personnels est [nom/fonction], joignable à [coordonnées approuvées]. » EN: “The person responsible for personal information protection is [name/role], reachable at [approved contact details].” Reconfirmer l’adresse postale déjà affichée, hello@ et leur suivi effectif. |
| Conservation/suppression | FR : « Les renseignements de [catégorie] sont conservés [durée ou critère vérifié], puis [suppression/anonymisation validée], sauf [exception justifiée]. » EN: “[Category] information is retained for [verified period or criterion], then [validated deletion/anonymization], except for [justified exception].” Fournir règles, responsables, tâches effectives, reçus, logs, sauvegardes et procédure de reprise; résoudre le cas propriétaire de groupe. |
| Fournisseurs/lieux | FR : « [Fournisseur] traite [données] pour [finalité] dans [lieux confirmés]. » EN: “[Provider] processes [data] for [purpose] in [confirmed locations].” Fournir contrats, sous-traitants, régions et configuration Firebase/Sentry du build; approuver la visibilité publique des images. |
| Hors Québec/EFVP | FR : « [Données] sont traitées hors Québec dans [lieux confirmés], selon [mesures et ententes validées]. » EN: “[Data] is processed outside Quebec in [confirmed locations], subject to [validated safeguards and agreements].” Faire déterminer les EFVP applicables et fournir leurs conclusions/ententes; ne pas déduire tous les lieux de la région de la base. |
| Droits/plaintes | FR : « Adressez vos demandes écrites à [contact]; [procédure approuvée] encadre leur réception, la vérification proportionnée et le suivi. » EN: “Send written requests to [contact]; [approved procedure] governs receipt, proportionate verification and follow-up.” Confirmer réception, registre, décisions, recours, incidents et capacité de répondre. |
| 18+/comptes non admissibles | FR : « La politique cible prévoit un accès réservé aux 18 ans ou plus. Le contrôle en préparation repose sur une auto-déclaration et n’est pas déployé. » EN: “The target policy restricts access to people aged 18 or older. The control in preparation relies on self-declaration and is not deployed.” Approuver niveau d’assurance, traitement des comptes existants/non admissibles et voie de suppression; modifier l’état de déploiement seulement sur preuve. |

Faire aussi approuver les clauses finales de contenu/modération, responsabilité, frais éventuels, événements et différends; aucune clause manquante n’a été inventée. L’approbation éditoriale ne remplace pas cette décision juridique.

## Tests Web nouveaux
Raison du rejeu ciblé : nouveaux textes, nouvelles longueurs et liens. Script Playwright P7-06J existant réutilisé en limitant les routes aux quatre pages demandées, sans relancer l’audit de l’accueil.

- **24/24 PASS** : quatre pages × FR/EN × 375/768/1440 px; HTTP 200, choix/attribut de langue, avis de brouillon visibles, absence de débordement horizontal/titre, aucune erreur JavaScript et ressources internes disponibles.
- **13 URL internes distinctes : PASS**, routes et ancres (y compris accueil/contact), menu mobile, fermeture Échap et persistance EN après navigation entre pages.
- Syntaxe `legal.js` : PASS (`node --check`).
- Captures confidentialité mobile FR, tablette EN et suppression ordinateur EN créées; mobile FR et ordinateur EN examinés visuellement : marque noire/verte, hiérarchie et avis conservés, aucune coupure observée.
- Ancien lien de plainte CAI non vérifiable par l’outil : remplacé par la page officielle accessible de recours/plaintes. Aucun formulaire ni message envoyé.
- Tests servis uniquement sur `127.0.0.1:8793`. Ressources tierces bloquées durant Playwright; pas de test d’envoi FormSubmit, de réception courriel, de disponibilité future des tiers ni de production. Aucune nouvelle Preview distante créée; P7-06J demeure une preuve historique, pas une preuve du contenu final.
- Première tentative du script historique sur accueil hors périmètre arrêtée (attente d’image); campagne finale limitée aux quatre pages. Contrôle supplémentaire de langue corrigé pour attendre la fin de navigation; aucune modification du JS produit nécessaire.
- Preuves locales : `.temp/p7-legal-final-browser-results.json`, `.temp/p7-legal-final-links-results.json`, `.temp/p7-legal-final-screenshots/`. Scripts : `.temp/p7-legal-final-browser-check.cjs` et `.temp/p7-legal-final-links.cjs`, dérivés du script existant `.temp/p7-06j-browser-check.cjs`.

## Références de droit vérifiées
Consultées le 8 novembre 2026 : [Loi sur le privé, version officielle](https://www.legisquebec.gouv.qc.ca/fr/pdf/lc/P-39.1.pdf), notamment gouvernance, transparence, transferts, conservation et demandes; [CAI — recours et plaintes](https://www.cai.gouv.qc.ca/protection-renseignements-personnels/citoyens-protection-renseignements-personnels/recours-devant-commission). Le délai légal d’accès/rectification déjà décrit ne doit pas être présenté comme délai général de soutien ou de suppression. Cette consolidation est un dossier de validation, pas un avis juridique.

## Décision et traçabilité
**GO pour soumettre les quatre brouillons à l’approbation humaine. NO-GO publication.** Il manque les confirmations du tableau, les procédures opérationnelles (dont groupe/suppression), la validation juridique et la qualification/décision distincte du contrôle 18+ avant de le décrire comme actif.

Révision depuis le head `1e7afb672e166a4edf49cfcd82e78bbf8e7fa6e0`. Commits des pages : `765bb1c4`, `741c6133`, `469f5c33`, `2047b0a1`, puis correction du lien CAI `7b0a1624`. Lecture après écriture requise pour confirmer que les quatre fichiers distants correspondent aux fichiers testés.

Aucune fusion, publication de production, migration/déploiement Supabase, modification Android, installation APK ni suppression de données. Les changements distants se limitent à la branche de PR et à sa description.
