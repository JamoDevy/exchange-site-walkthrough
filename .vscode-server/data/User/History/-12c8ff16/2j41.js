const Temperature = (props) => {
    return <p>The current temperature in {props.city} is {props.degree} degree {props.unit}</p>;
  };
  
  const App = () => {
    return (
      <div>
        <Temperature city="London" degree={20} unit="celsius" />
        <Temperature city="New York" degree={25} unit="celsius" />
        <Temperature city="Dubai" degree={32} unit="celsius" />
      </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );