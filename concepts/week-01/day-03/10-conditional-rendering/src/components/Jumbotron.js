/**
 * title: required
 * subTitle: optional
 */
export const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
      <div className="title">{props.title}</div>
      {props.subTitle ? (
        <div className="sub-title">{props.subTitle}</div>
      ) : null}
      {/* {props.subTitle && <div className="sub-title">{props.subTitle}</div>} */}
    </div>
  );
};
