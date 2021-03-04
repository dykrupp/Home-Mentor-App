import styled from 'styled-components';
import { IconButton, Drawer, Link } from '@material-ui/core';
import hamburgerImg from '../../assets/mobile/hamburger-menu.svg';
import closeImg from '../../assets/mobile/icon-close.svg';
import logoImg from '../../assets/logo/logo.svg';
import { useState } from 'react';

export const MobileOverlay = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleClick = () => setIsDrawerOpen(true);
    const handleClose = () => setIsDrawerOpen(false);

    return (
        <>
            <MobileButtonContainer>
                <IconButton onClick={handleClick}>
                    <img alt="hamburger menu" src={hamburgerImg} />
                </IconButton>
            </MobileButtonContainer>
            <MobileLogoOverlay src={logoImg} />
            <Drawer anchor={'top'} open={isDrawerOpen} onClose={handleClose}>
                <DrawerContent>
                    <IconButton
                        onClick={handleClose}
                        style={{ margin: '15px' }}
                    >
                        <img src={closeImg} alt="close" />
                    </IconButton>
                    <LinkContainer>
                        <StyledMobileLink href="#" onClick={handleClose}>
                            home
                        </StyledMobileLink>
                        <StyledMobileLink href="#" onClick={handleClose}>
                            shop
                        </StyledMobileLink>
                        <StyledMobileLink href="#" onClick={handleClose}>
                            about
                        </StyledMobileLink>
                        <StyledMobileLink href="#" onClick={handleClose}>
                            contact
                        </StyledMobileLink>
                    </LinkContainer>
                </DrawerContent>
            </Drawer>
        </>
    );
};

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
