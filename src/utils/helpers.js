export const getDate = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return fullYear;
};

export const goToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

export const LinkOpener = ({
  href,
  content,
  target = "_blank",
  rel = "noopener noreferrer"
}) => {
  if (!href) return null; 

  return (
    <a href={href} target={target} rel={rel}>
      {content ?? href}
    </a>
  );
};