import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import Button from '../../UI/form-control/button';
import useWindowSize from '../../hooks/useWindowSize';
import IconTimer from '../../assets/images/icons/timer.svg';
import IconEdit from '../../assets/images/icons/edit-document.svg';
import IconGlobe from '../../assets/images/icons/globe.svg';

const Component = styled.nav`
    min-height: calc(100vh - var(--header-height));
    background: var(--color-gray-lighten-5);
    font-weight: 600;

    @media (min-width: 300px) {
        width: 100%;
        min-height: 100vh;
        padding: calc(var(--header-height) + 2rem) 2rem 0;
        position: fixed;
        top: 0;
        left: 0;
        z-index: var(--zindex-nav);
        transform: translateY(100%);
        transition: transform var(--transition-duration-in) var(--transition-timing);

        ${props => (props.isOpen && `
            transform: translateY(0);
        `)}
    }

    @media (min-width: 600px) {
        padding: 2rem 2rem 0;
        display: block;
        position: static;
        transition: none;
    }

    ul {
        margin-top: 2rem;
    }

    li {

        + li {
            margin-top: 1rem;
        }
    }
`;
const Anchor = styled.a`
    display: flex;
    align-items: center;
    grid-area: nav;
    text-decoration: none;
    transition-property: color, border-color;
    transition-duration: var(--transition-duration-out);
    transition-timing-function: var(--transition-timing);
    color: ${props => (props.isActive ? 'var(--color-black)' : 'var(--color-gray-darken-1)')};

    ${props => (props.disable && 'pointer-events: none;')}

    &:focus,
    &:hover {
        transition-duration: var(--transition-duration-in);
    }

    &[disabled] {
        color: var(--color-gray-darken-1);
        pointer-events: none;
    }

    svg {
        margin-right: 1rem;
        fill: currentColor;
    }
`;
const Menu = styled.div`
    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: var(--zindex-nav-trigger);

    ${props => (!props.isOpen && `
        i {
            height: 12px;
        }
    `)}
`;
const Nav = () => {
    const [isOpen, setOpen] = React.useState(false);
    const router = useRouter();
    const {width} = useWindowSize();
    const handleMenu = () => {
        setOpen(!isOpen);
    };

    if (width > 600 && !isOpen) {
        setOpen(true);
    }

    return (
        <>
            {width < 600 && (
                <Menu isOpen={isOpen}>
                    <Button icon={isOpen ? 'cross' : 'hamburger'} variant="secondary" onClick={handleMenu} />
                </Menu>
            )}

            <Component isOpen={isOpen}>
                <Link passHref href="/trip/new">
                    <Button asLink href="/trip/new" icon="plus" styles={'min-width: 100%;'}>New Trip</Button>
                </Link>
                <ul>
                    <li>
                        <Link passHref href="/">
                            <Anchor href="/" isActive={router.pathname === '/'}>
                                <IconTimer />
                                Your trips
                            </Anchor>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Anchor disable href="/">
                                <IconEdit />
                                Future feature
                            </Anchor>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Anchor disable href="/">
                                <IconGlobe />
                                Future section
                            </Anchor>
                        </Link>
                    </li>
                </ul>
            </Component>
        </>
    );
};

export default Nav;
