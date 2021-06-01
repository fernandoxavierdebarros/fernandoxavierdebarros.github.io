// console.log(`Hello World!`)

var text = ""

// const expense = document.querySelector("#expense")


expense = new Map()                    // Tentar JSON depois ao invés de Map()

expense.set("toll", "Pedágio")
expense.set("park", "Estacionemanto")
expense.set("OfficeSupplies", "Material de escritório/Software")
expense.set("taxi", "taxi")


function handle(target, callback) {

    // var result = target.value
    // var result2 = expense.get(result)

    // console.log("result = " + result)
    // console.log("result2 = " + result2)

    // callback(x.type)

    
    var i = target.selectedIndex;

    // console.log(target.options.text)

    console.log(target.options[i].text)

}

function copy(target) {
    var i = target.selectedIndex;
    console.log(target.options[i].text)
    // code here...
}
