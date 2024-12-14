function generate(ticketDiv){

    let arrayTickets = new Array(ticketDiv);

for (let index = 0; index < arrayTickets.length; index++) {
    arrayTickets[index] = Math.floor(Math.random() * 10);
}

return arrayTickets
// returning an array 
}

function sum(ticketArr){

let addition = ticketArr.reduce((initial, current) => initial+current ,0)
return addition

}

export {generate,sum}