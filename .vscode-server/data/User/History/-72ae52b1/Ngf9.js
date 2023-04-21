class CurrencyConverter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rate: 0.89,
        usd: 1,
        euro: 1 * 0.89,
      };

    this.handleUsdChange = this.handleUsdChange.bind(this);
    this.handleEuroChange = this.handleEuroChange.bind(this);

    }
  
    toUsd(amount, rate) {
      return amount * (1 / rate);
    }
  
    toEuro(amount, rate) {
      return amount * rate;
    }

    handleUsdChange(event) {
        const input = parseFloat(event.target.value);
        if (Number.isNaN(input)) {
          this.setState({
            usd: '',
            euro: '',
          });
          return; // early return
        }
        const euro = this.toEuro(input, this.state.rate).toFixed(3);
        this.setState({
          usd: input,
          euro
        });
      }
    
    handleEuroChange(event) {
        const input = parseFloat(event.target.value);
        if (Number.isNaN(input)) {
          this.setState({
            usd: '',
            euro: '',
          });
          return;  // early return
        }

        const usd = this.toUsd(input, this.state.rate).toFixed(3);
        this.setState({
          euro: input,
          usd
        });
      }
  
    render() {
      const { rate, usd, euro } = this.state;
  
      return (
        <div className="container">
          <div className="text-center p-3 mb-2">
            <h2 className="mb-2">Currency Converter</h2>
            <h4>USD 1 : {rate} EURO</h4>
          </div>
          <div className="row text-center">
            <div className="col-12">
              <span className="mr-1">USD</span>
              <input value={usd} onChange={this.handleUsdChange} type="number" />
              <span className="mx-3">=</span>
              <input value={euro} onChange={this.handleEuroChange} type="number" />
              <span className="ml-1">EURO</span>
            </div>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <CurrencyConverter />,
    document.getElementById('root')
  );