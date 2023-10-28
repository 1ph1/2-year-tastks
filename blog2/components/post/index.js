export class PostComponent {
    constructor(parent){
        this.parent = parent
    }

    getHTML(){
        return (
            `   <div id="post-page" class="post">
                    <h1 class="post_header">НАЗВАНИЕ</h1>
                    <p class="post_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sunt, non repudiandae obcaecati corrupti iusto nisi nesciunt. Doloremque dolor fugiat pariatur autem nesciunt vitae quam, quis perspiciatis obcaecati, laudantium earum.</p>
                    <p class="post_author">Автор</p>
                    <button class="post_button">Подробнее...</button>
                <div/>
            `
        )
    }

    render() {
        console.log(this.parent)
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}