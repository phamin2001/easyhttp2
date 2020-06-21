

class EasyHTTP {
  // Make an HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => {
          if (res.ok) {
            resolve(res.json());
          } else {
            throw new Error(
              `Something went wrong, status: ${res.status} message: ${res.statusText}`
            );
          }
        })
        .catch(err => reject(err));
      // .then(res => res.json())
      // .then(data => resolve(data))
      // .catch(err => reject(err));
    });
  }

  // Make adn HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          if (res.ok) {
            resolve(res.json());
          } else {
            throw new Error(
              `Something went wrong, status: ${res.status} message: ${res.statusText}`
            );
          }
        })
        .catch(err => reject(err));
      // .then(res => res.json())
      // .then(data => resolve(data))
      // .catch(err => reject(err));
    });
  }

  // Make an HTTP PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          if (res.ok) {
            resolve(res.json());
          } else {
            throw Error(
              `Something went wrong, status: ${res.status} message: ${res.statusText}`
            );
          }
        })
        .catch(err => reject(err));
      // .then(res => res.json())
      // .then(data => resolve(data))
      // .catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.ok) {
            resolve('Data deleted...');
          } else {
            throw new Error(
              `Something went wrong, status: ${res.status} message: ${res.statusText}`
            );
          }
        })
        .catch(err => reject(err));
      // .then(res => res.json())
      // .then(() => resolve('Resource Deleted... '))
      // .catch(err => reject(err));
    });
  }
}
