const Temperature = (props) => {
    return <h1>The current temperature is {props.degree}</h1>;
  };

const element = <Temperature degree={25} />;

ReactDOM.render(
  element,
  document.getElementById('root')
);