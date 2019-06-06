
//XMLHTTPRequest

function createTableRow(member) {
    let tableRef = document.getElementById("heroes-table");
    let row = tableRef.insertRow(-1);

    let index = 0;
    for (let key in member) {
        let cell = row.insertCell(index);
        let text = document.createTextNode(member[key]);
        cell.appendChild(text);
        index++;
    }
}


function fetchData(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    resolve(req);
                } else {
                    reject("It failed");
                }
            }
        };
        req.open("GET", url);
        req.send();
    });

}

function generateRows(members) {
    return new Promise((res, rej) => {
        // // TESTING SOMETHING!
        // for(let i = 0; i < 10; i++) {
        //     members = members.concat(members);
        // }
        for (let member of members) {
            createTableRow(member);
        }
        res();
    })
}

function urlPromise() {
    fetchData("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
        .then((r) => {
            return JSON.parse(r.responseText);
        }).then((data) => {
            return generateRows(data.members);
        }).then(() => {
            console.log('We\'re done.');
        }).catch((reason) => {
            console.log(reason);
        });
}

urlPromise();

