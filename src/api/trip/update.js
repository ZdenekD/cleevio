import options from '../options';

const update = (id, body) => fetch(`${process.env.API}/trip/${id}`, options.put(body))
    .then(response => response.json())
    .catch(error => console.log(error));

export default update;
