export interface Component{
    render(): HTMLElement
}

export abstract class Tag {
    constructor(
        children?: Component[],
        onClick?: Function
    ) {

    }
    toHTML(): Tag {
        throw new Error("Method not implemented.");
    }
}

export interface PProps {
    text: String;
    className?: String;
}

export class P implements Component {
    inner = document.createElement("p");
    text: String = "";
    className: String = "";
    self() {
        return this.inner.cloneNode() as HTMLElement;
    }

    constructor(props: PProps) {
        this.text = props.text;
        if (props.className) {
            this.className = props.className as string;
        }
    }
    render(): HTMLElement {
        let res = this.self();
        res.innerText = this.text as string;
        res.className = this.className as string;
        return res;
    }
}

export interface DivProps {
    children?: Component[];
}

export class Div implements Component {
    inner = document.createElement("div");
    children: Component[] = [];
    constructor(props: DivProps = {}) {
        if (props.children) {
            this.children = props.children;
        }
    }
    render(): HTMLElement {
        const res = this.inner.cloneNode() as HTMLElement;
        for (const child of this.children) {
            if (child) res.appendChild(child.render());
        }
        return res;
    }
}
