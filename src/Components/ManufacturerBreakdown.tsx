import * as React from 'react';

import styled from 'styled-components';
import { Manufacturer, ManufacturerData } from '../data/trackingData';

const ManufacturerBreakdown = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .wrapper {
        flex: 1;
        overflow-y: auto;
        max-height: 100%;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
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
`;

const TrackedList = styled.div`
    
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* grid-template-rows: repeat(4, 1fr); */
    grid-column-gap: 0px;
    grid-row-gap: 30px;
    
    @media screen and (max-widtH: 1280px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-widtH: 995px) {
        grid-template-columns: repeat(3, 1fr);

    }
    @media screen and (max-widtH: 670px) {
        grid-template-columns: repeat(2, 1fr);

    }
    @media screen and (max-widtH: 500px) {
        grid-template-columns: repeat(1, 1fr);

    }
`;
const Tracked = styled.div<{colour: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    img {
        margin-right: 14px;
        border-radius: 100%;
        background-color: ${({colour}) => colour};
    }
    .label {
        font-size: 16px;
        color: #B9B9B9;
        line-height: 22px;
        margin-bottom: 3px;
    }
    .data {
        width: 140px;
        font-size: 24px;
        line-height: 22px;
    }
`;

export default (({manufacturer}) => {
    console.log(manufacturer)
    return (
        <ManufacturerBreakdown>
            <Title>
                <div className="logo">
                    <img src={require(`../images/${manufacturer.manufacturer}.svg`)} alt="" />
                </div>
                <div>
                    <h3>{manufacturer.manufacturer}</h3>
                    <p className="value light">Data Value <span className="demi">£{manufacturer.total}</span></p>
                </div>
            </Title>
            <div className="wrapper">
                <TrackedList>
                    {
                        Object.keys(manufacturer.data).map((key: keyof ManufacturerData) => {
                            if(!manufacturer.data[key])return;
                            return (
                                <Tracked key={manufacturer.manufacturer+'-'+key.toString()} colour={manufacturer.colour}>
                                    <img src={require(`../images/${key.toString()}.svg`)} />
                                    <div className="data">
                                        <p className="label">{key}</p>
                                        <p className="value demi">£{manufacturer.data[key]}</p>
                                    </div>
                                </Tracked>
                            )
                        })
                    }
                </TrackedList>
            </div>
        </ManufacturerBreakdown>
    )
}) as ManufacturerBreakdownComponent

interface props {
    manufacturer: Manufacturer
}
type ManufacturerBreakdownComponent = React.FC<props>;