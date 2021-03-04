import { Tabs, Tab, IconButton, Drawer, Link } from '@material-ui/core';
import { FC, useState } from 'react';
import styled from 'styled-components';
import image1 from '../../assets/sliders/slider1.jpg';
import image2 from '../../assets/sliders/slider2.jpg';
import image3 from '../../assets/sliders/slider3.jpg';
import mobileImage1 from '../../assets/mobile/mobile-slider1.jpg';
import mobileImage2 from '../../assets/mobile/mobile-slider2.jpg';
import mobileImage3 from '../../assets/mobile/mobile-slider3.jpg';
import { NavButtonContainer } from '../NavButtonContainer';
import hamburgerImg from '../../assets/mobile/hamburger-menu.svg';
import closeImg from '../../assets/mobile/icon-close.svg';

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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    let imgSrc = isMobile ? mobileImage1 : image1;
    if (index === 1) imgSrc = isMobile ? mobileImage2 : image2;
    else if (index === 2) imgSrc = isMobile ? mobileImage3 : image3;

    const handleClick = () => setIsDrawerOpen(true);
    const handleClose = () => setIsDrawerOpen(false);

    return (
        <Container>
            {isMobile ? (
                <>
                    <MobileButtonContainer>
                        <IconButton onClick={handleClick}>
                            <img alt="hamburger menu" src={hamburgerImg} />
                        </IconButton>
                    </MobileButtonContainer>
                    <MobileTextOverlay>room</MobileTextOverlay>
                    <Drawer
                        anchor={'top'}
                        open={isDrawerOpen}
                        onClose={handleClose}
                    >
                        <DrawerContent>
                            <IconButton
                                onClick={handleClose}
                                style={{ margin: '15px' }}
                            >
                                <img src={closeImg} alt="close" />
                            </IconButton>
                            <LinkContainer>
                                <StyledMobileLink
                                    href="#"
                                    onClick={handleClose}
                                >
                                    home
                                </StyledMobileLink>
                                <StyledMobileLink
                                    href="#"
                                    onClick={handleClose}
                                >
                                    shop
                                </StyledMobileLink>
                                <StyledMobileLink
                                    href="#"
                                    onClick={handleClose}
                                >
                                    about
                                </StyledMobileLink>
                                <StyledMobileLink
                                    href="#"
                                    onClick={handleClose}
                                >
                                    contact
                                </StyledMobileLink>
                            </LinkContainer>
                        </DrawerContent>
                    </Drawer>
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

const DrawerContent = styled.div`
    display: flex;
    height: 100px;
`;

const LinkContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-evenly;
`;

const MobileButtonContainer = styled.div`
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

const StyledMobileLink = styled(Link)`
    align-items: center;
    display: flex;
    text-decoration: none !important;
    font-size: 14px;
    font-weight: 700;
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
