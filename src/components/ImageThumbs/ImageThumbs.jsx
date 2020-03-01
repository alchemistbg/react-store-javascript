import React from 'react'

import Image from './../common/Image/Image';

function ImageThumbs(props) {

    const { images, handleThumbImageClick } = props;

    return (
        <span className="image-thumbs">
            {
                images.map((image, index) => {
                    return <label key={image} className="image-label">
                        {
                            (index === 0) ? (
                                <input className="image-radio" type="radio" name="image-radio" id={image} defaultChecked></input>
                            ) : (
                                    <input className="image-radio" type="radio" name="image-radio" id={image} ></input>
                                )
                        }
                        <div className="image-placeholder" onClick={() => handleThumbImageClick(image)}>
                            <Image image={image} imageClass="image-thumb" htmlFor="image-radio" />
                        </div>
                    </label>
                })
            }
        </span>
    )
}

export default ImageThumbs;