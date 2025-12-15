export const getDate = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return fullYear;
};

export const goToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
