// function that creates the elements for a Jumbotron using jQuery
const renderJumbotron = () => {
  const titleDiv = $("<div/>").addClass("title").text("Hello, jQuery!!");

  const subTitleDiv = $("<div/>")
    .addClass("sub-title")
    .text("This banner element is rendered using jQuery and CSS.");

  const jumbotron = $("<div/>")
    .addClass("jumbotron")
    .append([titleDiv, subTitleDiv]);

  return jumbotron;
};

// target the div you want to append the elements created using jQuery
const jQueryContainer = $(document.getElementById("jquery-root"));

// append the jQuery created elements to the div
jQueryContainer.append(renderJumbotron());

// function that creates the elements for a Jumbotron using React
const Jumbotron = () => {
  return React.createElement("div", { className: "jumbotron" }, [
    React.createElement(
      "div",
      {
        className: "title",
        key: 1,
      },
      "Hello, React!!"
    ),
    React.createElement(
      "div",
      {
        className: "sub-title",
        key: 2,
      },
      "This banner element is rendered using React and CSS."
    ),
  ]);
};

// target the div you want to append the elements created using React
const reactContainer = document.getElementById("root");

// use ReactDOM to create a root element which will hold your entire React application
const root = ReactDOM.createRoot(reactContainer);

// render the application in the root element
root.render(Jumbotron());
