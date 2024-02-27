let direction = prompt('Введите сторону света:');

switch (direction) {
    case 'юг':
        console.log('на юг пойдешь - счастье найдешь');
        break;
    case 'север':
        console.log('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        console.log('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        console.log('на восток пойдешь разработчиком станешь');
        break;
    default: 
        console.log("Попробуй еще раз!")
}
