export type Prop = any; // {
//     title?: string,
//     innterText?: string,
//     outerText?: string,
//     className?: string,
//     href?: string,
//     onClick?: () => void,
// }

// export interface Visitor<T>{
//     visitP(e: P): T;
// }

export abstract class Component{
    children: Component[];
    props: any;
    abstract type: string;

    constructor(children?: Component[], props?: Prop) {
        this.children = children || [];
        this.props = props || {};
    }
    
    render(): HTMLElement {
        let x = document.createElement(this.type);
        x.innerText = this.props.innerText || "";
        x.className = this.props.className || "";
        // x.setAttribute("href", this.props.href || "")
        // x.setAttribute("target", this.props.target || "")

        for (const [key, value] of Object.entries(this.props)) {
            x.setAttribute(key, String(value));
        }
        for (const child of this.children) {
            if (child) x.appendChild(child.render());
        }

        if (this.props.onClick) {
            x.addEventListener("click", (e) => {
                this.props.onClick?.call(e);    
            });
        }
        x = this.decorate(x);
        return x;
    }

    decorate(x: HTMLElement){
        return x;
    }


    
    static of(type: string, children?: Component[], props?: Prop): Component{
        return new class extends Component {
            type: string = type;
            
            constructor() {
                super(children, props);
            }
        }();
    }


    //apply<T>(op: Visitor<T>): T;
}

export class Div extends Component {
    type: string = "div";
}

export class P extends Component {
    type: string = "p";
}

export class A extends Component {
    type: string = "a";
}

export class B extends Component {
    type: string = "b";
    decorater: (x: HTMLElement) => HTMLElement = (x) => {
        x.style.fontWeight = "bold";
        return x;
    }
}

export class Button extends Component {
    type: string = "button";
}

export class Ul extends Component {
    type: string = "ul";
}

export class Li extends Component {
    type: string = "li";
}


export class H1 extends Component {
    type: string = "h1";
    constructor(text: string) {
        super([], { innerText: text });
    }
}

export class H2 extends Component {
    type: string = "h2";
}

export class H3 extends Component {
    type: string = "h3";
}

export class H4 extends Component {
    type: string = "h4";
}

export class Form extends Component {
    type: string = "form";
    action: string;
    method: 'get' | 'post';
    constructor(
        action: string,
        method: 'get' | 'post',
        children?: Component[], props?: Prop
    ) {
        super(children, props);
        this.action = action;
        this.method = method;
    }

    decorate(x: HTMLElement) {
        x.setAttribute("action", this.action);
        x.setAttribute("method", this.method);
        return x;
    }
}


export class Label extends Component {
    type: string = "label";
    forId: string;
    formId: string;
    constructor(forId: string, formId: string, children?: Component[], props?: Prop) {
        super(children, props);
        this.forId = forId;
        this.formId = formId;
    }

    decorate(x: HTMLElement) {
        x.setAttribute("for", this.forId);
        x.setAttribute("form", this.formId);
        return x;
    }
}

export class Input extends Component {
    type: string = "input";
    name: string;
    value: string;
    inputType: 'text' | 'password' | 'email' | 'number' | 'date' | 'time' | 'checkbox' | 'radio' | 'submit' | 'reset' | 'button';
    placeholder?: string;
    required?: boolean;
    constructor(
        name: string, 
        value: string, 
        inputType: 'text' | 'password' | 'email' | 'number' | 'date' | 'time' | 'checkbox' | 'radio' | 'submit' | 'reset' | 'button',
        placeholder?: string,
        required?: boolean,
        children?: Component[], props?: Prop
    ) {
        super(children, props);
        this.name = name;
        this.value = value;
        this.inputType = inputType;
        this.placeholder = placeholder;
        this.required = required;
    }

    decorate(x: HTMLElement) {
        x.setAttribute("name", this.name);
        x.setAttribute("value", this.value);
        x.setAttribute("type", this.inputType);
        if (this.placeholder) x.setAttribute("placeholder", this.placeholder);
        if (this.required) x.setAttribute("required", "true");
        return x;
    }
}


export class Table extends Component {
    type: string = "table";
}

export class Td extends Component {
    type: string = "td";
}

export class Th extends Component {
    type: string = "th";
}

export class Tr extends Component {
    type: string = "tr";
}

export class Tbody extends Component {
    type: string = "tbody";
}

export class Thead extends Component {
    type: string = "thead";
}   