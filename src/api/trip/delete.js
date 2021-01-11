import options from '../options';

const remove = id => fetch(`${process.env.API}/trip/${id}`, options.delete())
    .then(response => response.json())
    .catch(error => console.log(error));

export default remove;
