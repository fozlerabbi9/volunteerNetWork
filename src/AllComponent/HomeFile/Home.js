import React from 'react';
import useMainData from '../DataLoadHookFile/useMainData';
import './Home.css';
import SingleData from './SingleData';

const Home = () => {
    const [mainData, setMainData] = useMainData();
    return (
        <div>
            <h2>this is home page</h2>
            <p>data = {mainData.length}</p>

            <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mx-5'>
                {
                    mainData.map(data => <SingleData
                    key={data.id}
                    data={data}
                    ></SingleData> )
                }
            </div>
        </div>
    );
};

export default Home;