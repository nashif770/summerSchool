import React from 'react';
import Banner from './Banner/Banner';
import TopClasses from './TopClasses/TopClasses';
import PopularInstructors from './PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopClasses></TopClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;