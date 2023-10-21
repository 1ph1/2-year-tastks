import {MainPage} from "./pages/main-product/index.js";
import {MainPageOG} from "./pages/main/index.js";

const buttonToSmth = document.querySelectorAll('button');

const root = document.getElementById('root');

buttonToSmth.forEach((element) => element.addEventListener("click", function() {
    let page = element.getAttribute('id')
    if(page=="main_page"){
        const mainPageOG = new MainPageOG(root);
        mainPageOG.render()
    }else{
        const mainPage = new MainPage(root);
        mainPage.render()
    }
}))