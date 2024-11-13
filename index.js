let heroi = "salazar";
let exp = 100050;



switch (exp) {
    case 1:
        exp < 1000
        console.log(`O herói de nome ${heroi} está no nível de ferro`);
        break;
    case 2:
        exp >= 1001 && exp < 2000
        console.log(`O herói de nome ${heroi} está no nível de bronze`);
        break;
    case 3:
        exp >= 2001 && exp < 5000
        console.log(`O herói de nome ${heroi} está no nível de prata`);
        break;
    case 4:
        exp >= 6001 && exp < 7000
        console.log(`O herói de nome ${heroi} está no nível de ouro`);
        break;
    case 5:
        exp >= 7001 && exp < 8000
        console.log(`O herói de nome ${heroi} está no nível de platina`);
        break;
    case 6:
        exp >= 8001 && exp < 9000
        console.log(`O herói de nome ${heroi} está no nível de ascendente`);
        break;
    case 7:
        exp >= 9001 && exp < 10000
        console.log(`O herói de nome ${heroi} está no nível de imortal`);
        break;
    default:
        exp > 10001
        console.log(`O herói de nome ${heroi} está no nível de buddha`);
}

