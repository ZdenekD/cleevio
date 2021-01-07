import GlobalStyles from '../assets/globalStyles';

// eslint-disable-next-line react/prop-types
export default function App({Component, pageProps}) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}
