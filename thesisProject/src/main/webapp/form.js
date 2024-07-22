document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        // You can add form validation here if needed

        // Redirect to index.html after form submission
        window.location.href = 'index.html';
    });
});

function register(){
    window.location.href="register.html";
}

function navigateTo(URL){
    document.getElementById('myForm').action = URL;
    document.getElementById('myForm').submit();
    console.log(document.getElementById('myForm'));
}

function createTableFromJSON(data) {
    var html = "<table><tr><th>Category</th><th>Value</th></tr>";
    for (const x in data) {
        var category = x;
        var value = data[x];
        html += "<tr><td>" + category + "</td><td>" + value + "</td></tr>";
    }
    html += "</table>";
    return html;

}

function getUser() {
    let myForm = document.getElementById('signup');
    let formData = new FormData(myForm);
    const data ={};
    formData.forEach((value, key) => (data[key] = value));
    var jsonData=JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr);
        const responseData = JSON.parse(jsonData);   
        $('#ajaxContent').html("Successful Registration. Now please log in!<br> Your Data");
        $('#ajaxContent').append(createTableFromJSON(responseData));
        console.log(responseData);
    } else if (xhr.status !== 200) {
        document.getElementById("ajaxContent").innerHTML = "Request failed. Returned status of " + xhr.status + "<br>";
    }
    };
        console.log(jsonData);
        xhr.open("POST", "GetUser");
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(jsonData);
}