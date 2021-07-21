import React, {useState} from 'react';
import { Button } from '../ButtonElement';
// import { animateScroll as scroll } from 'react-scroll';
import { 
    HeroContainer,
    HeroLoader, 
    HeroSpan, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
                <HeroLoader>
                    <HeroSpan></HeroSpan>
                </HeroLoader>
            <HeroContent>
                <HeroH1>Online Transaction Made Easy</HeroH1>
                <HeroP>
                    Sign Up for a New Account Today and Receive $250 in credit towards your next Payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="signup" 
                        onMouseEnter={onHover}
                        onMouseLeave={onHover} 
                        primary="true" dark="true"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >
                        Get started  {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
};

export default HeroSection;
