import { useState, useEffect } from "react";
import { getOrGenerateLocalNonce } from "../utils/getOrGenerateLocalNonce";

// Hook para obtener el nonce local
export const useLocalNonce = () => {
  const [nonce, setNonce] = useState(null);

  useEffect(() => {
    setNonce(getOrGenerateLocalNonce());
  }, []);

  return nonce;
};
