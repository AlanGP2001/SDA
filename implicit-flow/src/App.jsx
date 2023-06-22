import { useState, useEffect } from "react";

import { ConnectButton } from "./components/ConnectButton";
import { MainContainer } from "./components/MainContainer";
import { Card } from "./components/Card";

import { useAuthUrl } from "./hooks/useAuthUrl";
import { useNonceRemoval } from "./hooks/useNonceRemoval";

import { getHashParams } from "./utils/getHashParams";
import { cleanUrlHash } from "./utils/cleanUrlHash";

function App() {
  const [tokens, setTokens] = useState(null);
  const authUrl = useAuthUrl();

  useEffect(() => {
    const queryAccessToken = getHashParams("access_token");
    const queryIdToken = getHashParams("id_token");

    const queryState = getHashParams("state");
    const sessionState = sessionStorage.getItem("state");

    const queryNonce = getHashParams("nonce");
    const sessionNonce = sessionStorage.getItem("nonce");

    // Vaidar el estado 
    if (queryIdToken && queryAccessToken && queryState !== sessionState) {
      console.error(new Error("ERROR_STATE_MISMATCH"));
      cleanUrlHash();
      return setTokens(null);
    }

    // Validar el nonce (seasegura que el token venga de la misma sesion y sea único)
    if (queryIdToken && queryAccessToken && queryNonce !== sessionNonce) {
      console.error(new Error("ERROR_NONCE_MISMATCH"));
      cleanUrlHash();
      return setTokens(null);
    }

    if (queryAccessToken && queryIdToken) {
      cleanUrlHash();
      setTokens({ accessToken: queryAccessToken, idToken: queryIdToken });
    }
  }, []);

  // Elimina el nonce de la sesion
  useNonceRemoval(tokens);

  return tokens ? (
    <MainContainer>
      <Card idToken={tokens.idToken} accessToken={tokens.accessToken} />
    </MainContainer>
  ) : (
    <MainContainer>
      <ConnectButton href={authUrl}>Iniciar sesiín con Auth0</ConnectButton>
    </MainContainer>
  );
}

export default App;
