const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const colors = ["Green", "Violet", "Red"];

const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomColorNumber = () => {
    const randomNumber = numbers[getRandomValue(0, numbers.length - 1)];
    const randomColor = colors[getRandomValue(0, colors.length - 1)];
    
    return [randomNumber, randomColor];
};

// console.log(getRandomColorNumber());
export default getRandomColorNumber;
