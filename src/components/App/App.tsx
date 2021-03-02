import './App.css';
import { Button } from '@material-ui/core';
import leftArrow from '../../assets/buttons/icon-angle-left.svg';
import rightArrow from '../../assets/buttons/icon-angle-right.svg';
import { ImageSlider } from '../ImageSlider/ImageSlider';
import { useState } from 'react';
import styled from 'styled-components';
import { TextCarousel } from '../TextCarousel/TextCarousel';

const App = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="App">
            <ColumnGrid>
                <MainRow>
                    <ImageSlider index={index} />
                    <div
                        style={{
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <TextCarousel index={index} />
                        {/* <Button>{`S H O P    N O W`}</Button> */}
                        <div
                            style={{
                                minHeight: '80px',
                                alignSelf: 'flex-start',
                            }}
                        >
                            <Button
                                disabled={index === 0}
                                onClick={() => setIndex(index - 1)}
                                variant="contained"
                                color="primary"
                                style={{
                                    height: '100%',
                                    borderRadius: '0px',
                                    width: '80px',
                                }}
                            >
                                <img alt="left arrow" src={leftArrow} />
                            </Button>
                            <Button
                                disabled={index >= 2}
                                onClick={() => setIndex(index + 1)}
                                variant="contained"
                                color="primary"
                                style={{
                                    height: '100%',
                                    borderRadius: '0px',
                                    width: '80px',
                                }}
                            >
                                <img alt="right arrow" src={rightArrow} />
                            </Button>
                        </div>
                    </div>
                </MainRow>
                <div style={{ display: 'flex', flex: 1 }}>
                    <div
                        style={{
                            backgroundColor: 'purple',
                            flex: 1.5,
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: 'pink',
                            flex: 1,
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: 'yellow',
                            flex: 1,
                        }}
                    ></div>
                </div>
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
