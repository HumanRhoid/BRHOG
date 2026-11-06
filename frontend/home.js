const backend_url = "http://127.0.0.1:8000";

async function showPostName() {
    const response = await fetch(backend_url);
    const post = await response.json();
    const post_name = Object.keys(post)[0];
    const post_contents = post[post_name]
    document.getElementById("post-display").textContent = post_name + ": " + post_contents;
}

showPostName();


