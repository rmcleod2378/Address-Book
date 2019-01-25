"use strict";

class AddressBook {
    constructor(){
        this.contacts = [];
    }

add(info) {
    this.contacts.push(info);
    }
deleteAt(index){
    this.contacts.splice(index, 1);
    }
print(){
    for (let i = 0; i < this.contacts.length; i++)
    console.log(this.contacts[i]);
    }
}
class Contact {
    constructor(name, email, relation, phone) {
        this.name = name;
        this.email = email;
        this.relation = relation;
        this.phone = phone;
    }
}

let book = new AddressBook();
book.add(new Contact("Renee", "renee@email.com", "self", "8889996666"));
book.add(new Contact("Bob", "bob@email.com", "friend", "8882223344"));
book.add(new Contact("Sarah", "sarah@email.com", "friend", "8884441111"));
book.print();

while (true) {
    const choice = prompt("Would you like to Add, Print, Delete, or Quit?");
    if (choice === "add"){
        const name = prompt("enter name: ");
        const email = prompt("enter email: ");
        const relation = prompt("enter relation: ");
        const phone = prompt("enter phone: ");
        book.add(new Contact(name, email, relation, phone));
    }
    else if (choice === "print") {
        book.print();
        
    }
    else if (choice === "delete") {
        let index = prompt("What index number do you want to delete");
        book.deleteAt(index);                   
    }
    else if (choice === "quit") {
        console.log("Bye");
        break;
    }
    
    }
   
    

