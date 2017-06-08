
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          prompt: 'Write a function named test that returns the string "This Works!".',
          test: 'describe(\'test\',function(){it("should set string properly",function(){test().should.equal("This Works!");})});'
        },
        {
          prompt: 'Write a function named "sum" that takes an array of numbers and returns the sum.',
          test: 'describe(\'sum\',function(){it("should return 0 if the input is empty",function(){sum([]).should.equal(0);});it("sums the integers in the array", function() {sum([2]).should.equal(2);sum([2,4]).should.equal(6);sum([2,4,6]).should.equal(12);sum([2,4,6,8]).should.equal(20);sum([2,4,6,8,10,]).should.equal(30);});});'
        },
        {
          prompt: 'Write a function named "doubleNumbers" takes an array of numbers and returns an array with those numbers doubled.',
          test: 'describe(\'doubleNumbers\',function(){it("should return an empty array when the input is empty",function(){doubleNumbers([]).should.equal(0);});it("should double every number in the array",function(){doubleNumbers([1,2,3]).should.equal([2,4,6]);doubleNumbers([10,20,30,40]).should.equal([20,40,60,80]);});});'
        },
        {
          prompt: 'Write a function named "multiplyNumbers" that takes an array of numbers and returns an array with those numbers multiplied by another value.',
          test: '  describe(\'multiplyNumbers\',function(){it("returns 0 when the input is empty",function(){multiplyNumbers([], 3).should.equal(0);});it("doubles every number in the given array",function(){multiplyNumbers([1,2,3], 3).should.equal([3,6,9]);multiplyNumbers([10,20,30,40]).should.equal([50,100,150,200]);});});'
        },
        {
          prompt: 'Write a function named "doubleLetters" that takes a string and doubles every letter.',
          test: 'describe(\'doubleLetters\',function(){it("should return an empty string when the input is empty",function() {doubleLetters("").should.equal("");});it("should double every letter in the given string",function(){doubleLetters("abc").should.equal("aabbcc");doubleLetters("xyzpdq").should.equal("xxyyzzppddqq");});});'
        },
        {
          prompt: 'Write a function named "sumLetters" that takes a string and returns the sum of every character in the string.',
          test: 'describe(\'sumLetters\',function(){it("returns 0 when given an empty string", function() {sumLetters("").should.equal(0);});it("returns the sum of the numbers contained in the string",function() {sumLetters("111").should.equal(3);sumLetters("2233").should.equal(10);});});'
        },
        {
          prompt: 'Write a function named "repeats" that returns true if the first half of the string equals the last half, and false if doesn\'t.',
          test: 'describe(\'repeats\', function() {it("should return true when given an empty string", function() {repeats("").should.equal(true);})it("should return true when the second half of the string equals the first", function(){repeats("bahbah").should.equal(true);repeats("nananananananana").should.eqaul(true);});it("should return false when the second half of the string does not equal the first",function(){repeats("bahba").should.equal(false);repeats("nananananann").should.equal(false);});});'
        },
        {
          prompt: 'Write a function named "countVowels" that takes a string and returns the number of vowels in the string, excluding "y".',
          test: 'describe(\'countVowels\', function() {it("should return 0 when given an empty string", function(){countVowels("").should.equal(0);});it("should return the number of vowels in a string (not counting \'y\')", function(){countVowels("aeiouy").should.equal(5);countVowels("Hello").should.equal(2);});});'
        },
        {
          prompt: 'Write a function named "onlyEven" that takes an array of numbers and returns only the even numbers.',
          test: 'describe(\'onlyEven\', function() {it("should return an empty array when the input is empty.", function(){onlyEven([]).should.equal([]);});it("should return only even numbers in an array", function(){onlyEven([1,2,3,4,5,6,7,8]).should.equal([2,4,6,8]);onlyEven([100,150,200,250,300]).should.equal([100,200,300]);});});'
        },
        {
          prompt: 'Write a function named "sortNumbers" that takes an array of numbers and sorts them from smallest to largest.',
          test: 'describe(\'sortNumbers\', function() {it("should return an empty array when the input is empty.")sortNumbers([]).should.equal([])it("should sort numbers in array from lowest to highest",function(){sortNumbers([1,2,3,4,5,6]).should.equal([1,2,3,4,5,6])sortNumbers([6,5,4,3,2,1]).should.equal([1,2,3,4,5,6])sortNumbers([3,5,1,6,2,4]).should.equal([1,2,3,4,5,6])})})'
        },
        {
          prompt: 'Write a function named "everyOther" that takes a string and returns every other character in the string.'
          test: 'describe(\'everyOther\', function() {it("It should return an empty string when given an empty string",function(){everyOther("").should.equal("");});it("It should return a string with every other letter",function(){everyOther("ab").should.equal("a");everyOther("abc").should.equal("ac");everyOther("abcd").should.equal("ac");everyOther("abcde").should.equal("ace");everyOther("Hello there").should.equal("Hlotee");});});'
        }

      ]);
    });
};
