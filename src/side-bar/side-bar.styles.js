import styled from 'styled-components';

export const SideBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 60px;
    width: 200px;
    height: 100%;
    background-color: lightsteelblue;
    transform: translateX(${({open}) => (open ? '0': 'calc(-100% - 18px)')});
    transition: transform 500ms ease-in-out;
`;

export const Button = styled.button`
    position: absolute;
    right: -18px;
    top: 74px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: white;
    z-index: 3; 
    margin: 0 100px;
`;

export const Header = styled.header`
    position: fixed;
    top: 0;
    height: 60px;
    padding-left: 60px;
    width: 100%;
    background-color: lightblue;
`;

