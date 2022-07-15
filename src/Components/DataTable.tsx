import * as React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { OnManufacturerSelect } from '../Containers/App';
import { ManufacturerData, TrackingData, tooltipCopy } from '../data/trackingData';
import Explanation from './Explanation';

const DataTable = styled.div`
    
    height: 100%;
    flex: 1;
    /* display: flex; */
    /* flex-direction: column; */
    overflow: scroll;
    overscroll-behavior: contain;
    position: relative;
    display: grid;
    grid-template-areas: 
    "none  top top"
    "stats icons icons"
    "stats icons icons"; 
    gap: 0px 0px; 
    margin-bottom: 20px;
    padding-bottom: 20px;
    .manufacturerLogos {
        display: flex;
        position: sticky;
        top: 0;
        padding-top: 5px;
        height: 55px;
        grid-area: top;
        background: #151515;
        @media screen and (max-width: 770px) {
            background: #1a1a1a
        }
        div {
            /* margin-right: 13px; */
            height: 50px;
            width: 50px;
            min-width: 50px;
            min-height: 50px;
            text-align: center;
            cursor: pointer;
            img {
                width: 40px;
                height: 40px;
                box-shadow: 0px 0px 0px 0px rgba(255,255,255,1);
                transition: 450ms;
                cursor: pointer;
                transform-origin: center;
                border-radius: 100%;
                
            }
            &:hover {
                img {

                    box-shadow: 0px 0px 0px 2px rgba(255,255,255,1);
                }

                }
            .tooltip {

            }
            
        }
    }
    .blank {
        
        grid-area: none;
        background: #151515;
        z-index: 999;
        position: sticky;
        display: block;
        top: 0;
        left: 0;
        width: 150px;
        height: 50px;
        @media screen and (max-width: 770px) {
            background: #1a1a1a
        }
    }
    .stats {
        grid-area: stats;
        background-color: #151515;
        @media screen and (max-width: 770px) {
            background: #1a1a1a
        }
        background-image: linear-gradient(to top,#151515,#151515,#151515,rgba(0,0,0,0));
        position: sticky;
        left: 0;
        display: block;
        width: 150px;
        &:before {
            /* position: absolute; */
            /* content: ''; */
            /* display: block; */
            top: 0;
            transform: translateY(-100%);
            left: 0;
            width: 150px;
            height: 50px;
            background: #151515;
        }
        .stat {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            .copy {
                font-size: 14px;
                .label {
                    color: white;
                    text-transform: capitalize;
                }
            }
            .icon {
                position: relative;
          
            }
            img {
                margin-right: 10px;
                height: 24px;
                background: #0B01F5;
                border-radius: 100%;
                width: 24px;
            }
            border-bottom: solid 1px rgba(255,255,255,0.4);

        }
    }
    .icons {
        display: flex;
        grid-area: icons;
    }
`;


const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    
    

`;

const TableCol = styled.div`
    &.right-col {
        /* overflow-x: auto; */
        display: flex;
    }
    &.stats {
        width: 150px;
        min-width: 150px;
    }
    .manufacturerIcon {
        /* margin-right: 13px; */
        height: 50px;
        width: 50px;
        min-width: 50px;
        min-height: 50px;
        display: block;
        position: sticky;
        border-radius: 100%;
        overflow: hidden;
        top: 0;
        left: 0;
            cursor: pointer;

        img {
            width: 100%;
            height: 100%;
        }
    }
    &.manufacturerColumn {
        display: flex;
        flex-direction: column;
        min-width: 50px;
        max-width: 50px;
        .icon-container {
            height: 50px;
            width: 50px;
            min-width: 50px;
            min-height: 50px;
            display: flex;
            border-bottom: solid 1px rgba(255,255,255,0.4);
            svg {
                display: block;
                margin: auto auto;
                width: 20px;
                height: 20px;
            }
        }
    }
`;


const TooltipAnchor = styled.div`
    width: 16px;
    height: 16px;
    display: inline-block;
    cursor: pointer;
    position: absolute;
    border-radius: 100%;
    top: 0;
    right: 0;
    transform: translate(-20%, -45%);
    svg {
        height: 100%;
        width: 100%;
        border: solid 1px white;
        border-radius: 100%;
    }
`;

export default (({data, onManufacturerSelect}) => {
    return (
        <>
            <Explanation trackedTypes={22} totalValue={'1594.79'}/>
            <DataTable>
                {/* <TableContainer id="tableContainer"> */}
                    <div className="manufacturerLogos">
                        {
                            data.map((manufacturer, index) =>  (
                                <div className="manufacturerIcon" onClick={() => onManufacturerSelect(index)}>
                                    <img src={require(`../images/${manufacturer.manufacturer}.svg`)} alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="stats">
                        {
                            Object.keys(dataCosts).map((key: string) => (
                                <div className="stat">
                                    <div className="icon">
                                        <img src={require(`../images/${key}.svg`)} alt="" />
                                        {
                                            tooltipCopy[key].toLowerCase().replace('.','') !== key.toLocaleLowerCase() && (
                                                <TooltipAnchor data-tip={tooltipCopy[key]} data-for='data-type-tooltip' data-place="right" data-effect="solid">
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
                                                </TooltipAnchor>
                                            )
                                        }
                                    </div>
                                    <div className="copy">
                                        <p className="label">{key}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="blank"></div>
                    <div className="icons">
                        {
                            data.map(manufacturer => (
                                <TableCol className="manufacturerColumn">
                                    {
                                        Object.keys(manufacturer.data).map((key: keyof ManufacturerData) => {   
                                            const value: number = manufacturer.data[key];
                                            return (
                                                <div className="icon-container">
                                                    {
                                                        value 
                                                            ? (
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#71ad00"/><path d="M4663.756,483.709l3.971,3.971,8.241-8.241" transform="translate(-4659.868 -473.327)" fill="none" stroke="#fff" stroke-width="2"/></svg>
                                                            )
                                                            : (
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#d70021"/><path d="M4667.331,487.679l8.241-8.241" transform="translate(-4661.452 -473.327)" fill="none" stroke="#fff" stroke-width="2"/><path d="M0,8.241,8.241,0" transform="translate(5.879 14.352) rotate(-90)" fill="none" stroke="#fff" stroke-width="2"/></svg>
                                                            )
                                                    }
                                                </div>
                                            )
                                        
                                        })
                                    }
                                </TableCol>
                            ))
                        }
                    </div>
                   {/*  <TableCol className="stats">
                        <TableRow />
                        {
                            Object.keys(data[0].data).map((stat: keyof ManufacturerData) => (
                                <TableRow key={`left-col-${stat}`} className="statContainer">
                                    <div className="copy">
                                        <p className="label">{stat}</p>
                                        <p className="value">£{data[0].data[stat]}</p>
                                    </div>
                                </TableRow>
                            ))
                        }
                    </TableCol>
                    <TableCol className="right-col">
                        {
                            data.map(manufacturer => (
                                <TableCol className="manufacturerColumn">
                                    <div className="manufacturerIcon">
                                        <img src={require(`../images/${manufacturer.manufacturer}.svg`)} alt="" />

                                    </div>
                                    {
                                        Object.keys(manufacturer.data).map((key: keyof ManufacturerData) => {   
                                            const value: number = manufacturer.data[key];
                                            return (
                                                <div className="icon-container">
                                                    {
                                                        value 
                                                            ? (
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#71ad00"/><path d="M4663.756,483.709l3.971,3.971,8.241-8.241" transform="translate(-4659.868 -473.327)" fill="none" stroke="#fff" stroke-width="2"/></svg>
                                                            )
                                                            : (
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#d70021"/><path d="M4667.331,487.679l8.241-8.241" transform="translate(-4661.452 -473.327)" fill="none" stroke="#fff" stroke-width="2"/><path d="M0,8.241,8.241,0" transform="translate(5.879 14.352) rotate(-90)" fill="none" stroke="#fff" stroke-width="2"/></svg>
                                                            )
                                                    }
                                                </div>
                                            )
                                        
                                        })
                                    }
                                </TableCol>
                            ))
                        }
                        
                    </TableCol> */}
                    {/* <div style={{height: '1500px', background: 'salmon'}}></div> */}
                {/* </TableContainer> */}
                <ReactTooltip id='data-type-tooltip'  />

            </DataTable>
            
        </>
    )
}) as DataTableComponent


interface props {
    data: TrackingData,
    onManufacturerSelect: OnManufacturerSelect
}

type DataTableComponent = React.FC<props>;


export const dataCosts: {
    [key: string]: number
} = {
    "personal details": 0.12,
    "contact info": 52.32,
    "finance info": 80.49,
    "infotainment system data": 262.73,
    "Mobile app information": 0.78,
    "Social media": 29.51,
    "online activity": 72.49,
    "order information": 72.49,
    "customer activity": 72.49,
    "vehicle details": 72.49,
    "vehicle data": 72.49,
    "charging info":  72.49,
    "Autopilot data":  72.49,
    "Service & repair history":  72.49,
    "accidents & collisions":  72.49,
    "Location":  72.49,
    "Photos & videos":  72.49,
    "Voice recordings":  72.49,
    "Interests":  72.49,
    "Insurance details":  72.49,
    "driving history":  72.49,
    "company info":  72.49
}