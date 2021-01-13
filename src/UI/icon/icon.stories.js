import styled from 'styled-components';
import Icon from '.';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-items: center;
`;
const Row = styled.div`
    color: #f8d964;
    fill: #f8d964;
`;
const styles = `
    width: 32px;
    height: 32px;
`;

export default {title: 'UI/Icons'};

export const base = () => (
    <>
        <Wrapper>
            <Row>
                <Icon variant="plus" styles={styles} />
            </Row>
            <Row>
                <Icon variant="cross" styles={styles} />
            </Row>
            <Row>
                <Icon variant="arrow" styles={styles} />
            </Row>
            <Row>
                <Icon variant="loader" styles={styles} />
            </Row>
            <Row>
                <Icon variant="trash" styles={styles} />
            </Row>
            <Row>
                <Icon variant="edit" styles={styles} />
            </Row>
            <Row>
                <Icon variant="check" styles={styles} />
            </Row>
            <Row>
                <Icon variant="hamburger" styles={'width: 32px; height: 16px;'} />
            </Row>
        </Wrapper>
    </>
);
