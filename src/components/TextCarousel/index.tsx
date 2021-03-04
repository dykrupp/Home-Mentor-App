import { Button, makeStyles, useTheme } from '@material-ui/core';
import { FC } from 'react';
import styled from 'styled-components';
import iconArrow from '../../assets/buttons/icon-arrow.svg';
import { ResponsiveH4 } from '../ResponsiveH4';
import { ResponsiveBody1 } from '../ResponsiveBody1';

export const TextCarousel: FC<TextCarouselProps> = ({ index, isMobile }) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Container
            style={{
                padding: isMobile ? '50px' : '100px',
            }}
        >
            {index === 0 && (
                <>
                    <ResponsiveH4 theme={theme} isMobile={isMobile}>
                        Discover innovative
                    </ResponsiveH4>
                    <ResponsiveH4 theme={theme} isMobile={isMobile}>
                        ways to decorate
                    </ResponsiveH4>
                </>
            )}
            {index === 1 && (
                <>
                    <ResponsiveH4 theme={theme} isMobile={isMobile}>
                        We are available
                    </ResponsiveH4>
                    <ResponsiveH4 theme={theme} isMobile={isMobile}>
                        all across the globe
                    </ResponsiveH4>
                </>
            )}
            {index === 2 && (
                <>
                    <ResponsiveH4 theme={theme} isMobile={isMobile}>
                        Manufactured with
                    </ResponsiveH4>
                    <ResponsiveH4 theme={theme} isMobile={isMobile}>
                        the best materials
                    </ResponsiveH4>
                </>
            )}
            <ResponsiveBody1 theme={theme} isMobile={isMobile}>
                {index === 0 &&
                    `We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.`}
                {index === 1 &&
                    `With stores all over the world, it's easy for you to find furniture 
                    for your home or place of business. Locally, we’re in most major cities 
                    throughout the country. Find the branch nearest you using our store locator. 
                    Any questions? Don't hesitate to contact us today. `}
                {index === 2 &&
                    `Our modern furniture store provide a high level of quality. Our company 
                has invested in advanced technology to ensure that every product is 
                made as perfect and as consistent as possible. With three decades of 
                experience in this industry, we understand what customers 
                want for their home and office. `}
            </ResponsiveBody1>
            <StyledButton
                classes={{ label: classes.buttonLabel }}
                endIcon={<img alt="arrow" src={iconArrow} />}
            >
                SHOP NOW
            </StyledButton>
        </Container>
    );
};

const useStyles = makeStyles({
    buttonLabel: {
        letterSpacing: '8px',
        justifyContent: 'flex-start',
    },
});

interface TextCarouselProps {
    index: number;
    isMobile: boolean;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
`;

const StyledButton = styled(Button)`
    width: 225px;
    padding: 0px !important;
    &:hover {
        opacity: 0.6;
        background-color: transparent !important;
    }
`;
