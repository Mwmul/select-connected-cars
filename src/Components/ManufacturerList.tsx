import * as React from 'react';
import styled from 'styled-components';
import { OnManufacturerSelect } from '../Containers/App';
import { Manufacturer, TrackingData } from '../data/trackingData';

const ManufacturerList = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 0px 15px 60px 0px;
    
    @media screen and (max-width: 770px) {
        padding: 0px 5px 20px 0px;
    }
`;

const Manufacturers = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* grid-template-rows: repeat(4, 1fr); */
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    
    .manufacturerContainer {
        padding: 25px 10px 25px 10px;
        border-bottom: solid 1px rgba(255,255,255,0.35);
        background: rgba(255,255,255,0);
        transition: 400ms;
        cursor: pointer;
        overflow-y: auto;
        &:hover {
            background: rgba(255,255,255,0.1);
        }
        .inner {
            max-width: 185px;
            text-align: center;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            .logo {
                transition: 600ms;
                transition-timing-function: ease-out;
                width: 110px;
                height: 110px;
                img {
                    width: 100%;
                    height: 100%;
                    transition: 1300ms;
                    transition-timing-function: ease-in-out;
                }
            }
            .name {
                font-size: 20px;
                margin-bottom: 5px;
                margin-top: 25px;
            }
            .stat {
                color: #B9B9B9;
                line-height: 22px;
                font-size: 16px;
                span {
                    color: white;
                    
                }
            }
        }
    }
    @media screen and (max-width: 1122px) {
        grid-template-columns: repeat(4, 1fr);

    }
    @media screen and (max-width: 910px) {
        grid-template-columns: repeat(3, 1fr);

    }
    @media screen and (max-width: 620px) {
        .manufacturerContainer { 
            .inner {
                .logo {
                    width: 90px;
                    height: 90px;
                    img {

                    }
                }
                .name {
                    font-size: 18px;
                    margin-top: 11px;
                }
                .stat {
                    font-size: 13px;
                    line-height: 19px;
                }

            }
        }
    }
    @media screen and (max-width: 530px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
`;




export default (({manufacturers, onManufacturerSelect}) => {


    const onClick = (index: number) => {
        const centerOfSCreen: {x: number, y: number} = {x:window.innerWidth / 2, y: window.innerHeight / 2 } ;

        const imageContainer: HTMLElement = document.getElementById(`logo-${index}`);
        const imageElement: HTMLElement = document.querySelector(`#logo-${index} img`);
        const {x, y, width, height} = imageContainer.getBoundingClientRect();

        const distanceFromCenter: {x: number, y: number} = {
            x: (centerOfSCreen.x - x) - width / 2,
            y: (centerOfSCreen.y - y) - height / 2
        }

        // console.log(distanceFromCenter);

        // imageContainer.style.transform = `translate(${distanceFromCenter.x}px, ${distanceFromCenter.y}px)`;

        // imageContainer.style.transform = `translate(${distanceFromCenter.x}px, ${distanceFromCenter.y}px)`;
        // setTimeout(() => {
            // imageElement.style.transform = 'scale(20)';
            // setTimeout(() => {
                onManufacturerSelect(manufacturers[index]);
            // },1400);
        // }, 250);
    }

    return (
        <ManufacturerList>
            <Manufacturers>
                {
                    manufacturers.map((manufacturer: Manufacturer, index: number) => {
                        return (
                            <div onClick={() => onClick(index)} className="manufacturerContainer" key={`manufacturer-${manufacturer.manufacturer}`}>
                                <div className="inner" >
                                    <div className="logo" id={`logo-${index}`}>
                                        <img src={require(`../images/${manufacturer.manufacturer}.svg`)} alt="" />
                                    </div>
                                    <p className="name demi">{index + 1}. {manufacturer.manufacturer}</p>
                                    <p className="stat">Data Tracked: <span className="demi">{manufacturer.tracked}</span> types</p>
                                    <p className="stat">Data Value: <span className="demi">£{manufacturer.total}</span></p>
                                </div>
                            </div>
                        )
                    })
                }
            </Manufacturers>
        </ManufacturerList>
    )
}) as ManufacturerListComponent

interface props {
    manufacturers: TrackingData,
    onManufacturerSelect: OnManufacturerSelect
}
type ManufacturerListComponent = React.FC<props>;