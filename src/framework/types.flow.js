declare class Component  {
    constructor(): this;
    render(): HTMLElement | VNode | (api: RenderAPI, cmp: Component, slotset: HashTable<Array<VNode>>) => VNode;
    connectedCallback(): void;
    disconnectedCallback(): void;
    renderedCallback(): void;
    attributeChangedCallback(attrName: string, oldValue: any, newValue: any): void;
    publicProps: any;
    publicMethods: Array<string>;
    templateUsedProps: Array<string>;
    observedAttributes: Array<string>
}

declare interface HashTable<T> {
    [key: string]: T
}

declare interface PropDef {
    initializer?: Function | number | string,
    attrName: string
}

declare interface AttrDef {
    propName: string
}

declare interface ComponentDef {
    name: string,
    props: HashTable<PropDef>,
    attrs: HashTable<AttrDef>,
    methods: HashTable<number>,
    observedProps: HashTable<number>,
    observedAttrs: HashTable<number>
}

declare class PlainHTMLElement extends HTMLElement {
    classList: DOMTokenList,
    dataset: HashTable<any>
}

declare class VM {
    privates: HashTable<any>;
    cmpProps: HashTable<any>;
    isScheduled: boolean;
    isDirty: boolean;
    def: ComponentDef;
    context: HashTable<any>;
    component: Component;
    fragment: Array<VNode>;
    listeners: Set<Set<VM>>;
}

declare class ComponentVNode extends VNode {
    Ctor: () => void;
    vm: VM;
    toString: () => string;
}

declare class VNode  {
    sel: string;
    key: number | string;
    data: Object;
    children: Array<string | VNode>;
    text: string;
    elm: EventTarget
}

declare interface RenderAPI {
    c(tagName: string, Ctor: ObjectConstructor, data: Object): VNode,
    h(tagName: string, data: Object, children?: Array<any>, text?: string): VNode,
    i(items: Array<any>, factory: () => VNode | VNode): Array<VNode | VNode>,
    s(value: any): string,
    e(): string,
    f(items: Array<any>): Array<any>,
}
