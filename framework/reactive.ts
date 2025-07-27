

// Global work queue
const updateQueue: Set<FiberNode> = new Set();

// "currently rendering" fiber (used to associate hooks)
let currentFiber: FiberNode | null = null;


export function diff(){

}

export function patch(
    batch: any
){

}

type ComponentFn = () => VNode;

type VNode = string | { type: string, props: Record<string, any>, children: VNode[] };

interface FiberNode {
  component: ComponentFn;
  dom: HTMLElement;
  prevVNode?: VNode;
  hooks: any[];
  hookIndex: number;
}

