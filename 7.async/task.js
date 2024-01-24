class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	/*`addClock` — добавляет новый звонок в коллекцию существующих. */
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error(" Отсутствуют обязательные аргументы ");
		}

		if (this.alarmCollection.some(eliment => eliment.time === time)) {
			console.warn(" Уже присутствует звонок на это же время ");
		}
		this.alarmCollection.push({
			time,
			callback,
			canCall: true,
		})
	}

	/*removeClock` — удаляет звонки по определённому времени. */

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(eliment => eliment.time !== time);
	}

	/*`getCurrentFormattedTime` — возвращает текущее время в строковом формате `HH:MM`. */
	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit"
		});
	}

	/*`start` — запускает будильник. */
	start() {
		if (this.intervalId) {
			return;
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(eliment => {
				if (eliment.time === this.getCurrentFormattedTime() && eliment.canCall) {
					eliment.canCall = false;
					eliment.callback();
				}
			})
		}, 1000);

	}

	// /*`stop` — останавливает выполнение интервала будильника. */
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	// /*`resetAllCalls` — сбрасывает возможность запуска всех звонков. */
	resetAllCalls() {
		this.alarmCollection.forEach(eliment => eliment.canCall = true);

	}

	// /* `clearAlarms` — удаляет все звонки. */
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}