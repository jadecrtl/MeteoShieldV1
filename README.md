# projet_meteo_AJ

## Application mobile météo orientée évênements "extrêmes"

### Description de l'application

L'application MeteoShieldV1 vous informe sur les événements météorologiques extrêmes, en particulier les alertes liées à :

- Tempête : Vent violent.
- Température : Dépassement des niveaux attendus (canicule ou froid extrême).
- Précipitations : Risque d'inondation ou de tornade.
- Sécheresse : Absence prolongée de précipitations.
- Tsunami : Alerte aux tsunamis.

## Prérequis pour utiliser l'application
Avant de pouvoir utiliser l'application, assurez-vous que les outils suivants sont installés :

- Node.js (avec npm) : https://nodejs.org/
- Yarn : https://yarnpkg.com/

## Instructions d'installation
Vérifier les versions installées : Assurez-vous d'avoir les versions de Node.js, npm, et yarn installées. Utilisez les commandes suivantes :

node -v
npm -v
yarn -v

## Supprimer expo-cli globalement (si déjà installé) :
Si vous avez installé globalement expo-cli dans le passé, désinstallez-le pour éviter des conflits avec la nouvelle version locale d'Expo :

npm uninstall -g expo-cli

## Installer eas-cli globalement :
Installez Expo Application Services (EAS) CLI pour gérer les mises à jour et les builds :

npm install -g eas-cli

## Initialiser EAS dans le projet :
Une fois dans le répertoire du projet MeteoShieldV1, initialisez EAS :

eas init

Lors de cette étape, il vous sera demandé de fournir un email ou un nom d'utilisateur pour lier votre projet à votre compte Expo. Si c'est la première fois, suivez les instructions à l'écran pour créer un projet sur Expo.

## Effectuer une mise à jour EAS :

Lorsque vous êtes prêt à publier une mise à jour de l'application, utilisez :

eas update

## Choisir la branche et le message de mise à jour :
Vous serez invité à choisir une branche et à fournir un message pour cette mise à jour. Voici un exemple de workflow :

- Choix de la branche : Sélectionnez la branche où vous souhaitez publier la mise à jour (par exemple, master).
- Message de mise à jour : Fournissez un message descriptif, par exemple, "Correction des alertes météo".

## Utiliser react-navigation 
- npm install @react-navigation/native
- npm install @react-navigation/stack
- npm install react-native-gesture-handler

## Visualiser les icones de react native 
- npm install react-native-vector-icons
OU
- yarn add react-native-vector-icons
