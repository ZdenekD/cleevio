import styled from 'styled-components';
import Link from 'next/link';
import Nav from '../../nav';
import Button from '../../../UI/form-control/button';
import Logo from '../../../assets/images/logo.svg';

const StyledWrapper = styled.header`
    padding: 36px 36px 0;
    display: grid;
    grid-template-rows: 84px auto;
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
        <div>
            <Button icon="plus">New Trip</Button>
            <Nav />
        </div>
    </StyledWrapper>
);

export default Header;
