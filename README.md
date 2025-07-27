an declarative, object oriented javascript ui framework.
```javascript
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
```
```HTML
<div class="" href="" target="">
  <p class="text-xl text-red-500" href="" target="">
    hello
  </p>
  <p class="text-xl text-red-500" href="" target="">
    world
  </p>
  <button class="" href="" target="">
    click me
  </button>
  <a class="" href="https://www.google.com/" target="_">
    google
  </a>
  <ul class="" href="" target="">
    <li class="" href="" target="">
      get groseries
    </li>
    <li class="" href="" target="">
      clean room
    </li>
    <li class="" href="" target="">
      do homework
    </li>
  </ul>
  <ol class="" href="" target="">
    <li class="" href="" target="">
      google
    </li>
  </ol>
</div>
```

# Features
- hot modular reload
- hydration
- declarative API