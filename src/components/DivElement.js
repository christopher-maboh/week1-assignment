// Import HTMLElement here
import HTMLElement from './HTMLElement';

// Define class here
class DivElement extends HTMLElement{
    constructor(content){
        super(content);
        this.content= content;
    }
    render() {
        return `<div> ${this.content} </div>`
    }
};
const result = new DivElement('What a wonderful world');
console.log(result.render());

// Export class here
export default DivElement