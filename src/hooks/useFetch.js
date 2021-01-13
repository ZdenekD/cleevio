import useSWR from 'swr';
import fetcher from '../helpers/fetcher';
import options from '../api/options';

const baseUrl = `${process.env.API}`;
const useFetch = (path, query) => {
    const url = query ? `${baseUrl}/${path}/${query}` : `${baseUrl}/${path}`;
    const {data, error} = useSWR(path ? url : null, () => fetcher(url, options.get()));

    return {data, error};
};

export default useFetch;
