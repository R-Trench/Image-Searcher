import React from 'react';
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const output = props.images.map((images)=>{
        return <ImageCard key={images.id} image={images}/>
    })

    return <div className="image-list">{output}</div>

}
export default ImageList
