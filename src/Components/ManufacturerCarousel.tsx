import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import styled, { css } from 'styled-components';
import { OnManufacturerSelect } from '../Containers/App';
import { Manufacturer, TrackingData } from '../data/trackingData';

const ManufacturerCarousel = styled.nav`
    height: 40px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 0px;
    .carouselContainer {
        width: 100%;
        max-width: 540px;
        overflow-x: hidden;
        height: 40px;
        margin: 0 10px;
    }
    @media (max-height: 950px), (max-width: 1460px) {
        margin-bottom: 20px;
    }
`;

const List = styled.ul<{carouselTransformX: number}>`
    display: flex;
    align-items: center;
    height: 40px;
    transform: translateX(calc(50% + -${({carouselTransformX}) => (carouselTransformX)}px));
    transition: 300ms; transition-timing-function: ease;
`;

const ListItem = styled.li<{selected: boolean}>`
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
    margin-left: 20px;
    border-radius: 100%;
    box-shadow: 0px 0px 0px 0px rgba(255,255,255,1);
    transition: 450ms;
    cursor: pointer;
    transform-origin: center;
    &:hover {

        box-shadow: 0px 0px 0px 2px rgba(255,255,255,1);
        
    }
    ${({selected}) => selected && css`
    
        box-shadow: 0px 0px 0px 4px rgba(255,255,255,1) !important;
    `}

    
    &:first-of-type {
        margin-left: 5px;
    }
    img {
        height: 100%;
        width: 100%;
    }
`;

const Arrow = styled.button<{shouldShow: boolean}>`
    height: 13px;
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    ${({shouldShow}) => !shouldShow && css`
        opacity: 0.3;
        cursor: not-allowed;
    `}
    img {
        height: 100%;
        pointer-events: none;
    }
    &:last-of-type {
        img {
            transform: scaleX(-1);
        }
    }
`;

export default (({manufacturers, selectedManufacturerIndex, onManufacturerSelect}) => {

    const carouselTransformX: number = (selectedManufacturerIndex * 50) + 20;

    return (
        <ManufacturerCarousel>
            <Arrow shouldShow={selectedManufacturerIndex > 0} onClick={() => onManufacturerSelect(selectedManufacturerIndex - 1)}>
                <img src={require('../images/carrot-left.svg')} alt="" />
            </Arrow>
            <div className="carouselContainer">
                <List carouselTransformX={carouselTransformX}>
                    {
                        manufacturers.map((manufacturer: Manufacturer, index: number) => {
                            return (
                                <ListItem
                                    key={`carousel-item-for-${manufacturer.manufacturer}`} 
                                    selected={index === selectedManufacturerIndex} 
                                    onClick={() => onManufacturerSelect(index)}
                                    data-tip={manufacturer.manufacturer} 
                                    data-for='carousel-manufacturer-tooltip' 
                                    data-place="bottom" 
                                    data-effect="solid"
                                >
                                    <img src={require(`../images/${manufacturer.manufacturer}.svg`)} />
                                </ListItem>
                            )
                        }) 
                    }
                </List>
            </div>
            <Arrow shouldShow={selectedManufacturerIndex < manufacturers.length - 1} onClick={() => onManufacturerSelect(selectedManufacturerIndex + 1)}>
                <img src={require('../images/carrot-left.svg')} alt="" />
            </Arrow>
            <ReactTooltip id='carousel-manufacturer-tooltip'  />
        </ManufacturerCarousel>
    )
}) as ManufacturerCarouselComponent

interface props {
    manufacturers: TrackingData,
    selectedManufacturerIndex: number,
    onManufacturerSelect: OnManufacturerSelect
}
type ManufacturerCarouselComponent = React.FC<props>;