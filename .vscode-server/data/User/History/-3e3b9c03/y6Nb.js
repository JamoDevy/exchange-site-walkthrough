class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: [
        {
          name: 'Feetbook',
          shares_owned: 20,
          cost_per_share: 50,
          market_price: 130
        },{
          name: 'Yamazon',
          shares_owned: 5,
          cost_per_share: 200,
          market_price: 500
        },{
          name: 'Snoozechat',
          shares_owned: 100,
          cost_per_share: 20,
          market_price: 3
        }
      ]
    };
    // Note: api JSON data often come in underscore_styled like above
  }
  
  render() {
    const { portfolio } = this.state;
  
    return (
      <div className="container">
        <h1 className="text-center my-4">Stock Portfolio</h1>
        <div className="row">
          <div className="col-12">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Shares Owned</th>
                  <th scope="col">Cost per share ($)</th>
                  <th scope="col">Market Price ($)</th>
                  <th scope="col">Market Value ($)</th>
                  <th scope="col">Unrealized Gain/Loss ($)</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {portfolio.map((stock, index) => {
                  const {
                    name,
                    shares_owned,
                    cost_per_share,
                    market_price,
                  } = stock;

                  const market_value = shares_owned * market_price;
                  const unrealized_gain_loss = market_value - shares_owned * cost_per_share;
                  // Adopting the underscore_style for consistency
  
                  return (
                    <tr key={index}>
                      <td>{name}</td>
                      <td><input type="number" name="shares_owned" value={shares_owned} /></td>
                      <td><input type="number" name="cost_per_share" value={cost_per_share} /></td>
                      <td><input type="number" name="market_price" value={market_price} /></td>
                      <td></td>
                      <td></td>
                      <td><button className="btn btn-light btn-sm">remove</button></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  }
  
  ReactDOM.render(
    <Portfolio />,
    document.getElementById('root')
  );