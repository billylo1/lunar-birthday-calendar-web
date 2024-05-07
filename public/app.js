let lbc = require("lunar-birthday-calendar");

function generateICSFile() {

    let inputMonth = Number(document.getElementById('month').value);
    let inputDay = Number(document.getElementById('day').value);
    let eventName = document.getElementById('eventname').value;

    let args = {lunar_month: inputMonth, lunar_day: inputDay, name: eventName, count: 60};
    let argsArray = [args];
    let cal = lbc.generateCalendar(argsArray);
    
    // console.log(cal.toString());
    
    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/calendar;charset=utf-8,' + encodeURI(cal.toString());
    hiddenElement.target = '_blank';
    hiddenElement.download = 'lunar.ics';
    hiddenElement.click();

    alert('lunar.ics file has been saved successfully.');

}

function generateICSFileBatchMode() {

    let csvContent = document.getElementById('csvContent').value;
    let lines = csvContent.split('\n');
    let argsArray = [];
    for (var i = 0; i < lines.length; i++) {
        let fields = lines[i].split(',');
        if (fields.length == 3) {
            let inputMonth = Number(fields[0]);
            let inputDay = Number(fields[1]);
            let eventName = fields[2];
            let args = {lunar_month: inputMonth, lunar_day: inputDay, name: eventName, count: 30};
            argsArray.push(args);
        }
    }    
    // console.log(argsArray);

    let cal = lbc.generateCalendar(argsArray);
    
    // console.log(cal);
    
    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/calendar;charset=utf-8,' + encodeURI(cal);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'lunar.ics';
    hiddenElement.click();

    alert('lunar.ics file has been saved successfully.');

}
module.exports = {
    generateICSFile, generateICSFileBatchMode
};