import { useEffect } from "react";

// Hook para remover el nonce de sessionStorage
export const useNonceRemoval = (tokens) => {
  useEffect(() => {
    if (tokens) {
      sessionStorage.removeItem("nonce");
    }
  }, [tokens]);
};
