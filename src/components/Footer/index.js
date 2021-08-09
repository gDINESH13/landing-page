import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialLogo, SocialMedia, SocialMediaIcons, SocialMediaWrap, WebsiteRights } from './FooterElements'

export const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                    
                                    <FooterLink to="/signin">How it works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Careers</FooterLink>
                                    <FooterLink to="/signin">Investors</FooterLink>
                                    <FooterLink to="/signin">Terms and service</FooterLink>
                                
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                    
                                    <FooterLink to="/signin">How it works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Careers</FooterLink>
                                    <FooterLink to="/signin">Investors</FooterLink>
                                    <FooterLink to="/signin">Terms and service</FooterLink>
                                
                            </FooterLinkItems>
                        </FooterLinksWrapper>

                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                    
                                    <FooterLink to="/signin">How it works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Careers</FooterLink>
                                    <FooterLink to="/signin">Investors</FooterLink>
                                    <FooterLink to="/signin">Terms and service</FooterLink>
                                
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                    
                                    <FooterLink to="/signin">How it works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Careers</FooterLink>
                                    <FooterLink to="/signin">Investors</FooterLink>
                                    <FooterLink to="/signin">Terms and service</FooterLink>
                                
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>dolla</SocialLogo>
                            <WebsiteRights>dolla {new Date().getFullYear()}All rights Reserved.</WebsiteRights>
                        </SocialMediaWrap>
                        <SocialMediaIcons>
                            <SocialIconLink  href="/" target="_blank" aria-lable="FaceBook">  <FaFacebook/> </SocialIconLink>
                            <SocialIconLink  href="/" target="_blank" aria-lable="Instagram">  <FaInstagram/> </SocialIconLink>
                            <SocialIconLink  href="/" target="_blank" aria-lable="Youtube">  <FaYoutube/> </SocialIconLink>
                            <SocialIconLink  href="/" target="_blank" aria-lable="Twitter">  <FaTwitter/> </SocialIconLink>
                            <SocialIconLink  href="/" target="_blank" aria-lable="LinkedIn">  <FaLinkedin/> </SocialIconLink>
                        </SocialMediaIcons>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}
