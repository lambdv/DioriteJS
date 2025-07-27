export type Prop = any
// {
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
        x.innerText = this.props.innterText || "";
        x.className = this.props.className || "";
        x.setAttribute("href", this.props.href || "")
        x.setAttribute("target", this.props.target || "")

        for (const child of this.children) {
            if (child) x.appendChild(child.render());
        }
        if (this.props.onClick) {
            x.addEventListener("click", (e) => {
                this.props.onClick?.call(e);    
            });
        }
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

export class Button extends Component {
    type: string = "button";
}

export class Ul extends Component {
    type: string = "ul";
}

export class Li extends Component {
    type: string = "li";
}