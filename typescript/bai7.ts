async function logPost() {
    try {
        const response = await fetch("http://localhost:3000/post");
        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

console.log(logPost())
