import useSWR from 'swr';
import {useRouter} from 'next/router';
import Layout from '../../../components/layout';
import Header from '../../../components/layout/header';
import Nav from '../../../components/nav';
import Content from '../../../components/layout/content';
import Aside from '../../../components/layout/aside';
import Form from '../../../components/form/trip';
import fetcher from '../../../helpers/fetcher';
import options from '../../../helpers/options';

const Page = () => {
    const {query} = useRouter();
    const url = `${process.env.API}/trip/${query.id}`;
    const {data, error} = useSWR(url, () => fetcher(url, options.get()));

    console.log(data, error);

    return (
        <Layout>
            <Header title="View trip" subtitle="Trips" />
            <Nav />
            <Content>
                {data?.company_name}
                <Form />
            </Content>
            <Aside />
        </Layout>
    );
};

export default Page;
