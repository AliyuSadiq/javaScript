const data = [
    {principal:2500, time:1.8},
    {principal:1000, time:5},
    {principal:3000, time:1},
    {principal:2000, time:3}
]

// let interestData = []




// console.log(data)

// let run = data.length


function interestCalculator(set){
    for(let i = 0; i < set.length; i++){

    if(set[i].principal >= 2500 && set[i].time > 1 && set[i].time < 3){
        set[i].rate = 3
        set[i].interest = (set[i].principal * set[i].rate * set[i].time) / 100
    }

    else if(set[i].principal >= 2500 && set[i].time >= 3){
        set[i].rate = 4
        set[i].interest = (set[i].principal * set[i].rate * set[i].time) / 100
    }

    else if(set[i].principal < 2500 || set[i].time <= 1){
        set[i].rate = 2
        set[i].interest = (set[i].principal * set[i].rate * set[i].time) / 100
    }

    else{
        set[i].rate = 1
        set[i].interest = (set[i].principal * set[i].rate * set[i].time) / 100
    }

    
       
 }

 let interestData = set
console.log(interestData)
 return interestData

}

interestCalculator(data)



