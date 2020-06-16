import React from 'react';
import unsplash from './api/unsplash';
import './App.css';
import SearchBar from './componenets/SearchBar'
import ImageList from './componenets/ImageList'


class App extends React.Component {

  state = {images: []}

  onSearchSubmit = async (term) =>{
    const response = await unsplash
      .get('/search/photos', {
        params: { query: term},
      });

      this.setState({images:response.data.results})
  }

  render(){
    const answer = ''
        return (
          <div className="ui container" style={{marginTop: '5%'}}>
           <SearchBar onSubmit={this.onSearchSubmit}/>
           <ImageList image={this.state.images}/>
          
          </div>
        )
    }
}

export default App;

//access
//jBlJfVZn31-WT31qku-H9KA2qTcHuFSJ0MYWBTWOR0g
//secret
//gjTHPMQYx7flcTrx2nJxboBowc9NpWCYrLPRPXDk-Js