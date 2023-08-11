var assert = require("assert");
const chai = require("chai");
const { describe } = require("mocha");
const expect = chai.expect;

//------------expect--------------
// Case 1 : Compare value
// let a=1,b=1  //Note :also compare object,string,boolean
// expect(a).to.be.equals(b,"a and b not equal...")

// Case 2 :Compare Object
// function myObj() {
//   return {
//     a: 10,
//     b: "data",
//   };
// }
// (x = new myObj()), (y = new myObj());
// expect(x).to.be.an('object',"Not object type") // Check type of variable

// deep.equal or deep.equals
// expect(x).to.be.deep.equals(y,"Not equal x and y. ")

// Chaining Expression
// 1st :chcek x is object, 2nd :x and y are equal
// using this keyword : and, with ,but ,..
// expect(x).to.be.an('object').and.to.be.deep.equals(y,"X and Y not equals.")

// Case 3 :Compare Array
// let num= [1,2,3,0]
// expect(num).to.be.an('array').that.includes(3)

// Check array of object
// expect([{a: 1}]).to.have.deep.members([{a: 1}]); //deep check type also
// expect([{a: 1}]).to.not.have.members([{a: 1}]);

// expect(new Set([{a: 1}])).to.have.deep.keys([{b: 1}]);
// expect({x: {10: 1}}).to.have.deep.property('x', {"10": 1});

// expect({a: {b: [['x', 'y'],['x', 'y']]}}).to.have.nested.property('a.b[1]');
// expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'x'});

// expect({a: 1}).to.not.have.own.property('b');
// expect({a: 1}).to.include({a: 1}).but.not.own.include({b: 2});

// Ordring
// expect([1, 2])
//   .to.have.ordered.members([2,1])
//   .but.not.have.ordered.members([2, 1]);

// expect({a: 1, b: 2}).to.not.have.any.keys('c','d');
// expect('foo').to.be.a('STRING');
// var myObj = {
//   [Symbol.toStringTag]: 'amyCustomType'
// };

// expect(myObj).to.be.an('amyCustomType').but.not.an('object');
// expect(1).to.be.a('string', 'nooo why fail??');
// expect("jhd", 'nooo why fail??').to.be.a('string');
// expect([{a: 1}]).to.deep.include({a: 1});
// expect(0).to.be.not.ok;

// expect(1).to.not.exist;
// expect({a:1}).to.not.be.empty;
// function test () {
//   expect(arguments).to.be.arguments;
// }

// test();
// expect(arguments).to.be.arguments;
// expect({a: 1}).to.be.an.instanceof(Object);

// expect({a: 2}).to.have.property('a', 2);
// Object.prototype.b = 2;
// expect({a: 1}).to.own.have.property('b');

// expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]');
// expect({a: {b: [{c: 3}]}})
//   .to.have.deep.nested.property('a.b[1]', {c: 3});
// expect({a: 1}, 'nooo why fail??').to.have.property('a', 1);
// expect({a: 1}).to.have.property('b', undefined, 'nooo why fail??');
// expect({b: 2}).to.have.ownPropertyDescriptor('b', {
//   configurable: true,
//   enumerable: true,
//   writable: true,
//   value: 3,
// });
// expect({a: 1, b: 2}).to.have.any.keys('c', 'd');
//   var badFn = function () { throw new TypeError('Illegal salmon!'); };

// expect(badFn).to.throw("Illegal");
// var goodFn = function () {};

// expect(goodFn).to.not.throw();
// var goodFn = function () {};

// expect(goodFn).to.not.throw("sdf"); // Recommended
// expect(goodFn).to.not.throw(ReferenceError, 'x'); // Not recommended
// var err = new TypeError('Illegal salmon!');
// err.code = 42;
// var badFn = function () { throw err; };

// expect(badFn).to.throw(TypeError).with.property('code', 42);
// expect(0.5).to.be.closeTo(1, 1);
// expect([1, 2, 2]).to.have.members([ 1, 2,2]);
// expect(3).to.be.oneOf([1, 2, 3]);
// Case 4 : should()

// describe("test login test case", () => {
//   it("check email", () => {
//     expect([1, 2, 2]).to.have.members([1, 2]);
//   });
// });
