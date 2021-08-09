import React,{useState,useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {   Nav,
    NavbarContainer,
    NavLogo,
    MobileIcons,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink  } from './NavbarElements'
import {animateScroll as Scroll } from 'react-scroll';



const NavBar = (props) => {
    const [scroll,setScroll]=useState(false);

    const changeNav=()=>{
        if(window.scrollY>=80){
            setScroll(true)
        }
        else{
            setScroll(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[])

    const toggleHome=()=>{
        Scroll.scrollToTop()
    }
    return (
        <>
            <Nav scrollNav={scroll}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        dolla
                    </NavLogo>
                    <MobileIcons onClick={props.toggle}>
                        <FaBars/>
                    </MobileIcons>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'  smooth={true} duration={500} spy={true} exact='true' offset={0}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'  smooth={true} duration={500} spy={true} exact='true' offset={0}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'  smooth={true} duration={500} spy={true} exact='true' offset={0}>SignUp</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">SignIn</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavBar
