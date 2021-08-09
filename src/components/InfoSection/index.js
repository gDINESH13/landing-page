import React from 'react'
import { Button } from '../ButtonElement'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'

const InfoSection = (props) => {
    return (
        <>
            <InfoContainer lightbg={props.lightBg} id={props.id}>
                <InfoWrapper>
                    <InfoRow imgStart={props.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{props.topLine}</TopLine>
                                <Heading lightText={props.lightText}>{props.headLine}</Heading>
                                <Subtitle darkText={props.dark}>{props.description}</Subtitle>
                            </TextWrapper>
                            <BtnWrap>
                                <Button to="/home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                excat="true"
                                offset={-80}
                                primary={props.primary ?1:0}
                                dark={props.dark?1:0}
                                dark2={props.dark2?1:0} >{props.buttonLable}
                                    
                                </Button>
                            </BtnWrap>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img  alt={props.alt} src={props.img} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
