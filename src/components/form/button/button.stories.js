import styled from 'styled-components';
import Button from './button';

const Row = styled.div`
    margin-bottom: 20px;
`;

export default {title: 'Components/Form/Button'};

export const base = () => (
    <>
        <Row>
            <Button>Primary button</Button>
        </Row>
        <Row>
            <Button variant="secondary">Secondary button</Button>
        </Row>
    </>
);
export const disabled = () => (
    <>
        <Row>
            <Button disabled>Primary button</Button>
        </Row>
        <Row>
            <Button disabled variant="secondary">Secondary button</Button>
        </Row>
    </>
);
export const plus = () => (
    <>
        <Row>
            <Button icon="plus">Primary button</Button>
        </Row>
        <Row>
            <Button icon="plus" variant="secondary">Secondary button</Button>
        </Row>
    </>
);
export const arrow = () => (
    <>
        <Row>
            <Button icon="arrow">Primary button</Button>
        </Row>
        <Row>
            <Button icon="arrow" variant="secondary">Secondary button</Button>
        </Row>
    </>
);
export const loading = () => (
    <>
        <Row>
            <Button icon="loader">Primary button</Button>
        </Row>
        <Row>
            <Button icon="loader" variant="secondary">Secondary button</Button>
        </Row>
    </>
);
