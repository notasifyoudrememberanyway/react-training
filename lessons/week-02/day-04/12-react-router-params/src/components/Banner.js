import { Link } from "react-router-dom";

export const Banner = ({ title, link, info }) => {
  return (
    <section className="banner">
      <div className="title">{title}</div>
      {link && <Link to={link}>Go</Link>}
      {info && (
        <div className="alert alert-primary" role="alert">
          {info}
        </div>
      )}
    </section>
  );
};
