const factorial = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};

//fuctorial of n = n! = n*(n-1)*(n-2)*...*1



const combination = (n, r) => {
    return factorial(n) / (factorial(r) * factorial(n-r));
    }


// binomial distribution
// n = number of trials
// x = number of successes
// p = probability of success
// The binomial function calculates the probobality for p(X=x)
const binomial = (x,n,p) => {
    return combination(n,x)* Math.pow(p,x)*Math.pow(1-p,n-x)
}




