const sortByOutdated = (current, next) => {
    if (current.outdated && !next.outdated) {
        return 1;
    }

    if (!current.outdated && next.outdated) {
        return -1;
    }

    return 0;
};

export default sortByOutdated;
