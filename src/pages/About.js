import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import AboutFour from '../container/About/AboutFour';
import Video from '../container/Video/Video';
import AboutFive from '../container/About/AboutFive';
import TestimonialContainer from '../container/Testimonial/TestimonialContainer';
import CallToActionTwo from '../container/CallToAction/CallToActionTwo';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';






const AboutUs = () => {
    return (
        <React.Fragment>
            <SEO title="Rawdata || About" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg.jpg"
                title="We serve as the trusted ally for leading global enterprises navigating their digital transformation journey."
                content="Home"
                contentTwo="Our Story"
            />
            <AboutFive />
            <AboutFour />
            <Video />
            <TestimonialContainer classOption="bg-primary-blue" />
            <CallToActionTwo />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default AboutUs;



