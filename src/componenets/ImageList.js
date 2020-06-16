import React from 'react';

const ImageList = (props) => {
    const output = props.image.map((images)=>{
        return <img src={images.urls.regular} />
    })

    return <div>{output}</div>

}
export default ImageList
