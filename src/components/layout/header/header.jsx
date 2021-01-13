import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import Logo from '../../../assets/images/logo.svg';

const Component = styled.header`
    width: 100%;
    min-height: var(--header-height);
    display: grid;
    grid-area: header;
    background: rgba(255, 255, 255, .75);
    box-shadow: 0 0 36px rgba(255, 255, 255, 1);

    @media (min-width: 300px) {
        grid-template-columns: 100%;
        grid-template-areas: "logo";
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: var(--zindex-logo);
    }

    @media (min-width: 600px) {
        grid-template-columns: calc(200px + 4rem) 7fr minmax(calc(30ch + 4rem), 2fr);
        grid-template-areas: "logo title title";
        align-items: initial;
        position: static;
    }

    @media (min-width: 1200px) {
        grid-template-areas: "logo title subtitle";
    }
`;
const Anchor = styled.a`
    padding: 2rem 2rem 0;
    grid-area: logo;
    text-align: center;

    @media (min-width: 300px) {

        svg {
            max-width: 30vw;
        }
    }

    @media (min-width: 600px) {
        background: var(--color-gray-lighten-5);
        text-align: left;

        svg {
            max-width: 160px;
        }
    }
`;
const H1 = styled.h1`
    margin: 2rem 2rem 0;
    grid-area: title;
    font-size: 24px;
    line-height: 33px;
    border-bottom: 1px solid var(--color-gray-lighten-4);

    @media (min-width: 300px) {
        display: none;
    }

    @media (min-width: 600px) {
        display: block;
    }
`;
const H2 = styled.h2`
    margin: 2rem 2rem 0;
    grid-area: subtitle;
    font-size: 24px;
    line-height: 36px;

    @media (min-width: 300px) {
        display: none;
    }

    @media (min-width: 1200px) {
        display: block;
    }
`;
const Header = ({title, subtitle}) => (
    <Component>
        <Link passHref href="/">
            <Anchor>
                <span className="_visuallyhidden">Move to homepage</span>
                <Logo />
            </Anchor>
        </Link>
        <H1>{title}</H1>
        <H2>{subtitle}</H2>
    </Component>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Header;
