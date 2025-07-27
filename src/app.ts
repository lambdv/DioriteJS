import {Div, P, Component, Button} from "../framework/node.ts";
import {setTitle} from "../framework/helpers.ts";

export default function App(): Component {
    setTitle("home")
    return new Div([
        new P([], { innterText: "hello", className: "text-xl text-red-500" }),
        new P([], { innterText: "world", className: "text-xl text-red-500" }),
        new Button([],{
            innterText: "click me",
            onClick: () => {
                alert("test")
            }
        })
    ]);
}