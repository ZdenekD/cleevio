import Message from '.';

const message = 'Bacon ipsum dolor amet corned beef kevin pork loin t-bone buffalo. Pork belly bresaola kevin tongue burgdoggen frankfurter jowl spare ribs corned beef.';

export default {title: 'UI/Message'};

export const base = () => (
    <Message isOpen>
        {message}
    </Message>
);

export const info = () => (
    <Message isOpen variant="info">
        {message}
    </Message>
);

export const warning = () => (
    <Message isOpen variant="warning">
        {message}
    </Message>
);

export const danger = () => (
    <Message isOpen variant="danger">
        {message}
    </Message>
);
