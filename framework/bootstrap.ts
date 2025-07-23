import App from "../src/app.js" 

/** entry point to the framework */
function bootstrap(){
    const root = document.getElementById("root")
    if(root === null)
        throw new Error("getting root of html file failed. the html file doesn't have a tag called root")
    const app = App().render()
    root.appendChild(app)
}
bootstrap()