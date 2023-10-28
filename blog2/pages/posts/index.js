import {PostComponent} from "../../components/post/index.js";
import {ButtonComponent} from "../../components/button/index.js";

export class PostPage{
    constructor(parent){
        this.parent = parent
    }

    

    render() {
        const post = new PostComponent(this.parent)
        post.render()

        const button = new ButtonComponent(this.parent)
        button.render()
    }
}