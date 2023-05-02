$(document).ready(function() {
    // Update time every second
    setInterval(function() {
      var time = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
      $('.time').text(time);
    }, 1000);

    // Add project to table on form submission
    $('form').submit(function(event) {
      event.preventDefault();
      var projectName = $('#projectName').val();
      var dueDate = dayjs($('#dueDate').val());
      var daysLeft = dueDate.diff(dayjs(), 'day');
      $('#projectTable').append('<tr><td>' + projectName + '</td><td>' + dueDate.format('DD/MM/YYYY') + '</td><td>' + daysLeft + ' days</td></tr>');
    });

    // Show modal on row click
    $('#projectTable').on('click', 'tr', function() {
      var projectName = $(this).find('td:first-child').text();
      var dueDate = $(this).find('td:nth-child(2)').text();
      var daysLeft = $(this).find('td:nth-child(3)').text();

      $('#modalProjectName').text(projectName);
      $('#modalDueDate').text(dueDate);
      $('#modalDaysLeft').text(daysLeft);

      $('#projectDetailsModal').modal('show');
    });
  });
