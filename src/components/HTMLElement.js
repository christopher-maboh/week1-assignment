// Define class here
class HTMLElement{
    constructor(tag, content){
        this.tag= tag;
        this.content= content;
    }
    render(){
        return `<p>${this.tag}${this.content}<p/>`
    }
}
const output= new HTMLElement('p', '"The way to get started is to quit talking and begin doing".')
console.log(output.render());
// Export class here
export default HTMLElement;
