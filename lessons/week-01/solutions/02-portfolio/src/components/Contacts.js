export const Contacts = () => {
  return (
    <div className="contact-links-container">
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className="contact-icon"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="https://mail.google.com/mail/"
        target="_blank"
        rel="noreferrer"
        className="contact-icon"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
        className="contact-icon"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href="tel:+447777666555" className="contact-icon">
        <i className="fa-solid fa-phone"></i>
      </a>
    </div>
  );
};
