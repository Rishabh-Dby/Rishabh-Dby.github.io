const btn = document.querySelector("button");
const days = document.querySelector("#days");
let table, p;
let res;
let f = 0;
btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (f == 1) {
        table.remove();
        p.remove();
    }
    const location = document.querySelector("#location");
    res = axios.get(`https://api.weatherapi.com/v1/forecast.json?key=af341b290174480db4a100724211510&q=${location.value}&days=${days.value}&aqi=no&alerts=no`)
        .then(res => {
            p = document.createElement('p');
            p.innerText = "Location: "
            p.append(res.data.location.name);
            table = document.createElement('table');
            const div=document.createElement("div");
            const tbody = document.createElement('tbody');
            const thead = document.createElement('thead');
            const tr = document.createElement('tr');
            const day = document.createElement('th');
            day.innerHTML = "Day";
            tr.append(day);
            for (let i = 0; i < 12; ++i) {
                const th = document.createElement('th');
                th.innerHTML = `${i}:00`;
                tr.append(th);
            }
            for (let i = 12; i < 24; ++i) {
                const th = document.createElement('th');
                th.innerHTML = `${i}:00`;
                tr.append(th);
            }
            table.append(thead);
            thead.append(tr);
            for (let i = 0; i < days.valueAsNumber; ++i) {
                const dayno = document.createElement('td');
                const blank = document.createElement('td');
                blank.innerHTML = "";
                dayno.innerHTML = `${i + 1}`;
                const tr1 = document.createElement('tr');
                const tr2 = document.createElement('tr');
                tr1.append(dayno);
                for (let j = 0; j < 24; ++j) {
                    const td = document.createElement('td');
                    const img = document.createElement('img');
                    img.src = res.data.forecast.forecastday[i].hour[j].condition.icon;
                    td.append(img);
                    tr1.append(td);
                }
                tbody.append(tr1);
                tr2.append(blank);
                for (let j = 0; j < 24; ++j) {
                    const td = document.createElement('td');
                    td.innerHTML = res.data.forecast.forecastday[i].hour[j].condition.text;
                    tr2.append(td);
                }
                tr2.className = "weathertext";
                tbody.append(tr2);
            }
            table.append(tbody);
            document.body.append(p);
            p.className = "place";
            document.body.append(div);
            div.append(table);
            f = 1;
        })
        .catch(e => {
            if (days.value > 3 || days.value < 1 || days.value == "") {
                alert('Invalid day number enter a day number between 1 and 3' + e);
            }
            else
                alert("Invalid location refer syntax for giving name of the places" + e);
        })
    if (days.value == "") {
        alert("Invalid location refer syntax for giving name of the places");
    }
})
