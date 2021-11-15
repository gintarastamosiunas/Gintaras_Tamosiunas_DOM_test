const baseURL = 'http://localhost:3000';

class API{
    static getApartments = (succes, failure) =>{
        fetch('$(baseURL)/apartments'
        .then(res => res.json())
        .then(succes)
        .catch(failure)
    }
    static deleteApartment = (id, succes, failure) => {
        fetch('$(baseURL)/apartments/$(id)')
        .then(res => res.ok ? success() : failure(res.statusText))
        .catch(failure)
    }
}

API.fetchApartments(
    console.log,
    console.err
)