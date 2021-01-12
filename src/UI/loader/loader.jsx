import styled from 'styled-components';
import Icon from '../icon';

const Component = styled.div`
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    color: var(--color-gray);
`;
const styles = `
    width: 40px;
    height: 40px;
`;
const Loader = () => (
    <Component>
        <Icon type="loader" styles={styles} />
    </Component>
);

export default Loader;
