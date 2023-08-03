export class ContainerTemplate {
    private list: HTMLElement; // Assuming `list` is an HTMLElement

    constructor(list: HTMLElement) {
        this.list = list;
    }
    render(thing: { format: () => string }, heading: string, method: string) {
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        h3.innerText = heading;
        li.append(h3);
        const p = document.createElement("p");
        p.innerText = thing.format();
        li.append(p);
        if (method === "start") {
            this.list.prepend(li);
        }
        else {
            this.list.append(li);
        }
    }
}