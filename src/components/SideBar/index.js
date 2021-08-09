import React from 'react'
import { CloseIcon, Icon, SideBarContainer, SideBarLink, SideBarMenu, SideBarRoute, SideBarWrapper, SideBtnWrap } from './SideBarElement'

const SideBar = (props) => {
    return (
        <SideBarContainer isOpen={props.isOpen} onClick={props.toggle} >
            <Icon >
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={props.toggle}>About</SideBarLink>
                    <SideBarLink to="services" onClick={props.toggle}>Services</SideBarLink>
                    <SideBarLink to="discover" onClick={props.toggle}>Discover</SideBarLink>
                    <SideBarLink to="signup" onClick={props.toggle}>SignUp</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/signin">SignIn</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
        
    )
}

export default SideBar
