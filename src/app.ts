import { Div, P, A, Button, Component, Ul, Li } from "../framework/node.ts";
import { setTitle } from "../framework/helpers.ts";

export default function App(): Component {
  setTitle("home");
  return new Div([
    new P([], { innterText: "hello", className: "text-xl text-red-500" }),
    new P([], { innterText: "world", className: "text-xl text-red-500" }),
    new Button([], {
      innterText: "click me",
      onClick: () => {
        alert("test");
      },
    }),
    new A([], {
      innterText: "google",
      href: "https://www.google.com/",
      target: "_",
    }),

    new Ul([
      new Li([], { innterText: "get groseries" }),
      new Li([], { innterText: "clean room" }),
      new Li([], { innterText: "do homework" }),
    ]),

    Component.of("ol", [Component.of("Li", [], { innterText: "google" })]),
  ]);
}