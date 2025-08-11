# Playwright

Este proyecto es una aplicación de pruebas automatizadas utilizando [Playwright](https://playwright.dev/) para el loggeo de office 365.

---

## 📁 Estructura del Proyecto

```
apps/
└── playwright/
    ├── tests/
    │   └── ejemplo.spec.ts # Archivo de prueba principal
    ├── playwright.config.ts # Configuración de Playwright
    ├── test-results/ # Resultados de pruebas (generados)
    └── playwright-report/ # Reporte HTML (generado)
```

---

## 🚀 Requisitos

- Node.js v18 o superior
- [Playwright CLI](https://playwright.dev/docs/cli)
- Nodemailer
- Otpauth

Instalación de dependencias:

```bash
npm install
```

---

## ⚙️ variables de entorno .env

Este es un ejemplo de las variables de entorno que requiere el proyecto

```bash
# Correo que origina el mail de error
EMAIL_USER=example@algo.com

# Clave del correo que origina el mail de error
EMAIL_PASS=*************

# Correos destinatarios del mail de error
EMAIL_TO=example1@algo.com,example2@algo.com,example3@algo.com,

# TOTP que origina la OTP de segundo factor de authentificacion para microsoft
TOTP_SECRET=*************
```

---

## 🧪 Ejecutar pruebas

Ejecutar prueba ejemplo:

```bash
npx playwright test tests/ejemplo.spec.ts --headed
```

- --headed: opcional, abre el navegador visualmente.
- --config: especifica la ruta de configuración personalizada.

---

## 📊 Reportes

Después de ejecutar las pruebas, se genera un reporte HTML en:

```bash
playwright-report/
```

Para abrir el reporte:

```bash
npx playwright show-report
```
