export class ModalComponent {
    constructor(parent){
        this.parent = parent
    }

    addListener(handler){
        console.log(handler)
        this.ref.addEventListener("click", handler)
    }

    getHTML(){
        return (
            `   <div id="create_main" class="create_main" style="display: none;">
                    <div class="create_main_content">
                        <input id="author" type="text" placeholder="Введите ваш ник" class="author">
                        <input id="header" type="text" placeholder="Введите ваш заголовок" class="create_header">
                        <input id="post_content" maxlength="100" type="text" placeholder="Введите ваше сообщение" class="post_content">
                        <button class="create_close">Создать</button>
                    </div>
                </div>
            `
        )
    }

    render() {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}