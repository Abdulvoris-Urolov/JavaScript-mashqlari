//pending, fullfilled, rejected:

let promise = new Promise(function(resolve, reject){

});
//console.log(promise);

let isYourDadHappy = true;

const willGetNewPhone = new Promise(
    function (resolve, reject){
        if (isYourDadHappy){
            let phone = {
                brand: "Samsung",
                color: "black"
            };
            resolve(phone)    
        } else {
            let reason = new Error('your dad is unhappy')
            reject(reason)
        }
    }
)

const askDad = function () {
    willGetNewPhone
        .then(function(fullfilled){
            console.log(fullfilled)
        })
        .catch(function(error) {
            console.log(error.message)
        })
}

console.log(askDad());
