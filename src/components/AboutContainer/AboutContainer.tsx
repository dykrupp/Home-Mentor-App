import { Typography, useTheme } from '@material-ui/core';
import styled from 'styled-components';
import aboutLightSrc from '../../assets/about/about-light.jpg';
import aboutDarkSrc from '../../assets/about/about-dark.jpg';
import aboutLightMobile from '../../assets/mobile/image-about-light.jpg';
import aboutDarkMobile from '../../assets/mobile/image-about-dark.jpg';
import { ResponsiveBody1 } from '../ResponsiveBody1/index';
import { FC } from 'react';

interface AboutContainerProps {
    isMobile: boolean;
    isColumn: boolean;
}

export const AboutContainer: FC<AboutContainerProps> = ({
    isMobile,
    isColumn,
}) => {
    const theme = useTheme();
    const showMobileImages = isMobile || !isColumn;

    return (
        <>
            <AboutImgContainer>
                <MaxImage
                    alt="about dark"
                    src={showMobileImages ? aboutDarkMobile : aboutDarkSrc}
                />
            </AboutImgContainer>
            <AboutMidContainer style={{ padding: isMobile ? '25px' : '50px' }}>
                <Header variant="h6">ABOUT OUR FURNITURE</Header>
                <ResponsiveBody1 isMobile={isMobile} theme={theme}>
                    {`Our multifunctional collection blends design and function to suit your individual taste. 
    Make each room unique, or pick a cohesive theme that best express your interests and what 
    inspires you. Find the furniture pieces you need, from traditional to contemporary styles 
    or anything in between. Product specialists are available to help you create your dream space. `}
                </ResponsiveBody1>
            </AboutMidContainer>
            <AboutImgContainer>
                <MaxImage
                    alt="about light"
                    src={showMobileImages ? aboutLightMobile : aboutLightSrc}
                />
            </AboutImgContainer>
        </>
    );
};

const AboutImgContainer = styled.div`
    flex: 1;
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
`;

const MaxImage = styled.img`
    width: 100%;
    height: 100%;
`;
