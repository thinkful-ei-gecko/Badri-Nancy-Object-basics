function createMyObject() {
    return {
        foo: 'bar',
        answerToUniverse: 42,
        'olly olly': 'oxen free',
        sayHello() {
            return 'hello';
        }
    }
  }

 function updateObject(obj) {
     obj.foo = 'foo';
     obj.bar = 'bar';
     obj.bizz = 'bizz';
     obj.bang = 'bang';
     return obj;
 }

 function personMaker() {
    let person = {
      firstName: 'Paul',
      lastName: 'Jones',
      fullName: function(){
          return `${this.firstName} ${this.lastName}`;
      },
    };
    return person;
  }