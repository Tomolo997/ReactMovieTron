import classes from './MovieDetail.module.css';
import React, { Component } from 'react';
import NavBar from '../../Components/Navigation/Navigation';
import axios from 'axios';
import { API_KEY } from '../../config';
export default class MovieDetails extends Component {
  state = {
    id: '',
    name: '',
  };

  async componentDidUpdate() {
    const IMDBid = await axios.get(
      `https://api.themoviedb.org/3/find/${this.state.id}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`
    );

    console.log(IMDBid.data);
  }

  async componentDidMount() {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY}&language=en-US`
    );
    this.setState({ id: data.data.imdb_id });
  }
  render() {
    return (
      <>
        <NavBar />{' '}
        <div className={classes.yea}>{this.props.match.params.id}</div>
      </>
    );
  }
}
