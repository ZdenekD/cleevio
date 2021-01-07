import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import IconTimer from '../../assets/images/icons/timer.svg';
import IconEdit from '../../assets/images/icons/edit-document.svg';
import IconGlobe from '../../assets/images/icons/globe.svg';

const Wrapper = styled.nav`
    margin-top: 32px;
    font-weight: 600;

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
    color: ${props => (props.isActive ? '#000' : '#97999b')};

    &:focus,
    &:hover {
        transition-property: color border-color;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
    }

    &[disabled] {
        color: #97999b;
        pointer-events: none;
    }

    svg {
        margin-right: 12px;
        fill: currentColor;
    }
`;

const Nav = () => {
    const router = useRouter();

    return (
        <Wrapper>
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

export default Nav;
