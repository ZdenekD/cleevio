import options from '../options';

const update = (id, body) => fetch(`${process.env.NEXT_PUBLIC_API}/trip/${id}`, options.put(body))
    .then(response => response.json());

export default update;
