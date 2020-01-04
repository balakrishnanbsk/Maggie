function maggie_swal(message, text, icon, type, button, cancel, URL) {
    swal({
        title: message,
        text: text,
        icon: icon,
        type: type,
        buttons: {
            cancel: cancel,
            confirm: button
        },
        closeOnConfirm: true,
        closeOnCancel: false,
    }).then(function(isConfirm) {
        if (URL && isConfirm) {
            window.location = URL;
        } else {
            swal.close();
        }
    });
}

function maggie_alertbox(title, content, type, text, btnClass, reload) {
    $.confirm({
        title: title,
        content: content,
        type: type,
        typeAnimated: true,
        buttons: {
            tryAgain: {
                text: text,
                btnClass: btnClass,
                action: function() {
                    if (reload == 1) {
                        $('.loading').css('display', 'block');
                        location.reload(true);
                    } else {

                    }
                }
            }
        }
    });
}

function maggie_percentage(v1, v2) {
    //v2-Largest Number
    //v1-Smallest Number
    if (v1 != 0) {
        per = (v2 / v1) * 100;
    } else {
        per = 0;
    }
    return Math.round(per);
}

function maggie_inbetweendates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate1 = moment(stopDate);
    while (currentDate <= stopDate1) {
        dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}

function maggie_fetch_URL(url) {
    var forreturn;
    var req = new Request(url);
    fetch(req)
        .then(function(response) {
            news = response.json();
            Promise.resolve(news).then((jsonResults) => {
                forreturn = jsonResults;
            })
        })
    return forreturn;
}

function maggie_suffix_number(i) {
    //input : 1
    //output: 1st
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

function back() {
    window.history.back();
}

//To find interval difference between two dates
function maggie_tofindnumberofquaters(a, b) {
    var a = moment(a, 'DD-MM-YYYY');
    var b = moment(b, 'DD-MM-YYYY');
    days = Math.ceil(b.diff(a, 'months', true) / 3);
    if (days == 0) {
        days = 1;
    }
    return days;
}

function maggie_tofindnumberofhalfyears(a, b) {
    var a = moment(a, 'DD-MM-YYYY');
    var b = moment(b, 'DD-MM-YYYY');
    days = Math.ceil(b.diff(a, 'months', true) / 6);
    if (days == 0) {
        days = 1;
    }
    console.log(days);
    return days;
}

function maggie_tofindnumberofyears(a, b) {
    var a = moment(a, 'DD-MM-YYYY');
    var b = moment(b, 'DD-MM-YYYY');
    days = Math.ceil(b.diff(a, 'years', true));
    if (days == 0) {
        days = 1;
    }
    return days;
}

function maggie_tofindnumberofmonths(a, b) {
    var a = moment(a, 'DD-MM-YYYY');
    var b = moment(b, 'DD-MM-YYYY');
    days = Math.ceil(b.diff(a, 'months', true));
    if (days == 0) {
        days = 1;
    }
    return days;
}

function maggie_tofindnumberofweeks(a, b) {
    var a = moment(a, 'DD-MM-YYYY');
    var b = moment(b, 'DD-MM-YYYY');
    days = Math.ceil(b.diff(a, 'week', true));
    if (days == 0) {
        days = 1;
    }
    return days;
}