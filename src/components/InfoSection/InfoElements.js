import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const InfoContainer = styled.div `
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#000')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div `
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div `
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div `
    margin-bottom: 15px;
    padding: 0 15px;
    grid-areas: col1;
`;

export const Column2 = styled.div `
    margin-bottom: 15px;
    padding: 0 15px;
    grid-areas: col2;
`;

export const TextWrapper = styled.div `
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p `
    color: tomato;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing:  1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1 `
    // color: red;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? 'tomato' : '#000')};
    @media screen and(max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p `
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : "#fff")};
`;

export  const BtnWrap = styled.div `
    display: flex;
    justify-content: flex-start;
`;

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    flex-wrap: wrap;
    padding: 40px;
`;

export const Card = styled.div `
    position: relative;
    width: 320px;
    height: 440px;
    box-shadow: inset 5px 5px 5px rgba(0,0,0,0.05),
                inset -5px -5px 5px rgba(255, 255,255, 0.5),
                5px 5px 5px rgba(0,0,0,0.05),
                -5px -5px 5px rgba(255,255,255,0.5);
    border-radius: 15px;
    margin: 30px;
`;

export const Box = styled.div `
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background: #ebf5fc;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-in;

    &:hover {
        transform: translateY(-50px);
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        background: linear-gradient(45deg, tomato, #FFE74C);
    }
`;

export const Content = styled.div `
    padding: 20px;
    text-align: center;
`;

// export const  H2 = styled.h2 `
//     position: absolute;
//     top: -10px;
//     right: 30px;
//     font-size: 8px;
//     color: rgba(0,0,0,0.05);
//     transition: 0.5s;
//     pointer-events: none;

//     &:hover {
//         color: rgba(0,0,0,0.05);
//     }
// `;

// export const H3 = styled.h3 `
//     font-size: 1.0em;
//     color: #777;
//     z-index: 1;
//     transition: 0.5s;

//     &:hover {
//       color: #fff;  
//     }
// `;

export const P = styled.p `
    font-size: 1em;
    font-weight: 300;
    color: #777;
    z-index: 1;
    transition: 0.5s;


    &:hover {
        color: #fff;
    }
`;

export const A = styled(LinkR)` 
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    background: tomato;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 20px;
    color: #000;
    text-decoration: none;
    font-weight: 400;
    boz-shadow: 0 10px 20px rgba(0,0,0,0.2);

    &:hover {
        background: #FFE74C;
        transition: 0.3s ease-out;

    }
`;
