import Layout from '../../components/layout';
import Header from '../../components/layout/header';
import Nav from '../../components/nav';
import Content from '../../components/layout/content';
import Aside from '../../components/layout/aside';
import Form from '../../components/form/trip';

const Page = () => (
    <Layout>
        <Header title="Edit trip" subtitle="Trips" />
        <Nav />
        <Content>
            <Form />
        </Content>
        <Aside />
    </Layout>
);

export default Page;
