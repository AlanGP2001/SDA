// Función que se encarga de eliminar el fragmento de URL después del símbolo (#). 
export const cleanUrlHash = () => {
  history.replaceState({}, document.title, window.location.href.split('#')[0]);
}