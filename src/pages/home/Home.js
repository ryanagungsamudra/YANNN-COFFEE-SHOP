import React from 'react'
import { Navbar, SectionOne, InfoPanelFirst, SectionTwo, SectionThree, SectionFour, SectionFive, FooterHome, InfoPanelSecond } from "../../components/home/index";
// import './Home.css';

function Home() {
    const status = {
        Home: "active-nav",
    }

    return (
        <>
            <Navbar status={status}/>
            <SectionOne />
            <InfoPanelFirst />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <FooterHome />
            <InfoPanelSecond />
        </>
    )
}

export default Home

