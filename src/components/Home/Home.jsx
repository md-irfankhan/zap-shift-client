import React from 'react';
import Banner from '../Banner/Banner';
import Work from '../Work/Work';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='bg-slate-50'>
            <Banner></Banner>
            <Work></Work>
            <Services></Services>
        </div>
    );
};

export default Home;