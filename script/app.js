// LOGIN FORM/BUTTON
var input = document.querySelector('#loginInput');
var button = document.querySelector('#loginButton');
// Default Login Status: False
var timLoggedIn = false;

// LOGIN CREDENTIALS STORAGE
var logins = {
    tim: '123'
}

// CREATE LOGIN FORM: Form, Input, Button
var inputField = document.querySelector('form');
// When Login/Logout Button Clicked/Form Submitted:
inputField.addEventListener('submit', function(event) {
    event.preventDefault();
 if (input.value === logins.tim) {
        timLoggedIn = true;
        input.value = '';
        
        //Re-render the table as logged-in
        renderTable(schedule);

        button.innerText = 'Log Out';

        // Create a p element for logged in status
        var loginAs = document.createElement('p');
        var loginName = document.createElement('p');

        // Add classes for styling
        // loginAs.classList.add('para');
        // loginName.classList.add('para', 'user');

        // Add ID for later deletion
        loginAs.setAttribute('id', 'loginas');
        loginName.setAttribute('id', 'loginName');

        // Add text
        loginAs.innerText = "Logged in as: ";
        loginName.innerText = 'Tim';

        form.insertAdjacentElement('afterEnd', loginName);
        form.insertAdjacentElement('afterend', loginAs);
    }
});
// When Log Out Button is clicked, log out
button.addEventListener('click', function() {
    if (timLoggedIn) {
       // console.log('reached this point');
        logOut();
    }
});

// LOG IN FUNCTION if correct credentials are supplied:
function logIn(userName) {
    // Login button text changes to Log Out
    button.innerText = 'Log Out';

    // Boolean flag for logged in set to true
    timLoggedIn = true;

    // Reset input value
    input.value = '';
        
    //Re-render the table as logged-in
    renderTable(schedule);


        
    // Element for "Logged In As " and "Username" are created
    var loginAs = document.createElement('p');
    var loginName = document.createElement('p');
    // Add classes for styling
    // loginAs.classList.add('para');
    // loginName.classList.add('para', 'user');
    // Append to Page
    form.insertAdjacentElement('afterend', loginName);
    form.insertAdjacentElement('afterend', loginAs);
    // Add ID for later deletion
    loginAs.setAttribute('id', 'loginas');
    loginName.setAttribute('id', 'loginName');
    // Add text
    loginAs.innerText = "Logged in as: ";
    loginName.innerText = 'Tim';

};

// LOG OUT FUNCTION - if button is clicked and timloggedin is true
function logOut() {
    // Set timLoggedIn flag to false
    timLoggedIn = false;
    // Change button text back to Login
    button.innerText = 'Login';
    // Remove the previously generated login elements
    var loginAs = document.getElementById('loginas');
    var loginName = document.getElementById('loginName');
    loginAs.remove();
    loginName.remove();
    // Rerender schedule
    renderTable(schedule);

}


// STUDENT CLASS CONSTRUCTOR
function Student(name, spot, phone, email, parent1, parent2, parent1Phone, parent2Phone, parent1Email, parent2Email, preferredComm) {
    this.name = name;
    this.spot = spot;
    this.phone = phone;
    this.email = email;
    this.parent1 = parent1;
    this.parent2 = parent2;
    this.parent1Phone = parent1Phone;
    this.parent2Phone = parent2Phone;
    this.parent1Email = parent1Email;
    this.parent2Email = parent2Email;
    this.preferredComm = preferredComm;
}

// SCHEDULE OBJECT
var schedule = {
    // Mon Spots:
    'mon': {
        '330': {
            'booked': true,
            'info': {
                'student': ['Jonah Gardner', null, null, null],  // Name, phone, email, pref
                'parent1': ['Christina Gardner', null, 'christina@stuartgardner.com', null],
                'parent2': [null, null, null, null],
                'spot': 'Monday 3:30PM',
            }
            
        },
        '4': {
            'booked': true,
            'info': {
                'student': ['Riley Baluca', null, null, null],  // Name, phone, email, pref
                parent1: ['Rosanna Baluca', null, 'rbalucacosio@yahoo.com', null],
                parent2: [null, null, null, null],
                spot: 'Monday 4:00PM',
            }
            
        },
        '430': {
            'booked': true,
            'info': {
                'student': ['Jill Harrison', '619-599-6557', 'ajjsh98@gmail.com', 'text'],  // Name, phone, email, pref
                parent1: [null, null, null, null],
                parent2: [null, null, null, null],
                spot: 'Monday 4:30PM',
            }
            
        },
        '5': {
            'booked': true,
            'info': {
                'student': ['Levi Sklar', false, false, false],  // Name, phone, email, pref
                parent1: ['Marc Sklar', '619-981-3205', 'sklarlac@gmail.com', null],
                parent2: ['Karyn Sklar', '619-990-1597', 'krsklar@gmail.com', null],
                spot: 'Monday 5:00PM',
            }
            
        },
        '530': {
            'booked': false,
        },
    },
    'tues': {
        '330': {
            'booked': false,
        },
        '4': {
            'booked': false,
        },
        '430': {
            'booked': false,
        },
        '5': {
            'booked': false,
        },
        '530': {
            'booked': false,
        },
    },
    'wed': {
        '330': {
            'booked': false,
        },
        '4': {
            'booked': false,
        },
        '430': {
            'booked': false,
        },
        '5': {
            'booked': false,
        },
        '530': {
            'booked': false,
        },
    },
    'thurs': {
        '330': {
            'booked': false,
        },
        '4': {
            'booked': false,
        },
        '430': {
            'booked': false,
        },
        '5': {
            'booked': false,
        },
        '530': {
            'booked': false,
        },
    },
    'fri': {
        '330': {
            'booked': false,
        },
        '4': {
            'booked': false,
        },
        '430': {
            'booked': false,
        },
        '5': {
            'booked': false,
        },
        '530': {
            'booked': false,
        },
    },
    // sun: {
    //     '10': {
    //         'booked': false,
    //     },
    //     '1030': {
    //         'booked': true,
    //     },
    //     '11': {
    //         'booked': false,
    //     },
    //     '1130': {
    //         'booked': true,
    //     },
    // },
}

//var form = document.querySelector('form');

var handler = function() {renderInfo(this.info)};
// RENDER SCHEDULE FUNCTION
function renderTable(schedule) {
   //console.log('timLoggedIn: ' + timLoggedIn);
    // For each day
    for (var day in schedule) {
        // For each time
        for (var time in schedule[day]) {
            // Create var for that element
            var spot = document.querySelector(`#${day}${time}`);
            // Convenience variables
            var booked = schedule[day][time].booked;
            // If booked
            if (booked === true) {
                var name = schedule[day][time].info.student[0];
                spot.info = schedule[day][time].info;
                // Set that element's class to 'day' + text to booked or student name depending on login status
                spot.setAttribute('class', `${day}Booked`)
                spot.innerText = timLoggedIn ? name : 'Booked';

                // If Tim is logged in, add click event listeners to show student data table
                if (timLoggedIn === true) {
                    // Make clicking a booked spot render an info table for that student 

                    spot.addEventListener('click', this.handler)
                } else {
                    // If Tim is NOT logged in, remove event listeners
                    spot.removeEventListener('click', handler, false);
                }

            // Else
            } else if (booked === false) {
                // Set class to 'day' + text to open
                spot.setAttribute('class', `${day}Open`);
                spot.innerText = 'Open!';
                // Add an event listener for clicks that opens a sign-up page
                spot.addEventListener('click', function() {
                    // For now, do nothing but test functionality
                    console.log('You clicked an open spot!')
                    // Render Form Function (to be built), pass it the JS obj inside schedule that was clicked on
                    document.querySelector('#formModal').style.display = 'block';
                    // Form input then used to create new student using Student constructor
                    document.querySelector('#backfromsignup').addEventListener('click', function() {
                        document.querySelector('#formModal').style.display = 'none';
                        console.log('you clicked the back button');
                    })
                });
            } ;
        };
    };
};
// HANDLE USERNAME CLICK
// If tim logged in




var form = document.querySelector('form');

function renderInfo(infoObj) {
    // Create a div for the modal
    var modal = document.createElement('div');
    modal.classList.add('modal');
    form.insertAdjacentElement('afterend', modal)
    modal.addEventListener('click', function() {
        modal.style.display = 'none';
    })
    // Create a div for the table, add class, and append
    var infoPage = document.createElement('div');
    infoPage.classList.add('modalContainer');
    modal.appendChild(infoPage);
    // Create a back button
    var backButton = document.createElement('button');
    backButton.classList.add('modalButton');
    backButton.innerText = 'Back';
    infoPage.appendChild(backButton);
    backButton.addEventListener('click', function() {
        modal.style.display = 'none';
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


// Should create a form and append it on the page
// function renderForm(day, time) {
//   // Form > Message > Name > Phone > Email > Preferred Comm > Start Day > Submit Button
//     var signUpForm = document.createElement('div)')
//   // When submitted, generate confirmation message
// }


renderTable(schedule);

//var testInfo = schedule.mon['5'].info;
//console.log(JSON.stringify(testInfo));

//renderInfo(testInfo);

// CREATE SIGN-UP FORM FOR WHEN OPEN SPOT CLICKED

// var formElements = document.querySelectorAll('.form');
// // console.log('Form Elements: ' + JSON.stringify(formElements))
// for (var i = 0; i < formElements.length; i++) {
//     formElements[i].classList.remove('.form');
//     formElements[i].classList.add('.hidden');
// }







