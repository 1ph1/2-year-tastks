export class ButtonComponent {
    constructor(parent, handler, id) {
        this.parent = parent;
        this.handler = handler;
        this.id = id
    }

    getHTML(){
        return `<button id="${this.id}" class="btn_create">Создать пост</button>`
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend');
    }
}