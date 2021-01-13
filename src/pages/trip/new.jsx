import PropTypes from 'prop-types';
import useFetch from '../../hooks/useFetch';
import Layout from '../../components/layout';
import Header from '../../components/layout/header';
import Nav from '../../components/nav';
import Content from '../../components/layout/content';
import Aside from '../../components/layout/aside';
import Trip from '../../components/trip';
import Form from '../../components/form/trip';
import Alert from '../../UI/alert';
import Loader from '../../UI/loader';
import options from '../../api/options';
import fetcher from '../../helpers/fetcher';

const Page = ({countries = []}) => {
    const {data, error} = useFetch('trip');
    const items = data?.map(item => ({
        ...item,
        address: {
            ...item.address,
            country_code: countries.find(country => country.label === item.address.country)?.value,
        },
    }));

    return (
        <Layout>
            {error && (<Alert isOpen variant="danger">{error}</Alert>)}

            <Header title="New trip" subtitle="Trips" />
            <Nav />
            <Content>
                <Form />
            </Content>
            <Aside>
                {!items && (<Loader />)}
                {items?.map(trip => (<Trip key={trip.id} data={trip} variant="grid" target="view" />))}
            </Aside>
        </Layout>
    );
};

export async function getStaticProps() {
    const countries = await fetcher(`${process.env.API}/country`, options.get());

    return {props: {countries}};
}

Page.propTypes = {countries: PropTypes.arrayOf(PropTypes.object)};

export default Page;
