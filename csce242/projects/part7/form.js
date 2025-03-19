const showEmailResult = async (e) => {
    e.preventDefault();
    const result = document.getElementById("result");
    let response = await getEmailResult();
    if(response.status == 200) {
        result.innerHTML = "E-mail successfully sent!";
    } else {
        result.innerHTML = "Sorry, your e-mail was not sent.";
    }
};

const getEmailResult = async (e) => {
    const form = document.getElementById("form-email");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Please wait...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });
        return response;
    } catch {
        console.log(error);
        document.getElementById("result").innerHTML = 
            "Sorry, your e-mail couldn't be sent.";
    }
};

document.getElementById("form-email").onsubmit = showEmailResult;