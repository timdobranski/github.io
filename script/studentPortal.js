

  var renderStudentPortal = function (student) {
    // Remove the schedule
    $('.schedule').remove();
    
    // Create all elements
        // Button to view absences
        var $scheduleMakeupButton = $('<button class="studentPortal" id="scheduleMakeupButton>Schedule A Make-Up</button>');
        var $makeupsAvailable = $('<span class="studentPortal" id="makeupsAvailable">Makeups Available: </span>')

        $scheduleMakeupButton.appendTo('#app');
        $makeupsAvailable.appendTo('#app');
  }




