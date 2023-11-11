export class ButtonComponent {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id
        this.ref = null
    }

    addListener(handler){
        console.log(handler)
        this.ref.addEventListener("click", handler)
    }

    getHTML(txt){
        return `<button id="${this.id}" class="btn_create">${txt}</button>`
    }

    render(handler, txt) {
        const html = this.getHTML(txt)
        this.parent.insertAdjacentHTML('beforeend', html);
        this.ref = document.querySelector(".btn_create")
        this.addListener(handler)
    }
}