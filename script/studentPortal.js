

  var renderStudentPortal = function (student) {
    // Remove the schedule
    $('.schedule').remove();
    
    // Update the header

    $('#loginStatusLeft').text('Logged In As: ')
    $('#loginName').text('Student');
    $('#loginButton').text('Log Out');
    $('#headerInfoRight').text('Mondays @ 3:30');

    // Create all elements
        // Button to view absences
        var $studentPortalContainer = $('<div class="studentPortal" id="studentPortalContainer"></div>')
        var $scheduleMakeupButton = $('<button class="studentPortal" id="scheduleMakeupButton">Schedule A Make-Up</button>');
        var $makeupsAvailable = $('<span class="studentPortal" id="makeupsAvailable">Makeups Available: </span>')
        var $numOfMakeups = $('<span class="studentPortal" id="numOfMakeups">4</span>');
        
        $studentPortalContainer.appendTo('#app');
        $scheduleMakeupButton.appendTo($studentPortalContainer);
        $makeupsAvailable.appendTo($studentPortalContainer);
        $numOfMakeups.appendTo($studentPortalContainer);
  }




