import options from '../options';

const remove = id => fetch(`${process.env.API}/trip/${id}`, options.delete());

export default remove;
