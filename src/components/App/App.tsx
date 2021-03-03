import './App.css';
import { NavImageSlider } from '../NavImageSlider/NavImageSlider';
import { useState } from 'react';
import styled from 'styled-components';
import { TextCarousel } from '../TextCarousel/TextCarousel';
import { NavButtonContainer } from '../NavButtonContainer/NavButtonContainer';
import { AboutContainer } from '../AboutContainer/AboutContainer';

const App = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="App">
            <ColumnGrid>
                <MainRow>
                    <NavImageSlider index={index} />
                    <MainRowColumn>
                        <TextCarousel index={index} />
                        <NavButtonContainer index={index} setIndex={setIndex} />
                    </MainRowColumn>
                </MainRow>
                <AboutRow>
                    <AboutContainer />
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
    min-height: 534px;
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
