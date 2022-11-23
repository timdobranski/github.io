$(document).ready( function () {
// DEFINE APP & HEADER ELEMENTS
var $app = $('#app');
var $headerContainer = $('#headerContainer');

// login form, input & button
var $loginForm = $('#loginForm');
var $loginFormInput = $('#loginInput');
var $loginFormButton = $('#loginButton');
// login status, name, and right-side info
var $loginName = $('#loginName');
var $loginStatus = $('#loginStatusLeft');
var $headerInfo = $('#headerInfoRight');


// LOGIN CREDENTIALS STORAGE
var logins = {
    tim: '123',
    student: '456'
}
var timLoggedIn = false;

var handler = function() {renderInfo(this.info)};

// RENDER SCHEDULE FUNCTION
// Everything created should have a class of 'schedule'
function renderTable(schedule) {
  // CREATE header, intro paragraph, table, and login
  var $scheduleHeader = $('<h1 class="schedule" id="scheduleHeader">Lesson Schedule</h1>');
  var $scheduleWelcome = $('<p class="schedule" id="scheduleWelcome">To book lessons, email tim@LaMesaStringSchool.com or call 619-820-6213</p>');

  var $scheduleTable = $('<table class="schedule" id="scheduleTable"></table>');

    var $scheduleHead = $('<thead class="schedule" id="scheduleHead"></thead> ');
    
      var $scheduleHeadTime = $('<th class="schedule time">Times:</th>');
      var $scheduleHeadMon = $('<th class="tableHead schedule monBooked">Mon</th>');
      var $scheduleHeadTues = $('<th class="tableHead schedule tuesBooked">Tue</th>');
      var $scheduleHeadWed = $('<th class="tableHead schedule wedBooked">Wed</th>');
      var $scheduleHeadThurs = $('<th class="tableHead schedule thursBooked">Thu</th>');
      var $scheduleHeadFri = $('<th class="tableHead schedule friBooked">Fri</th>');

    var $scheduleBody = $('<tbody class="schedule" id="schedulebody"></tbody>');
      // 3:30 Row
      var $tableRow330 = $('<tr class="schedule"></tr>');
        var $tableRow330Time = $('<td class="schedule time">3:30</td>');
        var $tableRow330Mon = $('<td class="schedule" id="mon330"></td>');
        var $tableRow330Tues = $('<td class="schedule" id="tues330"></td>');
        var $tableRow330Wed = $('<td class="schedule" id="wed330"></td>');
        var $tableRow330Thurs = $('<td class="schedule" id="thurs330"></td>');
        var $tableRow330Fri = $('<td class="schedule" id="fri330"></td>');
      // 4:00 Row
      var $tableRow4 = $('<tr class="schedule"></tr>');
        var $tableRow4Time = $('<td class="schedule time">4:00</td>');
        var $tableRow4Mon = $('<td class="schedule" id="mon4"></td>');
        var $tableRow4Tues = $('<td class="schedule" id="tues4"></td>');
        var $tableRow4Wed = $('<td class="schedule" id="wed4"></td>');
        var $tableRow4Thurs = $('<td class="schedule" id="thurs4"></td>');
        var $tableRow4Fri = $('<td class="schedule" id="fri4"></td>');
      // 4:30 Row
      var $tableRow430 = $('<tr class="schedule"></tr>');
        var $tableRow430Time = $('<td class="schedule time">4:30</td>');
        var $tableRow430Mon = $('<td class="schedule" id="mon430"></td>');
        var $tableRow430Tues = $('<td class="schedule" id="tues430"></td>');
        var $tableRow430Wed = $('<td class="schedule" id="wed430"></td>');
        var $tableRow430Thurs = $('<td class="schedule" id="thurs430"></td>');
        var $tableRow430Fri = $('<td class="schedule" id="fri430"></td>');
      // 5:00 Row
      var $tableRow5 = $('<tr class="schedule"></tr>');
        var $tableRow5Time = $('<td class="schedule time">5:00</td>');
        var $tableRow5Mon = $('<td class="schedule" id="mon5"></td>');
        var $tableRow5Tues = $('<td class="schedule" id="tues5"></td>');
        var $tableRow5Wed = $('<td class="schedule" id="wed5"></td>');
        var $tableRow5Thurs = $('<td class="schedule" id="thurs5"></td>');
        var $tableRow5Fri = $('<td class="schedule" id="fri5"></td>');
      // 5:30 Row
      var $tableRow530 = $('<tr class="schedule"></tr>');
        var $tableRow530Time = $('<td class="schedule time">5:30</td>');
        var $tableRow530Mon = $('<td class="schedule" id="mon530"></td>');
        var $tableRow530Tues = $('<td class="schedule" id="tues530"></td>');
        var $tableRow530Wed = $('<td class="schedule" id="wed530"></td>');
        var $tableRow530Thurs = $('<td class="schedule" id="thurs530"></td>');
        var $tableRow530Fri = $('<td class="schedule" id="fri530"></td>');

  // APPEND All Elements in Proper Order
  // Header, Paragraph, Table, thead, headelements, body, (row, rowelements x 5)
  $scheduleHeader.appendTo($app);
  $scheduleWelcome.appendTo($app);
  // table
  $scheduleTable.appendTo($app);
  // table head
  $scheduleHead.appendTo($scheduleTable);
    $scheduleHeadTime.appendTo($scheduleHead);
    $scheduleHeadMon.appendTo($scheduleHead);
    $scheduleHeadTues.appendTo($scheduleHead);
    $scheduleHeadWed.appendTo($scheduleHead);
    $scheduleHeadThurs.appendTo($scheduleHead);
    $scheduleHeadFri.appendTo($scheduleHead);
  // table body
  $scheduleBody.appendTo($scheduleTable);
    // 3:30 row
    $tableRow330.appendTo($scheduleBody);
      $tableRow330Time.appendTo($tableRow330);
      $tableRow330Mon.appendTo($tableRow330);
      $tableRow330Tues.appendTo($tableRow330);
      $tableRow330Wed.appendTo($tableRow330);
      $tableRow330Thurs.appendTo($tableRow330);
      $tableRow330Fri.appendTo($tableRow330);
    // 4:00 row
    $tableRow4.appendTo($scheduleBody);
      $tableRow4Time.appendTo($tableRow4);
      $tableRow4Mon.appendTo($tableRow4);
      $tableRow4Tues.appendTo($tableRow4);
      $tableRow4Wed.appendTo($tableRow4);
      $tableRow4Thurs.appendTo($tableRow4);
      $tableRow4Fri.appendTo($tableRow4);
    // 4:30 row
    $tableRow430.appendTo($scheduleBody);
      $tableRow430Time.appendTo($tableRow430);
      $tableRow430Mon.appendTo($tableRow430);
      $tableRow430Tues.appendTo($tableRow430);
      $tableRow430Wed.appendTo($tableRow430);
      $tableRow430Thurs.appendTo($tableRow430);
      $tableRow430Fri.appendTo($tableRow430);
    // 5:00 row
    $tableRow5.appendTo($scheduleBody);
      $tableRow5Time.appendTo($tableRow5);
      $tableRow5Mon.appendTo($tableRow5);
      $tableRow5Tues.appendTo($tableRow5);
      $tableRow5Wed.appendTo($tableRow5);
      $tableRow5Thurs.appendTo($tableRow5);
      $tableRow5Fri.appendTo($tableRow5);
    // 5:30 row
    $tableRow530.appendTo($scheduleBody);
      $tableRow530Time.appendTo($tableRow530);
      $tableRow530Mon.appendTo($tableRow530);
      $tableRow530Tues.appendTo($tableRow530);
      $tableRow530Wed.appendTo($tableRow530);
      $tableRow530Thurs.appendTo($tableRow530);
      $tableRow530Fri.appendTo($tableRow530);

    $loginForm.appendTo($headerContainer);
    $loginFormInput.appendTo($loginForm);
    $loginFormButton.appendTo($loginForm);

    // POPULATE SCHEDULE - Works without login functionality
    for (var spot in data) {
      // Create var for that element
      var $spot = $('#' + spot);
      // Convenience variables
      var booked = data[spot].booked;
      // If booked
      if (booked === true) {
        var name = data[spot].info.student[0];
        $spot.info = data[spot].info;
        // Set that element's class to 'day' + text to booked or student name depending on login status
        // THIS LINE WILL BE A PROBLEM AFTER THE REFACTOR
        $spot.attr('class', data[spot].bookedClass)
        if (timLoggedIn) {
          $spot.text(name); 
        } else {
          $spot.text('Booked'); 
        }
        // If Tim is logged in, add click event listeners to show student data table
        if (timLoggedIn === true) {
        // Make clicking a booked spot render an info table for that student 
          $spot.on('click', this.handler)
        } else {
        // If Tim is NOT logged in, remove event listeners
          $spot.off('click', handler, false);
        }
        // Else
        } else if (booked === false) {
          // Set class to 'day' + text to open
          $spot.attr('class', data[spot].openClass);
          $spot.text('Open!');
        // Add an event listener for clicks that opens a sign-up page
          $spot.off('click', function() {
            // For now, do nothing but test functionality
            console.log('You clicked an open spot!')
            // Render Form Function (to be built), pass it the JS obj inside schedule that was clicked on
            $('#formModal').style.display = 'block';
            // Form input then used to create new student using Student constructor
            $('#backfromsignup').on('click', function() {
              $('#formModal').style.display = 'none';
            })
          });
        } ;
    };


// HANDLE LOGIN
$('#login').on('submit', function(event) {

  event.preventDefault();
  // if password matches tim's
  if ($loginFormInput.val() === logins.tim) {
    // login tim
    login();
    }
  if ($loginFormInput.val() === logins.student) {
    // login student
    renderStudentPortal();
    }
});
};

/*///////////////////////////////////////////////////////////////////////////
 LOGIN / LOGOUT FUNCTIONS
///////////////////////////////////////////////////////////////////////////*/
var login = function (user) {
  timLoggedIn = true;   // log tim in
  $('#loginInput').val('')   // reset the input value
  $('.schedule').remove();    // remove the schedule
  renderTable(data);    // rerender the schedule
  $('#loginButton').text('Log Out');    // update header texts
  $loginName.text('Tim');
  $headerInfo.text('Teacher');
  $loginStatus.text('Logged In As: ')
  // Remove prior click handler for login button
  $('#login').off();
  // Add click handler for logout button
  $loginFormButton.on('click', function() {
    event.preventDefault();
    if (timLoggedIn && $('#loginButton').text() === 'Log Out') {
      logOut();
    }
  });
}
var logOut = function () {
    
    timLoggedIn = false;
    $('#loginStatusLeft').text("Logged Out");
    $('#loginName').text('');
    $('#headerInfoRight').text('');
    $('.schedule').remove();
    $loginFormButton.text('Login');
    renderTable(data);
    // Remove logout click handler
    $('#loginButton').off();
    // Add original click handler back
    $('#login').on('submit', function(event) {
       
      event.preventDefault();
      // if password matches tim's
      if ($loginFormInput.val() === logins.tim) {
        // login
        login();
        }
    });
}
/*///////////////////////////////////////////////////////////////////////////
 RENDER STUDENT INFO
///////////////////////////////////////////////////////////////////////////*/
function renderInfo(infoObj) {
    // Create a div for the modal
    var $modal = $('<div></div>');
    $modal.classList.add('modal');
    form.insertAdjacentElement('afterend', $modal)
    $modal.on('click', function() {
        $modal.style.display = 'none';
    })
    // Create a div for the table, add class, and append
    var infoPage = document.createElement('div');
    infoPage.classList.add('modalContainer');
    $modal.appendChild(infoPage);
    // Create a back button
    var $backButton = $('<button></button>');
    backButton.classList.add('modalButton');
    backButton.innerText = 'Back';
    infoPage.appendChild(backButton);
    backButton.on('click', function() {
        $modal.style.display = 'none';
    })
    // Create a header of spot day/time, add class and append to infopage
    var spotHeader = document.createElement('h2');
    spotHeader.classList.add('header');
    spotHeader.innerText = 'Spot: ' + infoObj.spot;
    infoPage.appendChild(spotHeader);


    // For each property
    for (var key in infoObj) {
        // If it's the student array
        if (key === 'student') {
            // Create a table element, add class and append
            var studentTable = document.createElement('table');    
            studentTable.classList.add('modalContent');
            infoPage.appendChild(studentTable);
            // For each element
            for (var i = 0; i < infoObj[key].length; i++) {
                // Create a new table row parent element, add class and append
                var infoColHead = document.createElement('tr');
                infoColHead.classList.add('modalContent');
                studentTable.appendChild(infoColHead);
                // Create two cells for the table, add classlist
                var info = document.createElement('td');
                var val = document.createElement('td')
                info.classList.add('modalContent');
                val.classList.add('modalContent');
                // Create a paragraph and set inner text to that arr element
                if (i === 0) {
                    info.innerText = 'Name: ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                if (i === 1) {
                    info.innerText = 'Phone: ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                if (i === 2) {
                    info.innerText = 'Email: ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                if (i === 3) {
                    info.innerText = 'Communication Preference: ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                if (i > 3) {
                    info.innerText = infoObj[key] + ': ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                infoColHead.appendChild(info);
                infoColHead.appendChild(val);
            }
                    // Create divider bar
        var divider = document.createElement('hr');
        divider.classList.add('modalContent', 'divider')
        studentTable.insertAdjacentElement('afterend', divider)
        
        }

        if (key === 'parent1') {
            // Create a table element, add class and append
            var parent1Table = document.createElement('table');    
            parent1Table.classList.add('modalContent');
            infoPage.appendChild(parent1Table);
            // For each element
            for (var i = 0; i < infoObj[key].length; i++) {
            // Create a new table row parent element, add class and append
            var infoColHead2 = document.createElement('tr');
            infoColHead2.classList.add('modalContent');
            parent1Table.appendChild(infoColHead2);
                // Create two cells for the table, add classlist
                var info = document.createElement('td');
                var val = document.createElement('td')
                info.classList.add('modalContent', 'parent1Arr');
                val.classList.add('modalContent', 'parent1Arr');
                // Create a paragraph and set inner text to that arr element
                if (i === 0) {
                    info.innerText = 'Parent 1 Name: ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                if (i === 1) {
                    info.innerText = 'Parent 1 Phone: ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                if (i === 2) {
                    info.innerText = 'Parent 1 Email: ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                if (i === 3) {
                    info.innerText = 'Parent 1 Communication Preference: ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                if (i > 3) {
                    info.innerText = infoObj[key] + ': ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                infoColHead2.appendChild(info);
                infoColHead2.appendChild(val);
            }
            var divider2 = document.createElement('hr');
            divider2.classList.add('modalContent', 'divider')
            parent1Table.insertAdjacentElement('afterend', divider2)
        }

        if (key === 'parent2') {
            // Create a table element, add class and append
            var parent2Table = document.createElement('table'); 
            console.log('parent2Table: ' + parent2Table);   
            parent2Table.classList.add('modalContent');
            infoPage.appendChild(parent2Table);
            // For each element
            for (var i = 0; i < infoObj[key].length; i++) {
            // Create a new table row parent element, add class and append
            var infoColHead3 = document.createElement('tr');
            infoColHead3.classList.add('modalContent');
            parent2Table.appendChild(infoColHead3);
                // Create two cells for the table, add classlist
                var info = document.createElement('td');
                var val = document.createElement('td')
                info.classList.add('modalContent', 'parent2Arr');
                val.classList.add('modalContent', 'parent2Arr');
                // Create a paragraph and set inner text to that arr element
                if (i === 0) {
                    info.innerText = 'Parent 2 Name: ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                if (i === 1) {
                    info.innerText = 'Parent 2 Phone: ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                if (i === 2) {
                    info.innerText = 'Parent 2 Email: ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                if (i === 3) {
                    info.innerText = 'Parent 2 Communication Preference: ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                if (i > 3) {
                    info.innerText = infoObj[key] + ': ';
                    val.innerText = (infoObj[key][i] || 'Not Provided');
                    if (val.innerText === 'Not Provided') {
                        val.classList.add('unfilled');
                        info.classList.add('unfilled');
                    } else {
                        val.classList.add('filled');
                        info.classList.add('filled');                      
                    }
                }
                infoColHead3.appendChild(info);
                infoColHead3.appendChild(val);
            }
        }
    }
}
// Initialization Call
renderTable(data);
});



// STUDENT CLASS CONSTRUCTOR (pseudoclassical)
// var Student = function (name, spot, phone, email, parent1, parent2, parent1Phone, parent2Phone, parent1Email, parent2Email, preferredComm) {
//     this.name = name;
//     this.spot = spot;
//     this.phone = phone;
//     this.email = email;
//     this.parent1 = parent1;
//     this.parent2 = parent2;
//     this.parent1Phone = parent1Phone;
//     this.parent2Phone = parent2Phone;
//     this.parent1Email = parent1Email;
//     this.parent2Email = parent2Email;
//     this.preferredComm = preferredComm;
// }

