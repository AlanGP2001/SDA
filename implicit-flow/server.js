// Inicializar variables de entorno
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import express from "express";
import ViteExpress from "vite-express";

import { validateTokenWithJwks } from "./src/utils/validateTokenJwks.js";

// Inicializar Express
const app = express();

// Parsea el cuerpo de las peticiones
app.use(express.urlencoded());

// Declara el puerto
const PORT = process.env.PORT;
// Declarar URI de JWKS
const JWKS_URI = `https://${process.env.VITE_AUTH0_DOMAIN}/.well-known/jwks.json`;

// Manejar la ruta de callback (redireccionamiento)
app.post("/callback", async (req, res) => {
  const { access_token, id_token, state } = req.body;

  // Validar el token y recuperar parametros
  const { nonce } = await validateTokenWithJwks(id_token, JWKS_URI);

  const parameters = {
    access_token,
    id_token,
    state,
    nonce
  };

  const query = new URLSearchParams(parameters);
  // Redirigir a la ruta de callback
  res.writeHead(302, { Location: `/callback#${query}` });
  res.end();
});

// Iniciar el servidor
ViteExpress.listen(app, PORT, () =>
  console.info(`🌐 Listening on http://localhost:${PORT}`)
);
