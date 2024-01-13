class AlarmClock {
	constructor(intervalId = null) {
		this.alarmCollection = [];
		this.intervalId = intervalId;
	}

	/*`addClock` — добавляет новый звонок в коллекцию существующих. */
	addClock(time, callback, canCall) {
		this.time = time;
		this.callback = callback;
		this.canCall === true;
		if (this.time === null || this.callback === undefined) {
			throw new Error(" Отсутствуют обязательные аргументы ");
		}

		if (this.alarmCollection.find(call => call === time)) {
			console.warn(" Уже присутствует звонок на это же время ");
		}

		if (this.canCall) {
			this.alarmCollection.forEach(call => call.time.getHours() === new Date().getHours() && call.time.getMinutes() === new Date().getMinutes())
				.map(call => call.callback);
			return call;
		} else {
			this.canCall === false;
		}

		let arr = {
			callback,
			time,
			canCall
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
		return `${new Date().getHours()}:${new Date().getMinutes()}`;
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