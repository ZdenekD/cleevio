import {useRouter} from 'next/router';
import useFetch from '../../../hooks/useFetch';
import Layout from '../../../components/layout';
import Header from '../../../components/layout/header';
import Nav from '../../../components/nav';
import Content from '../../../components/layout/content';
import Aside from '../../../components/layout/aside';
import Form from '../../../components/form/trip';
import Alert from '../../../UI/alert';

const Page = () => {
    const {query} = useRouter();
    const {data, error} = useFetch('trip', query.id);

    return (
        <Layout>
            <Header title="View trip" subtitle="Trips" />
            <Nav />
            <Content>
                {error && (<Alert isOpen variant="danger">{error}</Alert>)}
                <Form data={data} variant="view" />
            </Content>
            <Aside />
        </Layout>
    );
};

export default Page;
