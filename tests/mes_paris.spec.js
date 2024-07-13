import { expect, test } from '@playwright/test'

test("PMU", async ({ page }) => {
    // Importation du module chromium de Playwright
    const { chromium } = require('playwright');

    (async () => {
        // Lancement d'un navigateur Chromium en mode non-headless (visuel)
        const browser = await chromium.launch({
            headless: false
        });
        // Création d'un nouveau contexte de navigateur
        const context = await browser.newContext();
        // Navigation vers la page PMU Turf
        await page.goto('https://www.pmu.fr/turf/');
        // Fermeture du bouton de fermeture d'un élément (si présent)
        await page.locator('#KameleoonElement-closeBtn').click();
        // Clique sur le bouton pour continuer sans accepter les cookies
        await page.getByLabel('Continuer sans accepter').click();
        // Fermeture d'une autre pop-up ou élément croisé (si présent)
        await page.locator('#KameleoonGenerositeCrossBtn').getByRole('img').click();
        // Clique sur le bouton "Mes paris"
        await page.getByRole('button', { name: 'Mes paris' }).click();
        // Vérification que le texte "Mes derniers paris" est présent sur la page
        await expect(page).toContainText('Mes derniers paris');

        // Fermeture du contexte de navigation
        await context.close();
        // Fermeture du navigateur
        await browser.close();
    });
}) 