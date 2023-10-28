import {PostPage} from "./pages/posts/index.js";

const root = document.getElementById('root');
const postPage = new PostPage(root);
postPage.render()