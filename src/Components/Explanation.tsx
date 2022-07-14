import * as React from 'react';
import styled from 'styled-components';

const Explanation = styled.div`
    width: 100%;
    max-width: 810px;
    margin: 0 auto 35px auto;
    @media screen and (max-width: 770px) {
        margin: 0 auto 30px auto;
    }
    @media screen and (max-width: 373px) {
        margin-bottom: 15px;
    }
`;

const Stats = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 66px;
    background: #0B01F5;
    border-radius: 50px;
    p {
        font-size: 20px;
        text-align: center;
        padding: 0px 5px;
     
    }
    @media screen and (max-width: 770px) {
        padding: 13px 11px;
        border-radius: 6px;
        flex-wrap: wrap;
        justify-content: space-around;
        p {
            font-size: 14px;
            &:nth-child(1) {
                margin-bottom: 5px;
                widtH: 100%;
            }
        }
    }

    @media screen and (max-width: 373px) {
        padding: 10px 5px;
        p {
            font-size: 13px;
        }

    }
`;

const Copy = styled.p`
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 25px;
    @media screen and (max-width: 770px)  {
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 18px;
    }
    @media screen and (max-width: 373px) {
        font-size: 11px;
        margin-bottom: 10px;
    }
`;


const copyText: string = `Select Car Leasing reveals which car manufacturers collect the most data on their customers and the data’s potential value by analysing their privacy and data policies.`

export default (({trackedTypes = 22, totalValue = '1,500.54'}) => {
    return (
        <Explanation className="explanation">
            <Copy>{copyText}</Copy>
            <Stats>
                <p className="demi">Potential Data Collected</p>
                <p>Data Tracked: <span className="demi">{trackedTypes}</span> Types</p>
                <p>Data Value: <span className="demi">£{Number(totalValue).toLocaleString()}</span></p>
            </Stats>
        </Explanation>
    )
}) as ExplanationComponent

interface props {
    totalValue: string,
    trackedTypes: number
};
type ExplanationComponent = React.FC<props>;