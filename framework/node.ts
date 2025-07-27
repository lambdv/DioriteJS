
export interface Visitor<T>{
    visitP(e: P): T;
}

export interface Component{
    render(): HTMLElement,
    //apply<T>(op: Visitor<T>): T;
}

export type Prop = {
    title?: string,
    innterText?: string,
    outerText?: string,
    className?: string,
    onClick?: () => void,
}

export class P implements Component {
    children: Component[];
    props: Prop;
    constructor(children: Component[], props?: Prop) {
        this.children = children;
        this.props = props || {};
    }
    render(): HTMLElement {
        let res = document.createElement("p");
        res.innerText = this.props.innterText || "";
        res.className = this.props.className || "";
        return res;
    }
}

export class Button implements Component {
    children: Component[];
    props: Prop;
    constructor(children: Component[], props?: Prop) {
        this.children = children;
        this.props = props || {};
    }
    render(): HTMLElement {
        let res = document.createElement("button");
        res.innerText = this.props.innterText || "";
        res.className = this.props.className || "";
        res.addEventListener("click", (e) => {
            this.props.onClick?.call(e);    
        })
        return res;
    }
}


export class Div implements Component {
    children: Component[];
    props: Prop;
    constructor(children: Component[], props?: Prop) {
        this.children = children;
        this.props = props || {};
    }
    render(): HTMLElement {
        const res = document.createElement("p");
        for (const child of this.children) {
            if (child) res.appendChild(child.render());
        }
        return res;
    }
}
