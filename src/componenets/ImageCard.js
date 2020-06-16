import React from 'react'

class ImageCard extends React.Component {

    render(){

        //helps deconstruct what is being returned form the API
        const {description, urls}= this.props.image

        return (
            <div >
            <img alt={description}
                src={urls.regular}
                style={{float: 'left', height: '100px', width: '100px', margin: '20px'}}></img>
            </div>
        )
    }
}

export default ImageCard