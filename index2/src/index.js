export function getPercents(percent, number) {
    let result;
    if(percent > 100){
        result = '% не может быть больше 100'
        return result
    } else if(percent < 0){
        result = '% не может быть меньше 0'
        return result
    }
	return number / 100 * percent;
}

getPercents(30, 200);
