import { useState } from 'react';
import styled from 'styled-components';
import logoImg from '../../assets/logo/logo.svg';
import { DesktopLink } from './DesktopLink';

export const DesktopOverlay = () => {
    const [highlightIndex, setHighlightIndex] = useState<null | number>(null);

    return (
        <>
            <DesktopLogoOverlay src={logoImg} />
            <DesktopLinkWrapper>
                <DesktopLinkContainer>
                    <DesktopLinkColumn>
                        <DesktopLink
                            index={0}
                            setHighlightIndex={setHighlightIndex}
                        >
                            home
                        </DesktopLink>
                        <LinkUnderlineContainer>
                            {highlightIndex === 0 && <LinkUnderline />}
                        </LinkUnderlineContainer>
                    </DesktopLinkColumn>
                    <DesktopLinkColumn>
                        <DesktopLink
                            index={1}
                            setHighlightIndex={setHighlightIndex}
                        >
                            shop
                        </DesktopLink>
                        <LinkUnderlineContainer>
                            {highlightIndex === 1 && <LinkUnderline />}
                        </LinkUnderlineContainer>
                    </DesktopLinkColumn>
                    <DesktopLinkColumn>
                        <DesktopLink
                            index={2}
                            setHighlightIndex={setHighlightIndex}
                        >
                            about
                        </DesktopLink>
                        <LinkUnderlineContainer>
                            {highlightIndex === 2 && <LinkUnderline />}
                        </LinkUnderlineContainer>
                    </DesktopLinkColumn>
                    <DesktopLinkColumn>
                        <DesktopLink
                            index={3}
                            setHighlightIndex={setHighlightIndex}
                        >
                            contact
                        </DesktopLink>
                        <LinkUnderlineContainer>
                            {highlightIndex === 3 && <LinkUnderline />}
                        </LinkUnderlineContainer>
                    </DesktopLinkColumn>
                </DesktopLinkContainer>
            </DesktopLinkWrapper>
        </>
    );
};

const DesktopLinkColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const LinkUnderlineContainer = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: center;
`;

const LinkUnderline = styled.div`
    display: flex;
    border-bottom: 2px solid white;
    flex: 0.3;
`;

const DesktopLinkWrapper = styled.div`
    position: absolute;
    top: 39px;
    left: 165px;
`;

const DesktopLogoOverlay = styled.img`
    position: absolute;
    top: 43px;
    left: 65px;
`;

const DesktopLinkContainer = styled.div`
    display: flex;
`;
