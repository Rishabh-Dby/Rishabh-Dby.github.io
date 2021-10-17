const btn = document.querySelector("button");
const input = document.querySelector("#formGroupExampleInput");
let res;
let img = document.querySelector('img');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    const query = input.value;
    let p1 = document.querySelector("#p1");
    const p1r = document.createElement('p');
    p1.innerHTML = "Location Name: ";
    let p2 = document.querySelector("#p2");
    const p2r = document.createElement('p');
    p2.innerHTML = "Country: ";
    let p3 = document.querySelector("#p3");
    const p3r = document.createElement('p');
    p3.innerHTML = "Region: ";
    let p4 = document.querySelector("#p4");
    const p4r = document.createElement('p');
    p4.innerHTML = "Temperature: ";
    let p5 = document.querySelector("#p5");
    const p5r = document.createElement('p');
    p5.innerHTML = "Humidity: ";
    let p6 = document.querySelector("#p6");
    const p6r = document.createElement('p');
    p6.innerHTML = "Wind Speed: ";
    let p7 = document.querySelector("#p7");
    p7.innerHTML = "Weather: ";
    const p7r = document.createElement('p');
    let img = document.querySelector('img');
    res = axios.get(`https://api.weatherapi.com/v1/current.json?key=af341b290174480db4a100724211510&q=${query}`)
        .then(res => {
            f = 1;
            img.src = res.data.current.condition.icon;
            p1r.className = p2r.className = p3r.className = p4r.className = p5r.className = p6r.className = p7r.className = "result";
            p1r.innerHTML = res.data.location.name;
            p2r.innerHTML = res.data.location.country;
            p3r.innerHTML = res.data.location.region;
            p4r.innerHTML = res.data.current.temp_c + " (celsius) /" + res.data.current.temp_f + " (fahrenheit)";
            p5r.innerHTML = res.data.current.humidity;
            p6r.innerHTML = res.data.current.wind_mph + " (mph) /" + res.data.current.wind_kph + " (kph) ";
            p7r.innerHTML = res.data.current.condition.text;
            p1.append(p1r);
            p2.append(p2r);
            p3.append(p3r);
            p4.append(p4r);
            p5.append(p5r);
            p6.append(p6r);
            p7.append(p7r);
        })
        .catch(e => {
            console.log(e);
            alert("Error Invalid location refer syntax for giving name of the places " + e);
        })
})