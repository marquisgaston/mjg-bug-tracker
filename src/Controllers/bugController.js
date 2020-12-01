import bugModel from '../Models/bugModel';

export function retreiveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:23456789,
        name: "Crash on Load",
        details: "crashes after 3 seconds",
        steps: "open application and it will crash",
        version:"V2.0",
        assigned: "Ryan Beasly",
        creator: "Ryan Beasly",
        priority:1,
        time:"23;30",
    }))

    data.push(new bugModel({
        _id:23456456,
        name: "Fails to push",
        details: "won't push items",
        steps: "go to push items, and nothing happens",
        version:"V2.0",
        assigned: "Adam Conover",
        creator: "Ryan Beasly",
        priority:3,
        time:"23;30",
    }))


    let sorted = data.sort((a,b)=>{return a.priority - b.priority});
    return sorted;

} 