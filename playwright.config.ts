import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 150000,
  retries: 1,
  reporter: [["html", { open: "never" }]],
  use: {
    ignoreHTTPSErrors: true,
    browserName: "chromium",
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    // baseURL: "https://miapp.com",
  },
});
