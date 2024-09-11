// import sum from "./sum"

// first argument - name of our test 
//second argument will be the code that it will execute
test("Check Sum of two positive numbers" , ()=>{

    expect(sum(2+3)).toBe(5);
});

//we expect something and it should be the result.
//we need not to import test and export etc , jest automatically understands it
