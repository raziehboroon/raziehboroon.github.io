const LinkOpener = ({
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

export default LinkOpener;