import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

// let docOne : HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('ats','work on web',250);
// docTwo = new Payment('rpn','work on ba',350);

// let docs: HasFormatter[] =[];

// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice('ps', 'work on my project', 200);
// const invTwo = new Invoice('parm', 'work on my project', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// });


// const anchor = document.querySelector('a');

// console.log(anchor?.href)
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul =document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    
    let values : [string,string,number];
    values = [toform.value,details.value,amount.valueAsNumber];

    let doc: HasFormatter;
    if(type.value ==='invoice'){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);
    }
    list.render(doc,type.value,'end');
     
});