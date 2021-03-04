import './App.css';
import { NavImageSlider } from '../NavImageSlider';
import { useState } from 'react';
import styled from 'styled-components';
import { TextCarousel } from '../TextCarousel';
import { NavButtonContainer } from '../NavButtonContainer';
import { AboutContainer } from '../AboutContainer/AboutContainer';
import useMobileQuery from '../../mediaQueries/useMobileQuery';
import useLargeDesktopQuery from '../../mediaQueries/useLgDesktopQuery';
import { useMediaQuery } from '@material-ui/core';

const App = () => {
    const [index, setIndex] = useState(0);

    const isMobile = useMobileQuery();
    const isLgDesktop = useLargeDesktopQuery();
    const aboutColumnQuery = useMediaQuery('(max-width:1250px)');
    const isMediumScreen = !isMobile && !isLgDesktop;


    return (
        <div className="App">
            <ColumnGrid>
                <MainRow
                    style={{
                        flexDirection:
                            isMobile || isMediumScreen ? 'column' : 'row',
                    }}
                >
                    <NavImageSlider
                        index={index}
                        setIndex={setIndex}
                        isMediumScreen={isMediumScreen}
                        isMobile={isMobile}
                    />
                    <MainRowColumn>
                        <TextCarousel index={index} isMobile={isMobile} />
                        {isLgDesktop && (
                            <NavButtonContainer
                                index={index}
                                setIndex={setIndex}
                            />
                        )}
                    </MainRowColumn>
                </MainRow>
                <AboutRow
                    style={{
                        flexDirection: isMobile || aboutColumnQuery ? 'column' : 'row',
                    }}
                >
                    <AboutContainer isMobile={isMobile} />
                </AboutRow>
            </ColumnGrid>
        </div>
    );
};

export default App;

const ColumnGrid = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const MainRow = styled.div`
    display: flex;
    flex: 1;
`;

const MainRowColumn = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`;

const AboutRow = styled.div`
    display: flex;
    flex: 1;
    min-height: 266px;
`;
