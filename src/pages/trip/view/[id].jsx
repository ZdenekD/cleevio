import PropTypes from 'prop-types';
import Layout from '../../../components/layout';
import Header from '../../../components/layout/header';
import Nav from '../../../components/nav';
import Content from '../../../components/layout/content';
import Aside from '../../../components/layout/aside';
import Form from '../../../components/form/trip';
import fetcher from '../../../helpers/fetcher';

const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TOKEN}`,
    },
};
const Page = ({data} = {}) => (
    <Layout>
        <Header title="View trip" subtitle="Trips" />
        <Nav />
        <Content>
            {data.company_name}
            <Form />
        </Content>
        <Aside />
    </Layout>
);

export async function getServerSideProps({params}) {
    const data = await fetcher(`${process.env.API}/trip/${params.id}`, options);

    return {props: {data}};
}

Page.propTypes = {data: PropTypes.object};

export default Page;
