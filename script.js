const htmlEditor = document.querySelector("#html-editor");
const cssEditor = document.querySelector("#css-editor");
const jsEditor = document.querySelector("#js-editor");
const runBtn = document.querySelector("#run-btn");
const resetBtn = document.querySelector("#reset-btn");
const output = document.querySelector("#output-frame");

function starterCode(){
    htmlEditor.value = `
    <h1>Hello CodeForge 🚀</h1>
    <p>Start building your first webpage!</p>
    `;

    cssEditor.value = `
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }

        h1 {
            color: orange;
        }
    `;

    jsEditor.value = `
        console.log("Welcome to CodeForge!");
    `;
}

starterCode();

function runCode(){
    const htmlCode = htmlEditor.value;
    const cssCode = cssEditor.value;
    const jsCode = jsEditor.value;

    const page = `
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    ${cssCode}
    </style>
    </head>

    <body>
    ${htmlCode}

    <script>
    window.onerror = function(message){

    document.body.innerHTML += 
    "<h2>Error: " + message + "</h2>";

    }
    ${jsCode}
    <\/script>

    </body>
    </html>
    `;

    output.srcdoc = page;
}

runBtn.addEventListener("click", runCode)

document.addEventListener("keydown",(event)=>{

    if(event.key==="Enter" && event.ctrlKey){
        runCode();
    }

});

resetBtn.addEventListener("click", () => {
    starterCode();
})

