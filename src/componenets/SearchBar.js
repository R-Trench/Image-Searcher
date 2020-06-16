import React from 'react'

class SearchBar extends React.Component {

    state = {term: ' '}
    
    onFormSubmit=(event)=>{
        event.preventDefault()
        
        this.props.onSubmit(this.state.term)
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    {/* name of search type here */}
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

/////////////////to use////////////////////

/* 
<div className='ui container' style={{marginTop: '5%'}}>
    <SearchBar />
</div> 
*/

////google & import lastest semantic.min.css file from CDN (put link into index.js)////
