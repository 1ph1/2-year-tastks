export class PostComponent {
    constructor(parent){
        this.parent = parent
        this.txt = "Закрыть"
    }

    getHTML(data){
        return (
            `   <div id="post-page" class="post">
                    <h1 class="post_header">${data.title}</h1>
                    <p class="post_text">${data.text}</p>
                    <p class="post_author">${data.author}</p>
                    <button class="post_button">Подробнее...</button>
                <div/>
            `
        )
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}