import Alert from '.';

const content = 'Bacon ipsum dolor amet corned beef kevin pork loin t-bone buffalo. Pork belly bresaola kevin tongue burgdoggen frankfurter jowl spare ribs corned beef.';

export default {title: 'UI/Alert'};

export const base = () => (
    <Alert isOpen>
        {content}
    </Alert>
);

export const info = () => (
    <Alert isOpen variant="info">
        {content}
    </Alert>
);

export const warning = () => (
    <Alert isOpen variant="warning">
        {content}
    </Alert>
);

export const danger = () => (
    <Alert isOpen variant="danger">
        {content}
    </Alert>
);
