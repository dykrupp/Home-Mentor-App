import { Button, makeStyles, Typography } from '@material-ui/core';
import { FC } from 'react';
import styled from 'styled-components';
import iconArrow from '../../assets/buttons/icon-arrow.svg';

export const TextCarousel: FC<TextCarouselProps> = ({ index }) => {
    const classes = useStyles();
    return (
        <Container>
            {index === 0 && (
                <Typography variant="h4">
                    Discover innovative ways to decorate
                </Typography>
            )}
            {index === 1 && (
                <>
                    <Typography variant="h4">We are available</Typography>
                    <Typography variant="h4">all across the globe</Typography>
                </>
            )}
            {index === 2 && (
                <>
                    <Typography variant="h4">Manufactured with</Typography>
                    <Typography variant="h4">the best materials </Typography>
                </>
            )}
            <Typography variant="body1">
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
            </Typography>
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
}

const Container = styled.div`
    width: 465px;
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
