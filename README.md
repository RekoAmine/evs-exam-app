# 🚗📚 Application de Gestion des Examens de Permis - Angular & Node.js

Bienvenue dans ce projet Angular permettant la gestion des examens de permis pour les enseignants. 🎓🚦
Ce projet s'inscrit dans le cadre d'un **test technique de chez En Voiture Simone** ([GitHub](https://github.com/en-voiture-simone/technical-test-front-evs?tab=readme-ov-file)).
Il consomme une API Node.js mockée et est conteneurisé avec Docker. 🐳

## 🚀 Fonctionnalités

✅ **Affichage de la liste des examens**

✅ **Ajout d'un nouvel examen via un formulaire**

✅ **Interaction avec une API mockée** `/api/exams`

✅ **Architecture modulaire et scalable**

✅ **Projet entièrement conteneurisé avec Docker**

## 🏗️ Architecture globale du projet

📂 **backend/** 

➡ Contient le serveur mocké Node.js qui gère les requêtes API et simule un backend RESTful.

📂 **frontend/**

➡ Application Angular assurant la gestion et l'affichage des examens.

## 🏗️ Architecture du frontend (Angular)

📂 **src/app/core/**

➡ Contient de potentiels futurs services globaux, interceptors et guards, ainsi que d'autres outils partagés pour améliorer la gestion des fonctionnalités centrales de l'application.

📂 **src/app/features/**

➡ Englobe les différents modules métiers, incluant `exam`, qui gère les examens et leurs composants spécifiques.

📂 **src/app/shared/**

➡ Regroupe les composants et utilitaires réutilisables, notamment dans `components/` où se trouvent des éléments comme la liste dynamique et le badge. Ce dossier pourra être enrichi avec une liste et un badge réutilisables, ainsi que des **pipes**, **validators** et autres utilitaires partagés.

## 🎨 Choix technologiques pour l'UI/UX

J'ai opté pour **TailwindCSS** plutôt que **NG Prime**, **Material UI** ou **Bootstrap** afin d'avoir plus de liberté et de mieux coller au **mockup du test technique**. Ce choix permet une **meilleure personnalisation**, plus de **flexibilité** et évite les fichiers SCSS dédiés à la personnalisation.

## 🐳 Lancer le projet avec Docker

1️⃣ Assurez-vous d'avoir **Docker** installé sur votre machine.
2️⃣ Clonez le projet :

```bash
git clone https://github.com/RekoAmine/evs-exam-app.git
```

3️⃣ Démarrez les services avec **Docker Compose** :

```bash
docker-compose up
```

4️⃣ Accédez à l'application sur **[http://localhost](http://localhost)** 🌍

## 🧪 Tests & Qualité du Code

🛠️ **Tests unitaires**

Le projet contient un test unitaire pour montrer comment garantir la qualité du code et assurer la fiabilité de ses fonctionnalités.

**Exemple :** Test `ExamListPage` pour valider la récupération des examens et vérifier leur affichage correct.

## 🔥 Optimisations envisagées

✅ **Augmenter la couverture des tests unitaires pour l'ensemble de l'application**

✅ **Ajouter des tests E2E avec Cypress pour valider le bon fonctionnement global de l'application**

✅ **Gestion de la longueur de liste avec pagination, ou affichage au scroll pour améliorer l'expérience utilisateur**

✅ **Rendre le composant List réutilisable et le déplacer dans `/shared/components/` pour une utilisation ultérieure**

✅ **Le composant Badge pourrait etre modifié pour pouvoir le réutiliser à l’échelle de l’application, et non seulement au niveau de la feature Exam.**

✅ **Ajouter un spinner ou un skeleton loader pour gérer la potentielle latence de récupération des données depuis le backend**

✅ **Ajouter des fichiers de messages pour l'internationalisation et éviter d'écrire du texte en dur dans les templates**

✅ **Créer un validator personnalisé pour le champ `date` du formulaire afin de s'assurer de la cohérence et de la validité des dates**

## 👨‍💻 Auteur

💻 Développé par **Amine ELMOSSOUESS**

📧 Contact : amine.elmossouess@gmail.com

---

⚠️ **Remarque :** Ce projet a été réalisé dans le cadre d'un **test technique**. Toutes les améliorations et optimisations mentionnées sont proposées pour enrichir et professionnaliser davantage l'application. 🚀
