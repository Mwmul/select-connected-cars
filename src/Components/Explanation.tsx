import * as React from 'react';
import styled from 'styled-components';

const Explanation = styled.div`
    width: 100%;
    max-width: 810px;
    margin: 0 auto 50px auto;
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
     
    }
`;

const Copy = styled.p`
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 25px;
`;


const copyText: string = `Select Car Leasing reveals which car manufacturers collect the most data on their customers and the data’s potential value by analysing their privacy and data policies.`

export default (({trackedTypes = 22, totalValue = '1,500.54'}) => {
    return (
        <Explanation>
            <Copy>{copyText}</Copy>
            <Stats>
                <p className="demi">Potential Data Collected</p>
                <p>Data Tracked: <span className="demi">{trackedTypes}</span> types</p>
                <p>Data Value: <span className="demi">£{totalValue}</span></p>
            </Stats>
        </Explanation>
    )
}) as ExplanationComponent

interface props {
    totalValue: string,
    trackedTypes: number
};
type ExplanationComponent = React.FC<props>;