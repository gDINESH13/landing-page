import React,{useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { HeroH1,
     HeroBg, 
     HeroBtnWrapper, 
     HeroContainer, 
     HeroContent,
     HeroP, 
     VideoBg ,
    ArrowRight,
    ArrowForward} from './HeroElements'

const HeroSection = () => {
    const [hover,setHover]=useState(false)

    const onHover=()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type=
                "video/mp4"></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking Made Easy.
                </HeroH1>
                <HeroP>
                    Sign up for a new account today and recieve $250 in credit
                    towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="singup" onMouseEnter={onHover} onMouseLeave={onHover}
                     primary='true' dark='true'
                    >
                        Get Started {hover? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
