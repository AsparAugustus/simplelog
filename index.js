const prime = function() {

    console.log(JSON.stringify(this))

}

const log = function(a) {
    prime.call({a})
}

//syntax
//log.call({gas_limit, tokenAddress})


exports.log = log;