// TODO: add code here
function init {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
                response.json().then(function(json) {
                    let div = document.getElementById("container")
                    for (let i = 0; i < json.length; i++) {
                        div.innerHTML += `
                <div class="comments">
                  <ul>
                    <li>Post ID: ${json[i].postID}</li>
                    <li>Comment ID: ${json[i].id}</li>
                    <li>Name: ${json[i].name}</li>
                    <li>Email: ${json[i].email}</li>
                    <li>Comment: ${json[i].body}</li>
                  </ul>
                </div>
            `
                    }
                });

            }

            window.onload = init;