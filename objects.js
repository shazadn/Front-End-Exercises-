const aboutMe = {
    firstName: "Shazad",
    lastName: "Nasim",
    age: 24,
    address: {
        line1: "<b>18 Carnforth Road</b>",
        line2: "Heaton Chapel",
        city: "Stockport",
        postcode: "SK4 5le"
    }
};


function info() {
    console.log(aboutMe.address.line1);
    let info = aboutMe.address.line1;
    document.getElementById("result").innerHTML = info;
}

function fName(){
    console.log(aboutMe.firstName);
    let fName = aboutMe.firstName;
    document.getElementById("fName").innerText = fName;
}

info();
fName();