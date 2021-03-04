import { FC } from 'react';
import styled from 'styled-components';
import image1 from '../../assets/sliders/slider1.jpg';
import image2 from '../../assets/sliders/slider2.jpg';
import image3 from '../../assets/sliders/slider3.jpg';
import mobileImage1 from '../../assets/mobile/mobile-slider1.jpg';
import mobileImage2 from '../../assets/mobile/mobile-slider2.jpg';
import mobileImage3 from '../../assets/mobile/mobile-slider3.jpg';
import { NavButtonContainer } from '../NavButtonContainer';
import { DesktopOverlay } from './DesktopOverlay';
import { MobileOverlay } from './MobileOverlay';

interface ImageSliderProps {
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    isMediumScreen: boolean;
    isMobile: boolean;
}

export const NavImageSlider: FC<ImageSliderProps> = ({
    index,
    isMediumScreen,
    setIndex,
    isMobile,
}) => {
    let imgSrc = isMobile ? mobileImage1 : image1;
    if (index === 1) imgSrc = isMobile ? mobileImage2 : image2;
    else if (index === 2) imgSrc = isMobile ? mobileImage3 : image3;

    return (
        <Container>
            {isMobile ? <MobileOverlay /> : <DesktopOverlay />}
            {(isMobile || isMediumScreen) && (
                <NavButtonContainer
                    index={index}
                    setIndex={setIndex}
                    wrapperStyle={{ position: 'absolute', bottom: 0, right: 0 }}
                />
            )}
            <SizedImg alt="home slider" src={imgSrc} />
        </Container>
    );
};

const Container = styled.div`
    position: relative;
`;

const SizedImg = styled.img`
    height: 100%;
    width: 100%;
`;
