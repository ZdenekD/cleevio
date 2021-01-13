import options from '../options';

const create = body => fetch(`${process.env.API}/trip`, options.post(body))
    .then(response => response.json());

export default create;
