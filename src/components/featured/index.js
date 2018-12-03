import React from 'react';
import Carousel from "./carousel";

const Featured = () => {
    return (
        <div style={{ position: 'relative' }}>

            <Carousel />
            <div className='artist_name'>
                <div className='wrapper'>
                    Eminem
                </div>
            </div>
        </div>
    );
};

export default Featured;