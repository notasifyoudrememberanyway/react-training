export const ProjectCard = ({ title, image, appUrl, gitHubUrl }) => {
  return (
    <div className="card project-card">
      <img
        src={image.src}
        className="card-img-top project-card-image"
        alt={image.alt}
      />
      <div className="card-body text-center">
        <h3 className="card-title fs-4">{title}</h3>
        <div className="card-links-container">
          <a href={appUrl} className="card-links-icon">
            <i className="fa-solid fa-globe"></i>
          </a>
          <a href={gitHubUrl} className="card-links-icon">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
