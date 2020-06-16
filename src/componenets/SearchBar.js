import React from 'react'

class SearchBar extends React.Component {

    //tracks what is in the searchbar
    state = {term: ' '}
    
    onFormSubmit=(event)=>{
        //prevents page refresh when enter key is pressed
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input 
                        value={this.state.term} 
                        placeholder='Search' 
                        onChange={e=> this.setState({term: e.target.value})}></input>
                    </div>
                </form>
            </div>  
        )
    }
}

export default SearchBar

/////////////////to use this component elsewhere////////////////////
//google & import lastest semantic.min.css file from CDN (put link into index.js)////
//wrap parent div with a "ui container" class
