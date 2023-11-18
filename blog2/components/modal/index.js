export class ModalComponent {
    constructor(parent){
        this.parent = parent
        this.ref = null
    }

    addListener(handler){
        this.ref.addEventListener("click", handler)
    }

    getHTML(txt){
        return (
            `   <div id="create_main" class="create_main" style="display: none;">
                    <div class="create_main_content">
                        <input id="author" type="text" placeholder="Введите ваш ник" class="author">
                        <input id="header" type="text" placeholder="Введите ваш заголовок" class="create_header">
                        <input id="post_content" maxlength="100" type="text" placeholder="Введите ваше сообщение" class="post_content">
                        <button class="create_close">${txt}</button>
                    </div>
                </div>
            `
        )
    }

    render(handler, txt) {
        const html = this.getHTML(txt)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.ref = document.querySelector(".create_close")
        this.addListener(handler)
    }
}