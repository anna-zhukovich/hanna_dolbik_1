    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        vasya: 664,
        alexandra: 199
    }

    function getSalary(obj: any) {
        let key: keyof typeof obj;
        let sum = 0;
        for (key in obj) {
            sum += obj[key];
        }
        let averageSalary = sum / Object.keys(obj).length;
        console.log(averageSalary);
    }
    
    getSalary(salaries);