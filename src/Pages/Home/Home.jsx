import React from 'react';
import Banner from './Banner/Banner';
import TopClasses from './TopClasses/TopClasses';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import OurStats from './OurStats/OurStats';
import Reviews from './Reviews/Reviews';
import VideoIntro from './VideoIntro/VideoIntro';
import Gallery from './Gallery/Gallery';
import AboutUs from './AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VideoIntro></VideoIntro>
            <TopClasses></TopClasses>
            <PopularInstructors></PopularInstructors>
            <OurStats></OurStats>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;