import options from '../options';

const create = body => fetch(`${process.env.NEXT_PUBLIC_API}/trip`, options.post(body))
    .then(response => response.json());

export default create;
