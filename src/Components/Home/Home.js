import React, { Component } from 'react';
import Navbar from '../../Components/Navigation/Navigation';
import TopMovies from '../../Containers/Movies/TopMovies/TopMovies';
import TopTvShows from '../../Containers/Movies/TopTvShows/TopTvShows';
import Footer from '../Footer/Footer';
class Home extends Component {
  state = {
    searching: false,
  };

  search = () => {
    this.setState({ searching: true });
  };

  render() {
    return (
      <div>
        <Navbar search={this.search} />
        {!this.state.searching ? <TopMovies /> : null}
        {!this.state.searching ? <TopTvShows /> : null}

        <Footer />
      </div>
    );
  }
}

export default Home;
