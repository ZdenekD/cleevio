const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
};
const options = {
    get: () => ({
        method: 'GET',
        headers,
    }),
    post: body => ({
        method: 'POST',
        headers,
        body: JSON.stringify(body),
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
