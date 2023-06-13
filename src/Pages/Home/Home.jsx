import React from 'react';
import Banner from './Banner/Banner';
import TopClasses from './TopClasses/TopClasses';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import OurStats from './OurStats/OurStats';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopClasses></TopClasses>
            <PopularInstructors></PopularInstructors>
            <OurStats></OurStats>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;