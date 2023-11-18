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
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let data_id = data[Math.floor(Math.random() * data.length)]
                let post_data = {
                    "author": data_id["id"],
                    "title": data_id["title"],
                    "text": data_id["body"]
                };
                console.log(data_id)
                const post = new PostComponent(this.parent)
                post.render(post_data)
            });
        
    }

    close(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.post_data = data[Math.floor(Math.random() * 100)];
                console.log(this.post_data)
            });
        const post = new PostComponent(this.parent)
        post.render(post_data)
        return this.modalHTML.style.display = "none"
    }

    render() {
        const modal = new ModalComponent(this.parent)
        modal.render(this.close.bind(this), this.txt2)
        this.modalHTML = document.querySelector('.create_main')

        const button = new ButtonComponent(this.parent)
        button.render(this.open.bind(this), this.txt)
    }
}