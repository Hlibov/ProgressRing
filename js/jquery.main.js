jQuery(function () {
	initCustomProgressRing();
});

function initCustomProgressRing() {
	$('.progress-circle-holder').each(function () {
		var holder = $(this);
		circle = holder.find('.progress-ring-circle')[0],
			radius = circle.r.baseVal.value,
			circumference = 2 * Math.PI * radius,
			percent = holder.find('.number-precent')[0].textContent,
			offset = circumference - percent / 100 * circumference;

		circle.style.strokeDasharray = circumference + " " + circumference;
		circle.style.strokeDashoffset = circumference;
		circle.style.strokeDashoffset = offset;
	});
}