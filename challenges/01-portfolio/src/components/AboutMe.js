import imageUrl from "../images/profile-image.jpg";
import { Contacts } from "./Contacts";

export const AboutMe = () => {
  return (
    <div className="about-me" id="about-me">
      <div className="container py-5">
        <div className="about-me-container">
          <div className="about-me-image">
            <img src={imageUrl} className="profile-image" />
          </div>
          <div className="about-me-info">
            <h1 className="text-center">Alice Smith</h1>
            <h2 className="fs-4 text-center text-muted">
              Junior Software Engineer
            </h2>
            <hr />
            <div className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              illum beatae corrupti reprehenderit quibusdam, magnam pariatur
              suscipit deserunt sapiente magni. Praesentium, maxime nam. Et
              fugiat vitae dignissimos quia incidunt magnam.
            </div>
            <div className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              illum beatae corrupti reprehenderit quibusdam, magnam pariatur
              suscipit deserunt sapiente magni. Praesentium, maxime nam. Et
              fugiat vitae dignissimos quia incidunt magnam.
            </div>
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
};
