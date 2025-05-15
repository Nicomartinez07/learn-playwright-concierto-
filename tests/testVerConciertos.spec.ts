import { test, expect } from "@playwright/test";

test("Ver nombre de concierto", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Conciertos", exact: true }).click();
  await page.getByRole("heading", { name: "Rock en Vivo" }).click();
});
