import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import leftArrow from '../../assets/buttons/icon-angle-left.svg';
import rightArrow from '../../assets/buttons/icon-angle-right.svg';

interface NavButtonContainerProps {
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const NavButtonContainer: FC<NavButtonContainerProps> = ({
    index,
    setIndex,
}) => {
    return (
        <ButtonWrapper>
            <StyledButton
                disabled={index === 0}
                onClick={() => setIndex(index - 1)}
                variant="contained"
                color="primary"
            >
                <img alt="left arrow" src={leftArrow} />
            </StyledButton>
            <StyledButton
                disabled={index >= 2}
                onClick={() => setIndex(index + 1)}
                variant="contained"
                color="primary"
            >
                <img alt="right arrow" src={rightArrow} />
            </StyledButton>
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.div`
    min-height: 80px;
    align-self: flex-start;
`;

const StyledButton = styled(Button)`
    height: 100%;
    border-radius: 0px !important;
    width: 80px;
`;
