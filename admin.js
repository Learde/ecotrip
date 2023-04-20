const doAjax = async () => {
    const queryUrl = "/api/review.php";

    const url = document.querySelector("#url");
    const name = document.querySelector("#name");
    const date = document.querySelector("#date");
    const description = document.querySelector("#description");
    const password = document.querySelector("#password");
    const obj = {
        url: url.value,
        name: name.value,
        date: date.value,
        description: description.value,
        password: password.value
    }
    let response = await fetch(queryUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
    });

    if (response.ok) {
        let json = await response.json();
        if (+json.success === 0) alert(json.error)
        else {
            url.value = "";
            name.value = "";
            date.value = "";
            description.value = "";
        }
    }
}

const initForm = () => {
    const btn = document.querySelector("#add");
    btn.onclick = doAjax;
}


document.addEventListener("DOMContentLoaded", initForm);