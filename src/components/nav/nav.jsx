import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import Button from '../../UI/form-control/button';
import IconTimer from '../../assets/images/icons/timer.svg';
import IconEdit from '../../assets/images/icons/edit-document.svg';
import IconGlobe from '../../assets/images/icons/globe.svg';

const Wrapper = styled.nav`
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
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    color: ${props => (props.isActive ? 'var(--color-black)' : 'var(--color-gray-darken-1)')};

    &:focus,
    &:hover {
        transition-property: color border-color;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
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

const Menu = () => {
    const router = useRouter();

    return (
        <Wrapper>
            <Button icon="plus">New Trip</Button>
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
        </Wrapper>
    );
};

export default Menu;
