import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import Button from '../../UI/form-control/button';
import IconTimer from '../../assets/images/icons/timer.svg';
import IconEdit from '../../assets/images/icons/edit-document.svg';
import IconGlobe from '../../assets/images/icons/globe.svg';

const Component = styled.nav`
    padding: 2rem 2rem 0;
    background: var(--color-gray-lighten-5);
    font-weight: 600;

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
    text-decoration: none;
    transition-property: color border-color;
    transition-duration: var(--transition-duration-out);
    transition-timing-function: var(--transition-timing);
    color: ${props => (props.isActive ? 'var(--color-black)' : 'var(--color-gray-darken-1)')};

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
const Nav = () => {
    const router = useRouter();

    return (
        <Component>
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
                        <Anchor disabled href="/">
                            <IconEdit />
                            Future feature
                        </Anchor>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <Anchor disabled href="/">
                            <IconGlobe />
                            Future section
                        </Anchor>
                    </Link>
                </li>
            </ul>
        </Component>
    );
};

export default Nav;
