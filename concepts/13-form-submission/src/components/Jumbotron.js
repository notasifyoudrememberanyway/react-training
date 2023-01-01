export const Jumbotron = ({ title, subTitle }) => (
  <div className="jumbotron">
    <div className="title">{title}</div>
    {subTitle && <div className="sub-title">{subTitle}</div>}
  </div>
);
