import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
    height: 50px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
`

const StyledLink = styled.a`
    padding: 0rem 1rem;

`

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href="/" passHref>
                    <StyledLink>YINGQI,XIE</StyledLink>
                </Link>
            </div>
            <div>
                <Link href="/" passHref>
                    <StyledLink>HOME</StyledLink>
                </Link>

                <Link href="/about" passHref>
                    <StyledLink>ABOUT</StyledLink>
                </Link>
           
                <Link href="/projects" passHref>
                    <StyledLink>PROJECTS</StyledLink>
                </Link>
            
                <Link href="/contact" passHref>
                    <StyledLink>CONTACT</StyledLink>
                </Link>
            </div>
        </Nav>
    )
}

export default Navbar
