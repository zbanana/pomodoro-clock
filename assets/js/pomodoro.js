function Pomodoro() {
	var workTime = 25;
	var breakTime = 5;
	var sessionType = "work";
	var sound = "";

	this.getWorkTime = function() {
		return workTime;
	};

	this.getBreakTime = function() {
		return breakTime;
	};

	this.changeWorkTime = function(amount) {
		workTime += amount;
		workTime = Math.max(1, workTime);
		return workTime;
	};

	this.changeBreakTime = function(amount) {
		breakTime += amount;
		breakTime = Math.max(1, breakTime);
		return breakTime;
	};

	this.getSessionType = function() {
		return sessionType;
	};

	this.toggleSessionType = function() {
		switch (sessionType) {
			case "work":
				sessionType = "break";
				sound = "assets/sounds/breakTime.mp3";
				break;
			case "break":
				sessionType = "work";
				sound = "assets/sounds/workTime.mp3";
		}
		return sessionType;
	}

	this.getSound = function() {
		return sound;
	}
};