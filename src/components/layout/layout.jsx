import PropTypes from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';

const Wrapper = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-columns: max-content auto minmax(400px, 25vw);
`;

const App = ({children}) => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <title>Cleevio</title>
            <meta name="description" content="Cleevio trips app" />
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
            <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
                rel="stylesheet"
                crossOrigin="anonymous"
            />
        </Head>
        <Wrapper>
            {children}
        </Wrapper>
    </>
);

App.propTypes = {children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])};

export default App;
