class MovieFinder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchTerm: '',
        results: [],
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ searchTerm: event.target.value });
    }
  
    handleSubmit(event) {
        event.preventDefault();
        let { searchTerm } = this.state;  // ES6 destructuring
        searchTerm = searchTerm.trim();  // clean the string
        if (!searchTerm) {  // make sure the value isn't an empty string
          return;  // early return
        }
      
        // make the AJAX request to OMDBAPI to get a list of results
        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=b7da8d63`)
        .then((response) => {
          if (response.ok) {
            // .ok returns true if response status is 200-299
            return response.json();
          }
          throw new Error('Request was either a 404 or 500');
        }).then((data) => {
          console.log(data);  // log the response data for now
        }).catch((error) => {
          console.log(error);
        })
      }
  
    render() {
      const { searchTerm, results } = this.state;  // ES6 destructuring
  
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form onSubmit={this.handleSubmit} className="form-inline my-4">
                <input
                  type="text"
                  className="form-control mr-sm-2"
                  placeholder="frozen"
                  value={searchTerm}
                  onChange={this.handleChange}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              {results.map((movie) => {
                return null;  // returns nothing for now
              })}
            </div>
          </div>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <MovieFinder />,
    document.getElementById('root')
  );