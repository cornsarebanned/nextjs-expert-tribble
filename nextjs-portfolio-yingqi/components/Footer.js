// import React from 'react'
import styled from 'styled-components';

const FooterSection = styled.div`
    background: #000;
    color: #fff;
    height: 20px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Footer = () => {
    return (
        <FooterSection>
            <p>© Copyright • All Rights Reserved</p>
        </FooterSection>
    )
}

export default Footer
