import React from 'react'
import { NavbarHome, SectionOne, InfoPanelFirst, SectionTwo, SectionThree, SectionFour, SectionFive, FooterHome, InfoPanelSecond } from "../../components/home/index";
import './Home.css';

function Home() {
    return (
        <>
            <NavbarHome />
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

