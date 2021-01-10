import PropTypes from 'prop-types';
import useSWR from 'swr';
import Layout from '../components/layout';
import Header from '../components/layout/header';
import Nav from '../components/nav';
import Content from '../components/layout/content';
import Aside from '../components/layout/aside';
import Trip from '../components/trip';
import fetcher from '../helpers/fetcher';

const urlTrips = `${process.env.API}/trip`;
const urlCountries = `${process.env.API}/country`;
const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TOKEN}`,
    },
};
const Homepage = ({trips = [], countries = []}) => {
    const {data, error} = useSWR(urlTrips, () => fetcher(urlTrips, options), {initialData: trips});
    const items = data.map(item => ({
        ...item,
        address: {
            ...item.address,
            country_code: countries.find(country => country.label === item.address.country)?.value,
        },
    }));

    return (
        <Layout>
            <Header title="Your trips" subtitle="Tips &amp; tricks" />
            <Nav />
            <Content>
                {error && (<div>ERROR: {error}</div>)}

                {!items && (<div>Loading &hellip;</div>)}

                {items.map(trip => (<Trip key={trip.id} data={trip} />))}
            </Content>
            <Aside>
                <p>
                    Company was established back in the year 2007 by 3 friends who were fascinated by the web and mobile
                    technologies and product design. Today, Cleevio is lead by its own CEO, David Bezdeka, and is working on
                    projects for clients and companies around the world. With his work he helps with the product itself,
                    starting startups or understanding how to manage and deliver a large-scale solution. Cleevio‘s people come
                    from a diverse environment, but they work like a well-coordinated team at work. During development, they
                    use new technologies and libraries, always striving to uplevel. They work side-by-side with clients as a
                    partner and they are their digital expert. They advise and influence the design and strategy of the
                    project. They are looking for bold clients who are leaders in their field and have innovative, creative
                    ideas. They are attracted to projects which utilize new technologies.
                </p>
                <p>
                    Are you passionate about building human-centered products? That’s a good start, because people in Cleevio
                    are too! They really, really like techy stuff and they love to cooperate, co-exist with people who are
                    tech-savvy, are empathetic to be able to understand the users of their solutions, and are able to take up
                    the challenges the digital world can bring. Cleevio is committed to creating a diverse and inclusive
                    workplace, where everyone has the freedom to thrive while being taken care of. They break problems down to
                    first principles and reason upwards. The goal is to turn 20 percent of their effort into 80 percent of the
                    impact.
                </p>
            </Aside>
        </Layout>
    );
};

export async function getStaticProps() {
    const trips = await fetcher(urlTrips, options);
    const countries = await fetcher(urlCountries, options);

    return {props: {trips, countries}};
}

Homepage.propTypes = {trips: PropTypes.arrayOf(PropTypes.object), countries: PropTypes.arrayOf(PropTypes.object)};

export default Homepage;
