/* 
 *
 * /10-asynchronous/00-example/script.js - 10.0: exemple d'asynchronicité
 *

 * started at 08/05/2019
 */

(() => {
    function setupIntervalMessage(label, delay) {
        let count = 0;
        return setInterval(() => console.log(`${label}:`, ++count), delay);
    }

    let intervals = [];
    document.getElementById("run").addEventListener("click", () => {
        if (intervals.length) {
            intervals.forEach(interval => {
                clearInterval(interval);
            });
            console.clear();
        }

        // This is the important part!
        //look how all the lines below are sequential, but they will not trigger in the same order in the browser!
        // this is the concept of "asynchronicity", each line does not have to wait until the previous line of code has been executed.
        intervals.push(setupIntervalMessage("one", 1000));
        intervals.push(setupIntervalMessage("two", 1333));
        intervals.push(setupIntervalMessage("three", 2500));
        intervals.push(setupIntervalMessage("four", 5000));
        intervals.push(setupIntervalMessage("five", 10000));
    });
})();
