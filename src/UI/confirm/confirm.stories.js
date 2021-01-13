import styled from 'styled-components';
import Confirm from '.';
import Button from '../form-control/button';

const Row = styled.div`
    display: flex;
    justify-content: space-around;

    button:not(:first-of-type) {
        margin-left: 1rem;
    }
`;

export default {title: 'UI/Confirm'};

export const base = () => (
    <Confirm isOpen>
        <Row>
            <Button>Yes</Button>
            <Button>No</Button>
        </Row>
    </Confirm>
);
