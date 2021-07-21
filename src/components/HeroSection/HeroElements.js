import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';


// export const HeroContainer = styled.div`
//     background:  #0c0c0c;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0 30px;
//     width: 100%;
//     height: 800px;
//     position: relative;
//     z-index: 1;

//     // Add :before styles
// `;

// export const HeroBg = styled.div `
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
// `;

// export const VideoBg = styled.video`
//     width: 100%;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;
//     background: #232a34;
// `;

export const HeroContainer = styled.div `
    background: #000;
    position: relative;
    padding-top: 150px;
    padding-bottom: 370px;
    width: 100%;
    display: flex;
    height: 100%;

    @media screen and (max-height: 600px) {
    padding-top: 50px;
    padding-bottom: 320px       
    }

    justify-content: center;
    align-items: center;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backgrount: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2)0%, transparent 100%);
        z-index: 0;
    }
`;


export const HeroLoader = styled.div `
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgb(10, 10, 10);
    animation: animate 2s linear infinite;

    @keyframes animate {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: linear-gradient(to top, transparent, tomato);
        background-size: 100px 180px;
        background-repeat: no-repeat;
        border-top-left-radius: 100px;
        border-bottom-left-radius: 100px;
    }


    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 20px;
        background: tomato;
        border-radius: 50%;
        z-index: 10;
        box-shadow: 0 0 10px tomato,
                    0 0 20px tomato,
                    0 0 30px tomato,
                    0 0 40px tomato,
                    0 0 50px tomato,
                    0 0 60px tomato,
                    0 0 70px tomato,
                    0 0 80px tomato,
                    0 0 90px tomato,
                    0 0 100px tomato;
    }
`;

export  const HeroSpan = styled.div `
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background: #000;
    border-radius: 50%;
`;

export const HeroContent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    margin-top: 600px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1 `
    color: #fff;
    align-items: center;
    text-align: center;
    font-size: 40px;

    @media screen and (max-width: 768px) {
        font-size: 30px;       
    }


    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;

export const HeroP = styled.p `
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;       
    }


    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div `
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward =  styled(MdArrowForward) `
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight) `
    margin-left: 8px;
    font-size: 20px;
`;
