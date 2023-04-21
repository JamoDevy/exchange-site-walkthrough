const Temperature = (props) => {
    return <p>The current temperature in {props.city} is {props.degree} degree {props.unit}</p>;
  };
  
  const element = <Temperature degree={25} unit="celsius" />;
  
  ReactDOM.render(
    element,
    document.getElementById('root')
  );