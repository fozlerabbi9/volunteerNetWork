import React from 'react';
import './SingleData.css';

const SingleData = ({data}) => {
    const { id, img, title, someInfo } = data;
    console.log(img)
    return (
        <div className='col'>
            <div>
                {/* <p>{id}</p> */}
                <img src={img} alt="" />
                <p>{someInfo}</p>
                <button>{title}</button>
            </div>
        </div>
    );
};

export default SingleData;