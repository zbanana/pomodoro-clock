$(document).ready(function() {
	var pom = new Pomodoro();
	var breakTimeSound = "";
	var workTimeSound = "";
	var timer = 0;

	function init() {
		clearInterval(timer);
		var minutes;
		var type = pom.getSessionType();
		var clockColor = "red";
		$(".clock .controlType").text(type);
		switch (type) {
			case "work":
				minutes = pom.getWorkTime();
				clockColor = "rgba(255, 0, 0, 0.5)";
				break;
			case "break":
				minutes = pom.getBreakTime();
				clockColor = "rgba(0, 255, 0, 0.5)";
		}
		var totalTime = minutes * 60;
		var timeInSeconds = minutes * 60;

		timer = setInterval(function() {
			var percentage = 100 - (timeInSeconds / totalTime) * 100;
			timeInSeconds--;
			if (timeInSeconds <= 0) {
				pom.toggleSessionType();
				$("audio").attr("src", pom.getSound());
				$("audio")[0].play();
				init();
			}
			var seconds = timeInSeconds % 60;
			var minutes = Math.floor(timeInSeconds / 60);
			$("#minutes").text(minutes.toString().length > 1 ? minutes : "0" + minutes);
			$("#seconds").text(seconds.toString().length > 1 ? seconds : "0" + seconds);
			$(".clock").css("background", "linear-gradient(to top, " + clockColor + " " + percentage + "%, rgba(0, 0, 0, 0.2) 0)");
		}, 1000);
	}

	$("#workIncreaser").on("click", function() {
		$("#workTime").text(pom.changeWorkTime(1));
	});

	$("#workDecreaser").on("click", function() {
		$("#workTime").text(pom.changeWorkTime(-1));
	});

	$("#breakIncreaser").on("click", function() {
		$("#breakTime").text(pom.changeBreakTime(1));
	});

	$("#breakDecreaser").on("click", function() {
		$("#breakTime").text(pom.changeBreakTime(-1));
	});

	$("#startButton").on("click", init);

});
