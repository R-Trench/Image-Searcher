import React from 'react';
import unsplash from './api/unsplash';
import './App.css';
import SearchBar from './componenets/SearchBar'
import ImageList from './componenets/ImageList'


class App extends React.Component {

  //search results to be rendered to the screen
  state = {images: []}

  //API setup that will be called in search component
  onSearchSubmit = async (term) =>{
    const response = await unsplash
      .get('/search/photos', {
        params: { query: term},
      });
      this.setState({images:response.data.results})
  }

  render(){
        return (
          <div className="ui container" style={{marginTop: '5%'}}>
           <SearchBar onSubmit={this.onSearchSubmit}/>
           <ImageList images={this.state.images}/>
          </div>
        )
    }
}

export default App;