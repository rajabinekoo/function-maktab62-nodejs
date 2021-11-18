// const printMessage = (message) => {
//     setTimeout(() => {
//         console.log(message);
//     }, Math.floor((Math.random() * 100) + 1));
// };


// const printAll = () => {
//     printMessage('first message');
//     printMessage('second message');
//     printMessage('third message');
// };
// printAll();


const printMessage = (message, cb) => {
    setTimeout(() => {
        console.log(message);

        cb();
    }, Math.floor((Math.random() * 1000) + 1));
};


const printAll = () => {
    printMessage('1st message', () => {
        printMessage('2nd message', () => {
            printMessage('3rd message', () => {});
        });
    });
};

printAll();