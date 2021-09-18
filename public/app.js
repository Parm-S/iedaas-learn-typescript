import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
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
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const toform = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let values;
    values = [toform.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
