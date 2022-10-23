// Get Ok 

fetch('http://localhost:5000/')
        .then(response => response.json())  // convertir a json
        .then(data => {console.log(data)})
        .catch(err => console.log('Solicitud fallida', err));

// Login usando POST
fetch('http://localhost:5000/',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:"juancho20@palermo.edu",password: "123456$"})
        }).then(response => response.json())  // convertir a json
        .then(data => { console.log(data)})
        .catch(err => console.log('Solicitud fallida', err));
        