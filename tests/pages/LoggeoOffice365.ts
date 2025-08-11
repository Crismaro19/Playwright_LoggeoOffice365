import { Page } from "@playwright/test";
import { generateTOTP } from "../helpers/ totp";

import dotenv from "dotenv";

dotenv.config();

export class LoggeoOffice365 {
  constructor(private page: Page) {}

  // Selectors
  usuarioInput = () => this.page.locator('input[type="email"]');
  claveInput = () => this.page.locator('input[type="password"]');
  submitBtn = () => this.page.locator('input[type="submit"]');

  ingresarDiferenteBtn = () => this.page.locator("#signInAnotherWay");
  verificationCodeBtn = () => this.page.getByText("Use a verification code");
  otcCodeInput = () => this.page.locator('input[name="otc"]');
  sesionActivaSiBtn = () => this.page.locator("#idSIButton9");

  // Actions
  async usuarioClave() {
    const emailUser = process.env.EMAIL_USER;
    if (!emailUser) {
      throw new Error("EMAIL_USER environment variable is not defined");
    }
    const emailPass = process.env.EMAIL_PASS;
    if (!emailPass) {
      throw new Error("EMAIL_PASS environment variable is not defined");
    }
    await this.usuarioInput().fill(emailUser);
    await this.submitBtn().click();
    await this.claveInput().fill(emailPass);
    await this.submitBtn().click();
  }

  async verificacion() {
    try {
      await this.ingresarDiferenteBtn().click({ timeout: 5000 });
    } catch {
      console.log("No se mostro la ruta normal de otra forma de authentificar");
    } finally {
      await this.verificationCodeBtn().click();
    }
    // Esperar a que aparezca el campo para el código MFA
    await this.otcCodeInput().waitFor({ state: "visible" });
    // Generar el código MFA
    const token = generateTOTP();
    // Ingresar el código MFA
    await this.otcCodeInput().fill(token);
    await this.submitBtn().click();

    // Aceptar sesion activa
    await this.sesionActivaSiBtn().click();
  }
}
