import {JSBlock} from './js-block';

export default class App {
    #jsBlock

    constructor() {
        this.#jsBlock = new JSBlock();
    }

    run() {
        const JSBlockHTML = this.#jsBlock.render();
        document.body.append(JSBlockHTMLBlockHTML);
    }
}




class App {
    run() {
        document.body.textContent = 'Hello, World!, Hello, JavaScript!';
        document.body.innerHTML = 'Hello, World!<br>Hello, JavaScript!';
    }
}

export {
    App,
}