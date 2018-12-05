import React from 'react';
import Carousel from "./carousel";
import Timer from './timer';

const Featured = () => {
    return (
        <div style={{ position: 'relative' }}>

            <Carousel />
            <div className='artist_name'>
                <div className='wrapper'>
                    Eminem
                </div>
            </div>
            <Timer></Timer>
        </div>
    );
};

export default Featured;