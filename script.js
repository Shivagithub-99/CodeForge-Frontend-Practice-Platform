const htmlEditor = document.querySelector("#html-editor");
const cssEditor = document.querySelector("#css-editor");
const jsEditor = document.querySelector("#js-editor");
const runBtn = document.querySelector("#run-btn");
const resetBtn = document.querySelector("#reset-btn");
const output = document.querySelector("#output-frame");
const htmlHighlight = document.querySelector("#html-highlight");
const cssHighlight = document.querySelector("#css-highlight");
const jsHighlight = document.querySelector("#js-highlight");

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

    updateHighlight(htmlEditor, htmlHighlight, "markup");
    updateHighlight(cssEditor, cssHighlight, "css");
    updateHighlight(jsEditor, jsHighlight, "javascript");
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

//typing effect
const heroSpan = document.querySelector("#hero-span");
const text = "Frontend Development";
let index = 0;
function typeEffect(){
    if(index < text.length){
        heroSpan.textContent += text[index];
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();


const codingBtn = document.querySelector("#coding-btn");

codingBtn.addEventListener("click", () => {
    document.querySelector("#playground").scrollIntoView({
        behavior: "smooth"
    });
});


function enableHighlight(editor, highlight, language){

    editor.addEventListener("input",()=>{

        updateHighlight(editor,highlight,language);

    });


    editor.addEventListener("scroll",()=>{

        highlight.scrollTop = editor.scrollTop;
        highlight.scrollLeft = editor.scrollLeft;

    });

}

function updateHighlight(editor, highlight, language){

    highlight.textContent = editor.value;

    highlight.className = `highlight language-${language}`;

    Prism.highlightElement(highlight);

}

enableHighlight(
    htmlEditor,
    htmlHighlight,
    "markup"
);


enableHighlight(
    cssEditor,
    cssHighlight,
    "css"
);


enableHighlight(
    jsEditor,
    jsHighlight,
    "javascript"
);

const faqButtons = document.querySelectorAll(".faq-question");


faqButtons.forEach(button => {

    button.addEventListener("click",()=>{

        const faqItem = button.parentElement;

        faqItem.classList.toggle("active");


        const icon = button.querySelector("span");

        if(faqItem.classList.contains("active")){
            icon.textContent = "-";
        }
        else{
            icon.textContent = "+";
        }

    });

});


