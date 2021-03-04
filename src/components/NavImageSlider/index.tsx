import { Tabs, Tab, IconButton, Menu, MenuItem } from '@material-ui/core';
import { FC, useState } from 'react';
import styled from 'styled-components';
import image1 from '../../assets/sliders/slider1.jpg';
import image2 from '../../assets/sliders/slider2.jpg';
import image3 from '../../assets/sliders/slider3.jpg';
import mobileImage1 from '../../assets/sliders/mobile-slider1.jpg';
import mobileImage2 from '../../assets/sliders/mobile-slider2.jpg';
import mobileImage3 from '../../assets/sliders/mobile-slider3.jpg';
import { NavButtonContainer } from '../NavButtonContainer';
import hamburgerImg from '../../assets/hamburger-menu.svg';

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
    const [tabIndex, setTabIndex] = useState<number | boolean>(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let imgSrc = isMobile ? mobileImage1 : image1;
    if (index === 1) imgSrc = isMobile ? mobileImage2 : image2;
    else if (index === 2) imgSrc = isMobile ? mobileImage3 : image3;

    const isMenuOpen = Boolean(anchorEl);

    return (
        <Container>
            {isMobile ? (
                <>
                    <MobileMenuContainer>
                        <IconButton onClick={handleClick}>
                            <img alt="hamburger menu" src={hamburgerImg} />
                        </IconButton>
                        <Menu
                            open={isMenuOpen}
                            onClose={handleClose}
                            anchorEl={anchorEl}
                        >
                            <MenuItem onClick={handleClose}>home</MenuItem>
                            <MenuItem onClick={handleClose}>shop</MenuItem>
                            <MenuItem onClick={handleClose}>about</MenuItem>
                            <MenuItem onClick={handleClose}>contact</MenuItem>
                        </Menu>
                    </MobileMenuContainer>
                    <MobileTextOverlay>room</MobileTextOverlay>
                </>
            ) : (
                <>
                    <DesktopTextOverlay>room</DesktopTextOverlay>
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
                </>
            )}
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

const MobileMenuContainer = styled.div`
    position: absolute;
    top: 25px;
    left: 15px;
`;

const MobileTextOverlay = styled.p`
    position: absolute;
    top: 15px;
    left: 160px;
    font-weight: 700;
    font-size: 18px;
    color: white;
`;

const DesktopTextOverlay = styled.p`
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
    height: 100%;
    width: 100%;
`;
