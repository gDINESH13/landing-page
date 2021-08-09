import React,{useState} from 'react'
import { Footer } from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { HomeObjOne, HomeObjThree, HomeObjTwo } from '../components/InfoSection/Data';
import NavBar from '../components/NavBar'
import { Services } from '../components/Services';
import SideBar from '../components/SideBar'

const Home= () => {
    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
        console.log(`toggled to ${isOpen}`)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...HomeObjOne}/>
            <InfoSection {...HomeObjThree}/>
            <InfoSection {...HomeObjTwo}/>
            <Services/>
            <Footer/>
        </>
    )
}

export default Home;
