class AlarmClock {
	constructor(intervalId = null) {
		this.alarmCollection = [];
		this.intervalId = intervalId;
	}

	/*`addClock` — добавляет новый звонок в коллекцию существующих. */
	addClock(time, callback, canCall) {
		this.time = time;
		this.callback = callback;
		this.canCall = true;

		if (this.time === null || this.callback === undefined) {
			throw new Error(" Отсутствуют обязательные аргументы ");
		}

		if (this.alarmCollection.filter(call => call === this.time)) {
			console.warn(" Уже присутствует звонок на это же время ");
		} else {
			this.alarmCollection.push(time);
		}


		if (this.alarmCollection.forEach(call => call.time.getHours() === new Date().getHours() && call.time.getMinutes() === new Date().getMinutes())) {
			return call
		}

		let arr = {
			callback,
			time,
			canCall,
		}
		this.alarmCollection.push(arr);

	}
	/*removeClock` — удаляет звонки по определённому времени. */
	removeClock() {
		if (this.alarmCollection.filter(call => call === time)) {
			;
			return call;
		}
	}

	/*`getCurrentFormattedTime` — возвращает текущее время в строковом формате `HH:MM`. */
	getCurrentFormattedTime() {
		this.hours = new Date().getHours();
		if (this.hours < 10) {
			this.hours = '0' + this.hours;
		}
		this.minutes = new Date().getMinutes()
		if (this.minutes < 10) {
			this.minutes = '0' + this.minutes;
		}
		return `${this.hours}:${this.minutes}`;
	}

	/*`start` — запускает будильник. */
	start() {
		if (this.intervalId === true) {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach(call => {
					if (call.time === getCurrentFormattedTime()) {
						call.callback();
					}
				})
			}, 1000);
		} else {
			return this.intervalId === false;
		}
	}

	/*`stop` — останавливает выполнение интервала будильника. */
	stop() {
		clearInterval = () => {
			if (this.intervalId) {
				this.intervalId.filter(call => call.intervalId === null);
				return call
			}
		}
	}

	/*`resetAllCalls` — сбрасывает возможность запуска всех звонков. */
	resetAllCalls() {
		this.alarmCollection.forEach(call => call.time === null)

	}
	/* `clearAlarms` — удаляет все звонки. */
	clearAlarms() {
		stop();
		this.alarmCollection = [];
		this.intervalId = null;
	}
}