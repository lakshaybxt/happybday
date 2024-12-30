

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
    var current = new Date(); // Get the current date and time
    var years, months, days, hours, minutes, seconds;

    // Calculate the total difference in seconds
    var totalSeconds = Math.floor((current - date) / 1000);

    // Initialize years, months, days, hours, minutes, and seconds
    years = current.getFullYear() - date.getFullYear();
    months = current.getMonth() - date.getMonth();
    days = current.getDate() - date.getDate();
    hours = current.getHours() - date.getHours();
    minutes = current.getMinutes() - date.getMinutes();
    seconds = current.getSeconds() - date.getSeconds();

    // Adjust for negative months
    if (months < 0) {
        years--;
        months += 12;
    }

    // Adjust for negative days
    if (days < 0) {
        months--;
        var lastMonth = new Date(current.getFullYear(), current.getMonth(), 0);
        days += lastMonth.getDate(); // Add days in the previous month
    }

    // Adjust for negative hours
    if (hours < 0) {
        days--;
        hours += 24;
    }

    // Adjust for negative minutes
    if (minutes < 0) {
        hours--;
        minutes += 60;
    }

    // Adjust for negative seconds
    if (seconds < 0) {
        minutes--;
        seconds += 60;
    }

    // Build the result string
    var result = 
        "Years <span class=\"digit\">" + years + "</span> " +
        "Months <span class=\"digit\">" + months + "</span> " +
        "Days <span class=\"digit\">" + days + "</span> " +
        "Hours <span class=\"digit\">" + (hours < 10 ? "0" + hours : hours) + "</span> " +
        "Minutes <span class=\"digit\">" + (minutes < 10 ? "0" + minutes : minutes) + "</span> " +
        "Seconds <span class=\"digit\">" + (seconds < 10 ? "0" + seconds : seconds) + "</span>";
    $("#clock").html(result);

	// Update message box
	var text = "DON'T KNOW ABOUT THE WORLD BUT I JUST GOT LUCKIER SINCE:) ";
	$("#message-box").html(text);
}
