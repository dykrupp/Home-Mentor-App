import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import aboutLightSrc from '../../assets/about/about-light.jpg';
import aboutDarkSrc from '../../assets/about/about-dark.jpg';

export const AboutContainer = () => (
    <>
        <AboutLeftContainer>
            <MaxImage alt="about dark" src={aboutDarkSrc} />
        </AboutLeftContainer>
        <AboutMidContainer>
            <Header variant="h6">ABOUT OUR FURNITURE</Header>
            <Typography variant="body1">
                {`Our multifunctional collection blends design and function to suit your individual taste. 
    Make each room unique, or pick a cohesive theme that best express your interests and what 
    inspires you. Find the furniture pieces you need, from traditional to contemporary styles 
    or anything in between. Product specialists are available to help you create your dream space. `}
            </Typography>
        </AboutMidContainer>
        <AboutRightContainer>
            <MaxImage alt="about light" src={aboutLightSrc} />
        </AboutRightContainer>
    </>
);

const AboutLeftContainer = styled.div`
    flex: 1;
    max-width: 420px;
`;

const Header = styled(Typography)`
    display: flex;
    align-self: flex-start;
`;

const AboutMidContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
`;

const AboutRightContainer = styled.div`
    flex: 1;
    max-width: 440px;
`;

const MaxImage = styled.img`
    width: 100%;
    height: 100%;
`;
