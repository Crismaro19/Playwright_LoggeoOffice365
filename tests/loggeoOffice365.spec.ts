import { test } from "@playwright/test";
import { LoggeoOffice365 } from "./pages/LoggeoOffice365";

test("Login con MFA en Microsoft 365", async ({ page }) => {
  // Ir a la página de login
  await page.goto("https://login.microsoftonline.com/");

  const loggeoOffice365 = new LoggeoOffice365(page);

  await loggeoOffice365.usuarioClave();
  await loggeoOffice365.verificacion();

  console.log("✅ Autenticación completada");

  await page.waitForTimeout(3000);
});
