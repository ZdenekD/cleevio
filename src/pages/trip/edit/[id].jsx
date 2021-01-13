import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import useFetch from '../../../hooks/useFetch';
import Layout from '../../../components/layout';
import Header from '../../../components/layout/header';
import Nav from '../../../components/nav';
import Content from '../../../components/layout/content';
import Aside from '../../../components/layout/aside';
import Trip from '../../../components/trip';
import Form from '../../../components/form/trip';
import Alert from '../../../UI/alert';
import Loader from '../../../UI/loader';
import options from '../../../api/options';
import fetcher from '../../../api/fetcher';

const Page = ({countries = []}) => {
    const {query} = useRouter();
    const {data: trip, error} = useFetch('trip', query.id);
    const {data: list, error: errorTrips} = useFetch('trip');
    const items = list?.map(item => ({
        ...item,
        address: {
            ...item.address,
            country_code: countries.find(country => country.label === item.address.country)?.value,
        },
    }))
        .filter(item => item.id !== query.id);

    return (
        <Layout>
            <Header title="Edit trip" subtitle="Trips" />
            <Nav />
            <Content>
                {error && (<Alert isOpen variant="danger">{error}</Alert>)}
                {errorTrips && (<Alert isOpen variant="danger">{errorTrips}</Alert>)}
                <Form data={trip} variant="update" />
            </Content>
            <Aside>
                {!items && (<Loader />)}
                {items?.map(item => (<Trip key={item.id} data={item} variant="grid" target="edit" />))}
            </Aside>
        </Layout>
    );
};

export async function getServerSideProps() {
    const countries = await fetcher(`${process.env.API}/country`, options.get());

    return {props: {countries}};
}

Page.propTypes = {countries: PropTypes.arrayOf(PropTypes.object)};

export default Page;
