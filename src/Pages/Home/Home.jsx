import React from 'react';
import Banner from './Banner/Banner';
import TopClasses from './TopClasses/TopClasses';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import OurStats from './OurStats/OurStats';
import Reviews from './Reviews/Reviews';
import VideoIntro from './VideoIntro/VideoIntro';
import Gallery from './Gallery/Gallery';
import AboutUs from './AboutUs/AboutUs';
import FAQ from './FAQ/FAQ';
import ContactUs from './ContactUs/ContactUs';

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
            <FAQ></FAQ>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;