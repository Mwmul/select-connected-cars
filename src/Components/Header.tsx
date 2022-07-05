import * as React from 'react';
import styled from 'styled-components'
import Nav from './Nav';
import SocialShareButtons from './SocialShareButtons';

const Header = styled.div`
    max-width: 1250px;
    width: 100%;
    margin: 0 auto 45px auto;
    /* border: solid 1px salmon; */
    display: flex;
    align-items: center;
    .row {
        display: flex;
        align-items: center;
    }
    @media screen and (max-width: 1100px) {
        /* align-items: flex-start; */
    }

    @media screen and (max-width: 770px) {
        flex-direction: column;
        margin: 0 auto 25px auto;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;
    h1 {
        text-transform: uppercase;
        font-size: 40px;
        display: flex;
        align-items: center;
        svg {
            margin-right: 10px;
            width: 43px;
            height: 43px;
            min-width: 43px;
        }
    }
    p {
        max-width: 170px;
        color: #8BC322;
        font-size: 14px;
        line-height: 14px;
        margin-left: 10px;
    }
    @media screen and (max-width: 1135px) {
        flex-direction: column;
        p {
            max-width: 100%;
            margin-left: 0;
        }
        svg {
            /* display: none; */
        }
        p {
            /* display: none; */
        }
        h1 {
            margin-bottom: 3px;
            line-height: 37px;

        }
    }   
    @media screen and (max-width: 960px) {
        p {
            font-size: 12px;
        }
        h1 {
            font-size: 29px;
            svg {
                height: 28px;
                min-width: 28px;
                width: 28px;
            }
        }
    }
    @media screen and (max-width: 770px) {
        text-align: center;
        margin: 0 auto;
        margin-bottom: 10px;
    }
`;


const logoVectorMarkup: JSX.Element = (
    <svg xmlns="http://www.w3.org/2000/svg" width="43.439" height="43.439" viewBox="0 0 43.439 43.439">
        <g id="Group_107" data-name="Group 107" transform="translate(-282 -101)">
            <path id="Personal_Info_Icon" data-name="Personal Info Icon" d="M21.719,0A21.719,21.719,0,1,1,0,21.719,21.719,21.719,0,0,1,21.719,0Z" transform="translate(282 101)" fill="#0b01f5"/>
            <path id="Icon_awesome-car" data-name="Icon awesome-car" d="M23.976,9.871H21.105l-.8-1.995A5.344,5.344,0,0,0,15.321,4.5H9.231A5.345,5.345,0,0,0,4.244,7.876l-.8,1.995H.576a.575.575,0,0,0-.558.715l.288,1.151a.575.575,0,0,0,.558.436h.962a3.048,3.048,0,0,0-1.059,2.3v2.3a3.044,3.044,0,0,0,.767,2.011V21.38a1.535,1.535,0,0,0,1.535,1.535H4.6A1.535,1.535,0,0,0,6.138,21.38V19.845H18.414V21.38a1.535,1.535,0,0,0,1.535,1.535h1.535a1.535,1.535,0,0,0,1.535-1.535V18.787a3.042,3.042,0,0,0,.767-2.011v-2.3a3.049,3.049,0,0,0-1.058-2.3h.962a.575.575,0,0,0,.558-.436l.288-1.151a.576.576,0,0,0-.559-.715ZM7.094,9.016A2.3,2.3,0,0,1,9.231,7.569h6.09a2.3,2.3,0,0,1,2.137,1.447l.956,2.39H6.138l.956-2.39ZM4.6,16.766a1.448,1.448,0,0,1-1.535-1.53A1.448,1.448,0,0,1,4.6,13.707,2.952,2.952,0,0,1,6.905,16C6.905,16.919,5.524,16.766,4.6,16.766Zm15.345,0c-.921,0-2.3.153-2.3-.765a2.952,2.952,0,0,1,2.3-2.295,1.448,1.448,0,0,1,1.535,1.53,1.448,1.448,0,0,1-1.535,1.53Z" transform="translate(291.443 108.624)" fill="#fff"/>
        </g>
    </svg>
);

const headerCopy: string = `The car manufacturers that know the most about you`

export default (({}) => {
    return (
        <Header>
            <Logo>
                
                <h1 className="heay">{logoVectorMarkup} Connected Cars</h1>
                <p>{headerCopy}</p>
            </Logo>
            <div className="row">
                <Nav />
                <SocialShareButtons />
            </div>
        </Header>
    )
}) as HeaderComponent;

interface props {};
type HeaderComponent = React.FC<props>;