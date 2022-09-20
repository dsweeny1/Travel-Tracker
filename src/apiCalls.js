const fetchData = (url) => {
    return fetch(url)
    .then(data => data.json())
}

const fetchAll = () => {
    return Promise.all([fetchData('http://localhost:3001/api/v1/travelers'), fetchData('http://localhost:3001/api/v1/trips'), fetchData('http://localhost:3001/api/v1/destinations')])
}

export { fetchAll }