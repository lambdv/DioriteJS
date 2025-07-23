an declarative, object oriented javascript ui framework.
```javascript
export default function App(): Component {
    setTitle("home")
    return new Div({children: [
        new P({ text: "hello", className: "text-xl text-red-500" }),
        new P({ text: "world" })
    ]});
}
```
```HTML
<div>
    <p class="text-xl text-red-500">hello</p>
    <p class="">world</p>
</div>
```

# Features
- hot modular reload
- hydration
- declarative API