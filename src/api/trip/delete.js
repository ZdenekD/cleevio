import options from '../options';

const remove = id => fetch(`${process.env.NEXT_PUBLIC_API}/trip/${id}`, options.delete());

export default remove;
