import {ButtonComponent} from "../../components/button/index.js";

export class MainPageOG {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const button = new ButtonComponent(this.parent)
        button.render()
    }
}