import * as React from 'react';
import styled from 'styled-components';
import Explanation from '../Components/Explanation';
import Header from '../Components/Header';
import ManufacturerBreakdown from '../Components/ManufacturerBreakdown';
import ManufacturerCarousel from '../Components/ManufacturerCarousel';
import ManufacturerList from '../Components/ManufacturerList';
import { Manufacturer, TrackingData } from '../data/trackingData';
import { StateHook } from '../global.types';

const App = styled.div`
    .outerBackground {
        background: url('${require('../images/bodyBackground.jpg')}');
		background-size: cover;
		min-height: 100vh;
		background-position: center;
        display: flex;
        align-items: center;
    }
    .metal {
        background: url('${require('../images/metal.jpg')}');
        background-size: cover;
        background-position: center;
        border-radius: 30px;
        padding: 10px;
        width: calc(100% - 80px);
        max-width: 1640px;
        height: calc(100vh - 80px);
        max-height: 1000px;
        margin: 0 auto;
        overflow: hidden;
        box-shadow: 0px 5px 21px 0px rgba(0,0,0,0.45);
    }
    .blackBackground {
        border-radius: 30px;
        background: black;
        padding: 20px;
        height: 100%;
        overflow: hidden;
        display: flex;
        > .inner {
            max-width: 100%;
            padding: 30px 6.5%;
            margin: 0 auto;
            flex: 1;
            display: flex;
            flex-direction: column;
            background-image: linear-gradient(to top, #1a1a1a, #1a1a1a, #1a1a1a, rgba(0,0,0,0));
            
        }
        .shadow {
            position: relative;
            display: flex;
            flex: 1;
            overflow: hidden;
            &:after {
                content: '';
                display: block;
                position: absolute;
                background: none;
                bottom: 0px;
                height: 100%;
                width: 100%;
                left: 0;
                pointer-events: none;
                z-index: 999;
                box-shadow: inset 0px -51px 65px 9px #1a1a1a;
            }
        }
    }

    @media screen and (max-width: 1250px) {
        .blackBackground > .inner {
            padding: 20px 2.5%;
        }
    }

    @media screen and (max-width: 770px) {
        .outerBackground {
            background: none;
        }
        .metal {
            padding: 15px;
            width: 100%;
            max-width: 1640px;
            height: 100vh;
            max-height: 100vh;
            padding: 0px;
            background: none;
            border-radius: 0px;
        }
        .blackBackground {
            border-radius: 0px;
            padding: 0px;
            > .inner {
                padding: 20px 30px;
                padding-bottom: 0px;
            }
            .shadow {
                &:after {
                    /* display: none; */
                }
            }
        }
    }
    @media screen and (max-width: 420px) {
        .blackBackground {
            padding: 0px;

        }
    }

    @media screen and (max-width: 350px) {
        .blackBackground > .inner {
            padding: 20px 10px;
        }
    }
    
`

export default (
    ({trackingData}) => {
        const [selectedManufacturerIndex, setSelectedManufacturer]: StateHook<number> = React.useState(null);

        const onManufacturerSelect: OnManufacturerSelect = index => {
            if(trackingData[index]) setSelectedManufacturer(index)
        };
        
        const selectedManufacturerData: Manufacturer = trackingData[selectedManufacturerIndex]

        return (
            <App>
                <div className="outerBackground">
                    <div className="metal">
                        <div className="blackBackground">
                            <div className="inner">

                                <Header />
                                {
                                    selectedManufacturerIndex === null
                                        ? (
                                            <>
                                                <Explanation trackedTypes={22} totalValue={'1594.79'} />
                                                <div className="shadow">
                                                    <ManufacturerList manufacturers={trackingData} onManufacturerSelect={onManufacturerSelect} />
                                                </div>
                                            </>
                                        )
                                        : (
                                            <>
                                                <ManufacturerBreakdown manufacturer={selectedManufacturerData} />
                                                <ManufacturerCarousel onManufacturerSelect={onManufacturerSelect} manufacturers={trackingData} selectedManufacturerIndex={selectedManufacturerIndex} />
                                            </>
                                        )
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </App>
        )
    }
) as AppComponent


interface props {
    trackingData: TrackingData
};
type AppComponent = React.FC<props>;

export type OnManufacturerSelect = (manufacturer: number) => void;