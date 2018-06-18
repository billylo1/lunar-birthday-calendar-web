let lbc = require("lunar-birthday-calendar");

function generateICSFile() {

    let inputMonth = Number(document.getElementById('month').value);
    let inputDay = Number(document.getElementById('day').value);
    let eventName = document.getElementById('eventname').value;

    let args = {lunar_month: inputMonth, lunar_day: inputDay, name: eventName, count: 100};
    let cal = lbc.generateCalendar(args);
    
    // console.log(cal.toString());
    
    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/calendar;charset=utf-8,' + encodeURI(cal.toString());
    hiddenElement.target = '_blank';
    hiddenElement.download = 'lunar.ics';
    hiddenElement.click();

    alert('lunar.ics file has been saved successfully.');

}

module.exports = {
    generateICSFile
};

