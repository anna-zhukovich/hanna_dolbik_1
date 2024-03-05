function getCredit(sum: number): number {
    let percent = 17;
    let time = 5;
    let credit = (percent * sum * time) / 100;
    return credit;
}

let overPrice = getCredit(10000);
console.log(overPrice);
