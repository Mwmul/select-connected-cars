import * as React from 'react';
import styled from 'styled-components';

const Nav = styled.nav``;

const NavList = styled.ul`
    display: flex;
    align-items: center;
`;

const NavListItem = styled.li`
    &:nth-child(1) {
        margin-right: 10px;
    }
    a {
        display: flex;
        align-items: center;
        padding: 10px 16px;
        transition: 450ms;
        &:hover {
            background: #0B01F5;
        }
        svg {
            height: 14px;
            width: 14px;
            margin-right: 10px;
        }
    }
`;



const manufacturerVectorMarkup: JSX.Element = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14.943" height="14.943" viewBox="0 0 14.943 14.943">
        <g id="Group_95" data-name="Group 95" transform="translate(0)">
            <rect id="Rectangle_40" data-name="Rectangle 40" width="3.275" height="3.574" transform="translate(0 5.684)" fill="#fff"/>
            <rect id="Rectangle_41" data-name="Rectangle 41" width="3.275" height="3.275" transform="translate(11.668 0)" fill="#fff"/>
            <path id="Path_99" data-name="Path 99" d="M51.129,51.127V54.4H54.4V51.127H51.129" transform="translate(-39.461 -39.46)" fill="#fff"/>
            <rect id="Rectangle_42" data-name="Rectangle 42" width="3.275" height="3.574" transform="translate(11.667 5.684)" fill="#fff"/>
            <path id="Path_100" data-name="Path 100" d="M3.275,51.127H0V54.4H3.275V51.127" transform="translate(0 -39.46)" fill="#fff"/>
            <rect id="Rectangle_43" data-name="Rectangle 43" width="3.275" height="3.275" transform="translate(0)" fill="#fff"/>
            <rect id="Rectangle_44" data-name="Rectangle 44" width="3.275" height="3.574" transform="translate(5.834 5.684)" fill="#fff"/>
            <path id="Path_101" data-name="Path 101" d="M28.839,51.127H25.564V54.4h3.275V51.127" transform="translate(-19.73 -39.46)" fill="#fff"/>
            <rect id="Rectangle_45" data-name="Rectangle 45" width="3.275" height="3.275" transform="translate(5.834)" fill="#fff"/>
        </g>
    </svg>
);

const dataVectorMarkup: JSX.Element = (
    <svg id="Group_96" data-name="Group 96" xmlns="http://www.w3.org/2000/svg" width="14.943" height="14.943" viewBox="0 0 14.943 14.943">
    <rect id="Rectangle_46" data-name="Rectangle 46" width="14.943" height="3.574" transform="translate(0 5.684)" fill="#fff"/>
    <path id="Path_102" data-name="Path 102" d="M14.943,145.266H0v3.276H14.943Z" transform="translate(0 -133.599)" fill="#fff"/>
    <rect id="Rectangle_47" data-name="Rectangle 47" width="14.943" height="3.275" transform="translate(0 0)" fill="#fff"/>
    </svg>
);

export default (({}) => {
    return (
        <Nav>
            <NavList>
                <NavListItem>
                    <a href="" role="button">{manufacturerVectorMarkup} Manufacturers</a>
                </NavListItem>
                <NavListItem>
                    <a href="" role="button">{dataVectorMarkup} Data</a>
                </NavListItem>
            </NavList>
        </Nav>
    )
}) as NavComponent

interface props {}
type NavComponent = React.FC<props>;
