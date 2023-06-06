// Code your solutions in this file

function writeCards(arr, name) {
    const messages = [];
    for (let i = 0; i < arr.length; i++) {
        const message = `Thank you, ${arr[i]}, for the wonderful ${name} gift!`;
        console.log(message);
        messages.push(message);
    }
    return messages;
}
function countDown(num){
    let i = num
    while (i>=0){
        console.log(i);
        i--;
    }
}