import * as React from 'react';
import styled from 'styled-components';



const URL: string = window.location.href;

const SocialShareButtons = styled.div`
    display: flex;
    align-items: flex-start;
    button {
        background: none;
        border: none;
    }
    a, button {
        margin-left: 10px;
        /* &:nth-child(2) {
            margin-left: 10px;
        } */
        width: 38px;
        height: 38px;
        min-width: 38px;
        min-height: 38px;
        cursor: pointer;
        /* border-radius: 100%; */
        transition: 450ms;
        background: transparent;
        &:hover {
            background: #0B01F5;
        }
        svg {
            pointer-events: none;
            width: 100%;
            height: 100%;
        }
    }
    @media screen and (max-height: 960px) {
        max-width: 167px;
        a, button {
            height: 38px;
            width: 38px;
        }
    }
    @media screen and (max-width: 960px) {
        margin-left: 40px;
        a, button {
            height: 22px;
            width: 22px;
            min-height: 22px;
            min-width: 22px;
        }
        .twitter {
            background: #00B2FF;
        }
        .facebook {
            background: #075AA7;
        }
    }
    @media screen and (max-width: 650px) {
        a, button {
            width: 38px;
            height: 38px;
            min-width: 38px;
            min-height: 38px;
        }
    }
    @media screen and (max-width: 575px) {
        margin-left: auto;
        a, button {
            height: 22px;
            width: 22px;
            min-height: 22px;
            min-width: 22px;
        }
        .twitter {
            background: #00B2FF;
        }
        .facebook {
            background: #075AA7;
        }
    }
`;


export default (({}) => {

    React.useEffect((): void => {
        initializeFacebookSharing();
    }, []);

    const facebookMessage: string = ``;

    const twitterMessage: string = encodeURI(``);

    const _shareOnFacebook: (e: React.MouseEvent) => void = (e) => {
        e.preventDefault();
        shareOnFacebook(facebookMessage, URL)
    };

    return (
        <SocialShareButtons className="socialShareButtons">
            <a onClick={_shareOnFacebook} role="button" className="facebook">
                <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.947 37">
                    <rect id="Rectangle_29" data-name="Rectangle 29" width="38.947" height="37" fill="#075aa7" opacity="0"/>
                    <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M11.895,11.56l.571-3.719H8.9V5.427a1.86,1.86,0,0,1,2.1-2.009h1.622V.251A19.784,19.784,0,0,0,9.736,0C6.8,0,4.876,1.781,4.876,5.006V7.84H1.609V11.56H4.876V20.55H8.9V11.56Z" transform="translate(11.466 8.122)" fill="#fff"/>
                </svg>

            </a>
            <a className="twitter" onClick={(e) => {e.preventDefault();window.open(`https://twitter.com/intent/tweet?&original_referer=${URL}/&text=${twitterMessage}&tw_p=tweetbutton&url=${URL}`,'popup','width=600,height=600,scrollbars=no,resizable=no'); return false;}} role="button">
                <svg id="Twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.947 37">
                    <rect id="Rectangle_30" data-name="Rectangle 30" width="38.947" height="37" fill="#00b2ff" opacity="0"/>
                    <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M18.024,7.447c.013.178.013.357.013.535A11.634,11.634,0,0,1,6.322,19.7,11.635,11.635,0,0,1,0,17.849a8.518,8.518,0,0,0,.994.051A8.246,8.246,0,0,0,6.106,16.14a4.125,4.125,0,0,1-3.85-2.855,5.192,5.192,0,0,0,.778.064,4.355,4.355,0,0,0,1.083-.14,4.118,4.118,0,0,1-3.3-4.041V9.117a4.146,4.146,0,0,0,1.861.523A4.123,4.123,0,0,1,1.4,4.133,11.7,11.7,0,0,0,9.892,8.441a4.648,4.648,0,0,1-.1-.943,4.121,4.121,0,0,1,7.126-2.817,8.106,8.106,0,0,0,2.613-.994,4.106,4.106,0,0,1-1.81,2.269,8.254,8.254,0,0,0,2.371-.637A8.85,8.85,0,0,1,18.024,7.447Z" transform="translate(9.429 6.546)" fill="#fff"/>
                </svg>

            </a>
        </SocialShareButtons>
    )
}) as SocialSharebuttonsComponent;

interface props {

};

type SocialSharebuttonsComponent = React.FC<props>;

function shareOnFacebook(message: string, URL: string): void {
    (window as any).FB.ui({
        method: 'share',
        display: 'popup',
        quote: message,
        href: URL,
    }, (response: {}): void => {});
};

function initializeFacebookSharing(): void {
    (window as any).fbAsyncInit = (): void => {
        (window as any).FB.init({
        appId            : '',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.2'
     });
    };
    ;((d: Document, s: string, id: string): void => {
        let js: HTMLScriptElement; 
        let fjs: Element = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        (js as HTMLElement) = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
};