import { IconButton, Drawer, Link } from '@material-ui/core';
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
import logoImg from '../../assets/logo/logo.svg';
import { DesktopLink } from './DesktopLink';

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
                    <MobileLogoOverlay src={logoImg} />
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
                    <DesktopLogoOverlay src={logoImg} />
                    <div
                        style={{
                            position: 'absolute',
                            top: 39,
                            left: 165,
                        }}
                    >
                        <DesktopLinkContainer>
                            <DesktopLink>home</DesktopLink>
                            <DesktopLink>shop</DesktopLink>
                            <DesktopLink>about</DesktopLink>
                            <DesktopLink>contact</DesktopLink>
                        </DesktopLinkContainer>
                    </div>
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

const MobileLogoOverlay = styled.img`
    position: absolute;
    top: 37px;
    left: 155px;
`;

const StyledMobileLink = styled(Link)`
    align-items: center;
    display: flex;
    text-decoration: none !important;
    font-size: 14px;
    font-weight: 700;
`;

const DesktopLogoOverlay = styled.img`
    position: absolute;
    top: 43px;
    left: 65px;
`;

const DesktopLinkContainer = styled.div`
    display: flex;
`;

const SizedImg = styled.img`
    height: 100%;
    width: 100%;
`;
