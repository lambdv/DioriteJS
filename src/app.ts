import {Div, P, Component} from "../framework/node.ts";
import {setTitle} from "../framework/helpers.ts";

export default function App(): Component {
    setTitle("home")
    return new Div({children: [
        new P({ text: "hello", className: "text-xl text-red-500" }),
        new P({ text: "world" })
    ]});
}