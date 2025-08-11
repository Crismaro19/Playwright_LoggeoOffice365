import { test, expect } from "@playwright/test";
import { BuscarHipopotamos } from "./pages/BuscarHipopotamos";
import { sendEmail } from "../send_email/sendEmail";

test.afterEach(async ({ page }, testInfo) => {
  if (
    testInfo.status !== testInfo.expectedStatus &&
    testInfo.retry === testInfo.project.retries
  ) {
    console.log(`❌ La validacion: ${testInfo.title} - Fallo`);
    await sendEmail(testInfo.title);
  }
});

test("Prueba ejemplo validar titulo", async ({ page }) => {
  await page.goto("https://www.google.com/");
  const titulo = await page.title();
  await page.waitForTimeout(3000);
  expect(titulo).toBe("Google");
});

test.skip("Prueba ejemplo caso negativo envio de correo", async ({ page }) => {
  await page.goto("https://www.google.com/");
  const titulo = await page.title();
  console.log(titulo);
  expect(titulo).toBe("Googlo");
});

test.skip("Prueba con uso de clases", async ({ page }) => {
  const buscarHipopotamos = new BuscarHipopotamos(page);
  await buscarHipopotamos.gotoGoogle();
  await buscarHipopotamos.buscarHipopotamos();
  await buscarHipopotamos.obtenerPrimerLink();
});
