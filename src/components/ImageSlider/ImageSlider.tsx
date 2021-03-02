import { FC } from 'react';
import image1 from '../../assets/sliders/slider1.jpg';
import image2 from '../../assets/sliders/slider2.jpg';
import image3 from '../../assets/sliders/slider3.jpg';


interface ImageSliderProps {
    index: number;
}

export const ImageSlider: FC<ImageSliderProps> = ({
    index,
}) => {
    let imgSrc = image1;
    if (index === 1) imgSrc = image2;
    else if (index === 2) imgSrc = image3;

    return (
        <div style={{ width: '840px' }}>
            <img
                alt="home"
                src={imgSrc}
                style={{ height: '534px', width: '100%' }}
            />
        </div>
    );
};
