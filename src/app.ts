import { Div, P, A, Button, Component, Ul, Li, Input, H1 } from "../framework/node.ts";
import { setTitle } from "../framework/helpers.ts";

export default function App(): Component {
  setTitle("todos");
  return new Div([
    new H1("todos"),
  ]);
}