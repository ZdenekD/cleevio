const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.TOKEN}`,
};
const options = {
    get: () => ({
        method: 'GET',
        headers,
    }),
    post: body => ({
        method: 'POST',
        headers,
        body: JSON.stringigy(body),
    }),
    put: body => ({
        method: 'PUT',
        headers,
        body: JSON.stringify(body),
    }),
    delete: () => ({
        method: 'DELETE',
        headers,
    }),
};

export default options;