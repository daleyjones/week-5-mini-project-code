
$(document).ready(function() {
    // Update time every second
    setInterval(function() {
      var time = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
      $('.time').text(time);
    }, 1000);
  });
  






$(document).ready(function() {
    // Add project to table on form submission
    $('form').submit(function(event) {
      event.preventDefault();
      var projectName = $('#projectName').val();
      var dueDate = dayjs($('#dueDate').val());
      var daysLeft = dueDate.diff(dayjs(), 'day');
      $('#projectTable').append('<tr><td>' + projectName + '</td><td>' + dueDate.format('DD/MM/YYYY') + '</td><td>' + daysLeft + ' days</td></tr>');
    });
  });
  