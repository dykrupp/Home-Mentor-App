import { Tabs, Tab } from '@material-ui/core';
import { FC, useState } from 'react';
import styled from 'styled-components';
import image1 from '../../assets/sliders/slider1.jpg';
import image2 from '../../assets/sliders/slider2.jpg';
import image3 from '../../assets/sliders/slider3.jpg';

interface ImageSliderProps {
    index: number;
}

export const NavImageSlider: FC<ImageSliderProps> = ({ index }) => {
    const [tabIndex, setTabIndex] = useState<number | boolean>(false);

    let imgSrc = image1;
    if (index === 1) imgSrc = image2;
    else if (index === 2) imgSrc = image3;

    return (
        <Container>
            <TextOverlay>room</TextOverlay>
            <StyledTabs
                value={tabIndex}
                textColor="secondary"
                indicatorColor="secondary"
            >
                <StyledTab
                    label="home"
                    onMouseEnter={() => setTabIndex(0)}
                    onMouseLeave={() => setTabIndex(false)}
                />
                <StyledTab
                    label="shop"
                    onMouseEnter={() => setTabIndex(1)}
                    onMouseLeave={() => setTabIndex(false)}
                />
                <StyledTab
                    label="about"
                    onMouseEnter={() => setTabIndex(2)}
                    onMouseLeave={() => setTabIndex(false)}
                />
                <StyledTab
                    label="contact"
                    onMouseEnter={() => setTabIndex(3)}
                    onMouseLeave={() => setTabIndex(false)}
                />
            </StyledTabs>
            <SizedImg alt="home slider" src={imgSrc} />
        </Container>
    );
};

const Container = styled.div`
    width: 840px;
    position: relative;
`;

const TextOverlay = styled.p`
    position: absolute;
    top: 10px;
    left: 60px;
    color: white;
    font-size: 25px;
    font-weight: 700;
`;

const StyledTabs = styled(Tabs)`
    position: absolute;
    top: 26px;
    left: 165px;
`;

const StyledTab = styled(Tab)`
    min-width: 60px !important;
    color: white !important;
    text-transform: none !important;
    font-weight: 700 !important;
`;

const SizedImg = styled.img`
    height: 534px;
    width: 100%;
`;
