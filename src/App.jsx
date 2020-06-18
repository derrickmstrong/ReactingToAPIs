import React, { Component } from 'react';

class App extends Component {
  state = {
    films: [],
    people: [],
    isLoaded: false,
    loadFilms: false,
    loadPeople: false,
  };

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((res) => res.json())
      .then((films) => this.setState({ films }))
      .catch((err) => console.log(err));

    fetch('https://ghibliapi.herokuapp.com/people')
      .then((res) => res.json())
      .then((people) => this.setState({ people }))
      .catch((err) => console.log(err));
  }

  handleFilms = () => {
    this.setState({
      isLoaded: true,
      loadFilms: true,
    });
  };

  handlePeople = () => {
    this.setState({
      isLoaded: true,
      loadPeople: true,
    });
  };

  render() {
    if (this.state.isLoaded) {
      if (this.state.loadFilms) {
        return this.state.films.map((film) => {
          return (
            <div key={film.id} className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{film.title}</h5>
                <p className='card-text'>{film.description}</p>
                <a href={film.url} className='btn btn-primary'>
                  Go to Endpoint
                </a>
              </div>
            </div>
          );
        });
      } else if (this.state.loadPeople) {
        return this.state.people.map((ppl) => {
          return (
            <div key={ppl.id} className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{ppl.name}</h5>
                <p className='card-text'>{ppl.age}</p>
                <a href={ppl.url} className='btn btn-primary'>
                  Go to Endpoint
                </a>
              </div>
            </div>
          );
        });
      }
    } else {
      return (
        <>
          <div className='container my-4'>
            <div className='d-flex justify-content-around'>
              <button className='btn btn-primary' onClick={this.handleFilms}>
                Load Films
              </button>
              <button className='btn btn-primary' onClick={this.handlePeople}>
                Load Persons
              </button>
            </div>
          </div>
        </>
      );
    }
  }
}

export default App;
