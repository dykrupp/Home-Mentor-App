import { Link, useMediaQuery } from '@material-ui/core';
import { FC } from 'react';
import styled from 'styled-components';

interface DesktopLinkProps {
    children: React.ReactNode;
    index: number;
    setHighlightIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export const DesktopLink: FC<DesktopLinkProps> = ({
    children,
    index,
    setHighlightIndex,
}) => {
    const reduceLinkSize = useMediaQuery('(max-width: 600px)');
    return (
        <StyledDesktopLink
            onMouseEnter={() => setHighlightIndex(index)}
            onMouseLeave={() => setHighlightIndex(null)}
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
    text-decoration: none !important;
    margin: 0px 7px !important;
`;
