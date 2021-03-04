import { Link, useMediaQuery } from '@material-ui/core';
import { FC } from 'react';
import styled from 'styled-components';

interface DesktopLinkProps {
    children: React.ReactNode;
}

export const DesktopLink: FC<DesktopLinkProps> = ({ children }) => {
    const reduceLinkSize = useMediaQuery('(max-width: 600px)');
    return (
        <StyledDesktopLink
            href="#"
            style={{
                fontSize: reduceLinkSize ? '16px' : '18px',
            }}
        >
            {children}
        </StyledDesktopLink>
    );
};

const StyledDesktopLink = styled(Link)`
    align-items: center;
    display: flex;
    font-weight: 700;
    color: white !important;
    text-underline-offset: 10px;
    margin: 0px 7px !important;
`;
