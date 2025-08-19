# GitHub Pages Admin Dashboard

This project is a Single Page Application (SPA) built with Vue.js 3 to manage the administrative endpoints of an API.

## Features

-   **Authentication**: Secure login for administrators.
-   **Admin Panels**: UI for managing various aspects of the API.
-   **Deployment**: Automated deployment to GitHub Pages using GitHub Actions.

## Project Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd github-pages-admin-dashboard
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

## Deployment

The application is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment workflow is defined in `.github/workflows/deploy.yml`.

### Configurar secrets para producción

1. En el repositorio de GitHub, ve a Settings → Secrets and variables → Actions → New repository secret.
2. Añade:
   - `PROD_API_URL` → URL base del API en producción (ej. `https://api.midominio.com`).
   - `PROD_CNAME` → (opcional) dominio personalizado si quieres usar CNAME (ej. `admin.midominio.com`). Si no lo usas, deja vacío.
3. El workflow inyectará `VITE_API_BASE_URL` durante el build y, si `PROD_CNAME` está definido, añadirá el archivo `CNAME` en `dist/`.

Luego haz push a `main` y la acción construirá y publicará el sitio en `gh-pages`.
