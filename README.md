# Technical_Test_PMU
## **Introduction**

Ce projet est conçu pour automatiser le test du bouton "Mes paris" en haut de la page **https://www.pmu.fr/turf/** en utilisant Playwright, une bibliothèque Node.js qui fournit une API de haut niveau pour contrôler les navigateurs, permettant des tests de bout en bout des applications web. Ce README vous guidera dans la mise en place du projet, l'exécution des tests et la compréhension de la structure du projet. 

## **Prerequisites**

* Node.js v18.4.0
+ npm (Node Package Manager)

## **Installation**

1. Clone the repository:

```
git clone https://github.com/Careine/Technical_Test_PMU.git
cd <repository_directory>
```


2. Install dependencies:

```
npm install
```

## **Project Structure**

```
├── test-results
│   └── .last-run.json        # Last run result test file
├── tests
│   └── mes_paris.spec.js     # Example test file
├── playwright.config.js      # Playwright configuration file
├── package.json              # Project metadata and scripts
└── README.md                 # Project documentation
```

## Exécution des tests

Vous pouvez exécuter tous les tests ou des tests spécifiques à l'aide du programme d'exécution des tests Playwright.
### Exécution 
 ```
npx playwright test
```
### Exécution en mode UI

```
npx playwright test --ui
```

