function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
}

function Email (address, type) {
    this.address = address;
    if (type === 'Home') {
        this.type = 'Home';
    } else if (type === 'Work') {
        this.type = 'Work';
    } else {
        this.type = 'Other';
    }

}


Person.prototype.addEmail = function (emailAddress, type) {
    this.emails.push(new Email(emailAddress, type));
};

var contact1 = new Person('Matty', 'W');

contact1.addEmail('matty@gmail.com', 'Work');
contact1.addEmail('mw@gmail.com', 'Home');
contact1.addEmail('mat@hotmail.com', 'School');

console.log(contact1);
