import React from 'react';
import Banner from './Banner/Banner';
import TopColleges from './TopColleges/TopColleges';
import GroupPictureGallery from './GroupPictureGallery/GroupPictureGallery';
import ResearchPaper from './ResearchPaper/ResearchPaper';
import CollegeReview from './CollegeReview/CollegeReview';

const Home = () => {
    return (
        <div className='bg-blue-200'>
            <Banner></Banner>
            <TopColleges></TopColleges>
            <GroupPictureGallery></GroupPictureGallery>
            <ResearchPaper></ResearchPaper>
            <CollegeReview></CollegeReview>
        </div>
    );
};

export default Home;