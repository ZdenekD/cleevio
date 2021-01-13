import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import Logo from '../../../assets/images/logo.svg';

const Component = styled.header`
    display: grid;
    grid-area: header;
    grid-template-columns: calc(200px + 4rem) 7fr minmax(calc(30ch + 4rem), 2fr);

    @media (min-width: 600px) {
        grid-template-areas: "logo title title";

        h2 {
            display: none;
        }
    }

    @media (min-width: 1200px) {
        grid-template-areas: "logo title subtitle";

        h2 {
            display: block;
        }
    }

    > a {
        padding: 2rem 2rem 0;
        background: var(--color-gray-lighten-5);
    }

    h1 {
        margin: 2rem 2rem 0;
        grid-area: title;
        font-size: 24px;
        line-height: 33px;
        border-bottom: 1px solid var(--color-gray-lighten-4);
    }

    h2 {
        margin: 2rem 2rem 0;
        font-size: 24px;
        line-height: 36px;
    }

    svg {
        max-width: 160px;
    }
`;
const Header = ({title, subtitle}) => (
    <Component>
        <Link passHref href="/">
            <a href="/">
                <span className="_visuallyhidden">Move to homepage</span>
                <Logo />
            </a>
        </Link>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </Component>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Header;
