import { Page } from "@playwright/test";

export class BuscarHipopotamos {
  constructor(private page: Page) {}

  // Selectors
  buscadorInput = () => this.page.locator("xpath=//textarea[@name='q']");

  // Actions
  async gotoGoogle() {
    // ir a google
    await this.page.goto("https://www.google.com");
  }

  async buscarHipopotamos() {
    // Escribir "hipopotamos" en la barra de búsqueda y presionar Enter
    await this.buscadorInput().fill("hipopotamos", { timeout: 5000 });
    await this.page.keyboard.press("Enter");

    // Esperar a que aparezcan los resultados
    await this.page.waitForSelector("h3");
  }

  async obtenerPrimerLink() {
    // Obtener primer resultado
    const primerResultado = await this.page.locator("h3").first();

    // Extraer el link del primer resultado
    const link = await primerResultado.evaluate((el) => {
      const anchor = el.closest("a");
      return anchor ? anchor.href : null;
    });

    // Mostrar primer link
    console.log("🔗 Primer enlace:", link);
  }
}
