import jwksClient from "jwks-rsa";
import jwt from "jsonwebtoken";

//Esta función valida el token con el JWKS que es el formato para auntenticar o verificar JWT
export const validateTokenWithJwks = (token, jwksUri) => {
  const client = jwksClient({ jwksUri });

  // Esta función obtiene la clave pública para validar el token
  const getKey = (header, callback) => {
    client.getSigningKey(header.kid, function (err, key) {
      const signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  };

  return new Promise((resolve, reject) => {
    jwt.verify(token, getKey, function (err, decoded) {
      if (err) {
        console.error(err);
        reject(err);
      }

      resolve(decoded);
    });
  });
};
