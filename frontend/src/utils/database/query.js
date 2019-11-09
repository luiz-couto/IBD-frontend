const query = (sqlQuery) => {
    return fetch("http://localhost:3001/consulta", {
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }),
        method: "POST",
        body: JSON.stringify({query: sqlQuery}),
    }).then((response) => {
        return response.json().then((data) => {
            return data;
        });
    });
};

module.exports = {
    query,
};