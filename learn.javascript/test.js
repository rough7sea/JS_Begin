describe("pow", function() {

    describe("возводиться х в степень 3", function () {
        function makeTest(x){
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let i = 0; i < 5; i++) {
            makeTest(i);
        }
    });

    it("возводит в степень n", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("возводит в степень n", function() {
        assert.equal(pow(3, 4), 81);
    });

    it("for negative return NaN", function() {
        assert.isNaN(pow(3, -1));
    });

    it("for fractional return NaN", function() {
        assert.isNaN(pow(5, 1.5));
    });

});

describe("test", function () {

    before(()=> console.log("Start testing - before tests"));
    after(()=> console.log("End testing - after tests"));

    beforeEach(()=> console.log("Before test - start test"));
    afterEach(()=> console.log("After test - end test"));

    it('test 1',() => console.log(1));
    it('test 2',() => console.log(2));

});