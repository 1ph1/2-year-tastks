import {PostComponent} from "../../components/post/index.js";
import {ButtonComponent} from "../../components/button/index.js";
import {ModalComponent} from "../../components/modal/index.js"

export class PostPage{
    constructor(parent){
        this.parent = parent
        this.modalHTML = null
        this.txt = "Создать пост"
        this.txt2 = "Закрыть"
    }

    open() {
        return this.modalHTML.style.display = 'block'
        
    }

    close(){
        return this.modalHTML.style.display = "none"
    }

    getData(){
        return {
            "title": "НАЗВАНИЕ",
            "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sunt, non repudiandae obcaecati corrupti iusto nisi nesciunt. Doloremque dolor fugiat pariatur autem nesciunt vitae quam, quis perspiciatis obcaecati, laudantium earum.",
            "author": "Автор"
        }
    }

    render() {
        const post = new PostComponent(this.parent)
        const data = this.getData()
        post.render(data)

        const modal = new ModalComponent(this.parent)
        modal.render()
        this.modalHTML = document.querySelector('.create_main')
        const btnModal = new ButtonComponent(this.modalHTML)
        btnModal.render(this.close.bind(this), this.txt2)
        console.log(this.modalHTML)

        const button = new ButtonComponent(this.parent)
        button.render(this.open.bind(this), this.txt)
    }
}