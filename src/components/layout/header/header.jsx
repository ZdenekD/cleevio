import styled from 'styled-components';
import Link from 'next/link';
import Nav from '../../nav';
import Button from '../../form/button';
import Logo from '../../../assets/images/logo.svg';

const StyledWrapper = styled.header`
    padding: 36px;
    background: #f9f9fa;

    > a {
        margin-bottom: 36px;
        display: block;
    }

    svg {
        max-width: 160px;
    }
`;

const Header = () => (
    <StyledWrapper>
        <Link passHref href="/">
            <a href="/">
                <span className="_visuallyhidden">Move to homepage</span>
                <Logo />
            </a>
        </Link>
        <Button icon="plus">New Trip</Button>
        <Nav />
    </StyledWrapper>
);

export default Header;
