import styled from 'styled-components';
import Button from '.';

const Row = styled.div`
    margin-bottom: 20px;
`;

export default {title: 'UI/FormControl/Button'};

export const base = () => (
    <>
        <Row>
            <Button>Primary button</Button>
        </Row>
        <Row>
            <Button variant="secondary">Secondary button</Button>
        </Row>
        <Row>
            <Button variant="danger">Red button</Button>
        </Row>
        <Row>
            <Button variant="info">Blue button</Button>
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
        <Row>
            <Button disabled variant="danger">Red button</Button>
        </Row>
        <Row>
            <Button disabled variant="info">Blue button</Button>
        </Row>
    </>
);
export const icons = () => (
    <>
        <Row>
            <Button icon="plus">Button</Button>
        </Row>
        <Row>
            <Button icon="arrow">Primary button with arrow</Button>
        </Row>
        <Row>
            <Button icon="loader">Loading button</Button>
        </Row>
        <Row>
            <Button icon="trash" title="Delete item" />
        </Row>
        <Row>
            <Button icon="star" title="Star item" />
        </Row>
        <Row>
            <Button icon="edit">Edit button with little longer description</Button>
        </Row>
    </>
);
