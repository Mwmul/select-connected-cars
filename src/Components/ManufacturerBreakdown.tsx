import * as React from 'react';

import styled from 'styled-components';
import { Manufacturer, ManufacturerData, tooltipCopy } from '../data/trackingData';
import ReactTooltip from 'react-tooltip';
import { tooltip } from 'leaflet';


const ManufacturerBreakdown = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .wrapper {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 100%;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
    .logo {
        height: 110px;
        width: 110px;
        margin-right: 20px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    h3 {
        font-size: 50px;
        line-height: 68px;
        text-transform: uppercase;
    }
    .value {
        font-size: 26px;
        line-height: 22px;
        color: #B9B9B9;
        span {
            color: white;
            margin-left: 4px;
            border-bottom: solid 2px #0931F5;
        }
    }
    @media screen and (max-width: 570px) {
        margin-right: auto;
        margin-bottom: 20px;
        h3 {
            font-size: 33px;
            line-height: 35px;
        }
        .logo {
            height: 73px;
            width: 73px;
        }
        .value {
            font-size: 16px;
        }
    }
`;

const TrackedList = styled.div`
    
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* grid-template-rows: repeat(4, 1fr); */
    grid-column-gap: 0px;
    grid-row-gap: 30px;
    
    @media screen and (max-widtH: 1400px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-widtH: 1100px) {
        grid-template-columns: repeat(3, 1fr);

    }
    @media screen and (max-widtH: 850px) {
        grid-template-columns: repeat(2, 1fr);

    }
    @media screen and (max-widtH: 550px) {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 20px;
    }
`;
const Tracked = styled.div<{colour: string}>`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px 5px;
    margin: 0;
    img {
        margin-right: 14px;
        border-radius: 100%;
        background-color: ${({colour}) => colour};
    }
    .label {
        font-size: 16px;
        color: white;
        line-height: 22px;
        margin-bottom: 3px;
        text-transform: capitalize;
    }
    .description {
        font-size: 13px;
        color: #B9B9B9;
        line-height: 22px;
    }
    .data {
        width: 140px;
        font-size: 24px;
        line-height: 22px;
    }

    .image {
        
        position: relative;
    }
    @media screen and (max-widtH: 550px) {
        padding: 0;
        .data {
            width: auto;
        }
    }

`;



const TooltipAnchor = styled.div`
    width: 18px;
    height: 18px;
    display: inline-block;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, -0%);
`;

export default (({manufacturer}) => {
    return (
        <ManufacturerBreakdown key={`breakdown-of-${manufacturer.manufacturer}`}>
            <Title>
                <div className="logo">
                    <img src={require(`../images/${manufacturer.manufacturer}.svg`)} alt="" />
                </div>
                <div>
                    <h3>{manufacturer.manufacturer}</h3>
                    <p className="value light">Data Value Per Driver: <span className="demi">£{manufacturer.total}</span></p>
                </div>
            </Title>
            <div className="wrapper">
                <TrackedList>
                    {
                        Object.keys(manufacturer.data).map((key: keyof ManufacturerData) => {
                            if(!manufacturer.data[key])return;
                            return (
                                <Tracked key={manufacturer.manufacturer+'-'+key.toString()} colour={manufacturer.colour}>
                                    <div className="image">
                                        <img src={require(`../images/${key.toString()}.svg`)} />
                                        {/* <TooltipAnchor data-tip={tooltipCopy[key]} data-for='data-type-tooltip' data-place="right" data-effect="solid">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                                                <defs>
                                                    <clipPath id="clip-path">
                                                    <rect id="Rectangle_37" data-name="Rectangle 37" width="4.032" height="10.91" fill="#fff"/>
                                                    </clipPath>
                                                </defs>
                                                <g id="Info_Icon" data-name="Info Icon" transform="translate(-4861.481 365.519)">
                                                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="9" cy="9" r="9" transform="translate(4861.481 -365.519)" fill="#0b01f5"/>
                                                    <g id="Group_50" data-name="Group 50" transform="translate(4868.473 -362.143)">
                                                    <g id="Group_49" data-name="Group 49" clipPath="url(#clip-path)">
                                                        <path id="Path_96" data-name="Path 96" d="M3.18,307.011h.853V308.6H0v-1.589H.853a.2.2,0,0,0,.2-.2v-3.693a.2.2,0,0,0-.2-.2H.027v-1.589h2.95v5.484a.2.2,0,0,0,.2.2" transform="translate(0 -297.69)" fill="#fff" fillRule="evenodd"/>
                                                        <path id="Path_97" data-name="Path 97" d="M38.844,0a1.331,1.331,0,1,1-1.331,1.331A1.331,1.331,0,0,1,38.844,0" transform="translate(-37.061)" fill="#fff" fillRule="evenodd"/>
                                                    </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </TooltipAnchor> */}
                                    </div>
                                    <div className="data">
                                        <p className="label">{key}</p>
                                        {
                                            tooltipCopy[key].toLowerCase().replace('.','') !== key.toLocaleLowerCase() && (
                                                <div className="description">{tooltipCopy[key]}</div>                                        
                                            )
                                        }
                                    </div>
                                    
                                </Tracked>
                            )
                        })
                    }
                </TrackedList>
            </div>
            <ReactTooltip id='data-type-tooltip'  />

        </ManufacturerBreakdown>
    )
}) as ManufacturerBreakdownComponent

interface props {
    manufacturer: Manufacturer
}
type ManufacturerBreakdownComponent = React.FC<props>;


