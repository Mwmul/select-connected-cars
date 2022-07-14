import { parseUrl } from 'query-string';
import * as React from 'react';
import styled from 'styled-components';
import DataTable from '../Components/DataTable';
import Explanation from '../Components/Explanation';
import Header from '../Components/Header';
import ManufacturerBreakdown from '../Components/ManufacturerBreakdown';
import ManufacturerCarousel from '../Components/ManufacturerCarousel';
import ManufacturerList from '../Components/ManufacturerList';
import { Manufacturer, TrackingData } from '../data/trackingData';
import { StateHook } from '../global.types';
import useWindowSize from '../utils/useWindowSize';

const App = styled.div<{windowHeight: number}>`
    &.data-view {
        @media screen and (max-width: 770px) {
            .explanation {
                display: none;
            }
        }
    }
    .outerBackground {
        background: url('${require('../images/bodyBackground.jpg')}');
		background-size: cover;
		min-height: ${({windowHeight}) => windowHeight}px;
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
        height: calc(${({windowHeight}) => windowHeight}px - 80px);
        max-height: 1000px;
        margin: 0 auto;
        /* overflow: hidden; */
        box-shadow: 0px 5px 21px 0px rgba(0,0,0,0.45);
    }
    .blackBackground {
        border-radius: 30px;
        background: black;
        padding: 20px;
        height: 100%;
        /* overflow: hidden; */
        display: flex;
        > .inner {
            max-width: 100%;
            padding: 30px 6.5%;
            padding-bottom: 10px;
            margin: 0 auto;
            flex: 1;
            display: flex;
            flex-direction: column;
            background-image: linear-gradient(to top, #151515, #151515, #151515, rgba(0,0,0,0));
            border-radius: 30px;
            /* overflow: hidden; */
            
        }
        /* .shadow {
            position: relative;
            display: flex;
            flex: 1;
            overflow: hidden;
            &:after {
                content: '';
                display: block;
                position: absolute;
                background: none;
                bottom: -5px;
                height: 100%;
                width: 100%;
                left: 0;
                pointer-events: none;
                z-index: 999;
                box-shadow: inset 0px -51px 65px 9px #151515;
            }
        } */
    }

    @media screen and (max-width: 1250px) {
        .blackBackground > .inner {
            padding: 20px 2.5%;
            padding-bottom: 10px;
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
            height: ${({windowHeight}) => windowHeight}px;
            max-height: ${({windowHeight}) => windowHeight}px;
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
                /* background-image: linear-gradient(to top, #151515, #151515, #151515, #151515, rgba(0,0,0,0)); */
                background: #1a1a1a;
                border-radius: 0px;
            }
            .shadow {
                &:after {
                    /* display: none; */
                    box-shadow: inset 0px -5px 65px 9px #151515;

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

// const TableKey = styled.div`
//     display: flex;
//     padding-left: 200px;
// `;

export default (
    ({trackingData}) => {
        const [selectedManufacturerIndex, setSelectedManufacturer]: StateHook<number> = React.useState(null);
        const [showData, setShowData]: StateHook<boolean> = React.useState(false);

        const onManufacturerSelect: OnManufacturerSelect = index => {
            if(!trackingData[index]) return;
            if(trackingData[index]) setSelectedManufacturer(index);
            if(showData) setShowData(false);
            window.location.hash = trackingData[index].manufacturer;
        };
        
        const selectedManufacturerData: Manufacturer = trackingData[selectedManufacturerIndex]

        const {height} = useWindowSize();

        React.useEffect(() => {
            window.addEventListener('hashchange', (evt) => {
                // console.log(window.location.hash, evt);
                const parsedHash = decodeURI(window.location.hash).replace('#', '');

                console.log(parsedHash)

                if(parsedHash === 'data') {
                    setShowData(true);
                    return ;
                }


                setShowData(false)


                if(!window.location.hash || parsedHash === 'home') {
                    setSelectedManufacturer(null);

                    return;
                }


                const selectedManufacturer = trackingData.findIndex(manufacturer => manufacturer.manufacturer === parsedHash);


                if(trackingData[selectedManufacturer]) {
                    if(selectedManufacturerIndex !== selectedManufacturer) {
                        setSelectedManufacturer(selectedManufacturer);
                    }
                }
                


            }, false);
            window.location.hash = '';
        }, []);


        const navHighlight: NavHighlight = showData ? 'data' : selectedManufacturerIndex >=1 ? 'none' : 'manufacturers'

        return (
            <App windowHeight={height} className={showData ? 'data-view' : ''}>
                <div className="outerBackground">
                    <div className="metal">
                        <div className="blackBackground">
                            <div className="inner">

                                <Header navHighlight={navHighlight} />
                                {
                                    showData
                                        ? (
                                            <>
                                                
                                                {/* <TableKey>
                                                    {
                                                        trackingData.map(manufacturer => (
                                                            <div>
                                                                <img src={require(`../images/${manufacturer.manufacturer}.svg`)} alt="" />
                                                            </div>
                                                        ))
                                                    }
                                                </TableKey> */}
                                                <DataTable data={trackingData} onManufacturerSelect={onManufacturerSelect} />
                                            </>
                                        )
                                        :   selectedManufacturerIndex === null
                                                ? (
                                                    <>
                                                        <Explanation trackedTypes={22} totalValue={'1594.79'} />
                                                        {/* <div className="shadow"> */}
                                                            <ManufacturerList manufacturers={trackingData} onManufacturerSelect={onManufacturerSelect} />
                                                        {/* </div> */}
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

export type NavHighlight = 'manufacturers' | 'data' | 'none'