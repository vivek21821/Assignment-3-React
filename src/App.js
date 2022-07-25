import "./App.css";
import React from "react";
import axios from "axios";
import Card from "./Card/Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: [],
    };
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://www.omdbapi.com/?apikey=45f0782a&s=war"
      );
      // console.log(response.data.Search);
      this.setState({
        movie: response.data.Search,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h1>App</h1>
        <Card movieList={this.state.movie} />
      </div>
    );
  }
}

export default App;
