import styled from 'styled-components';
import Icon from './icon';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-items: center;
`;
const Row = styled.div`
    color: #f8d964;
`;
const styles = `
    width: 32px;
    height: 32px;
`;

export default {title: 'Components/Icon'};

export const base = () => (
    <>
        <Wrapper>
            <Row>
                <Icon type="plus" styles={styles} />
            </Row>
            <Row>
                <Icon type="arrow" styles={styles} />
            </Row>
            <Row>
                <Icon type="loader" styles={styles} />
            </Row>
        </Wrapper>
    </>
);
