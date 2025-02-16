﻿function parseCount(sum) {
	let result = Number.parseFloat(sum);
	if (Number.isNaN(result)) {
		throw new Error("Невалидное значение");
	}
	return result;
}

function validateCount(n) {
	try {
		return parseCount(n);
	} catch (Error) {
		return Error;
	}
}
class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (this.b + this.c < this.a || this.a + this.c < this.b || this.a + this.b < this.c) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}
	get perimeter() {
		return (this.a + this.b + this.c);
	}
	get area() {
		const p = (this.a + this.b + this.c) / 2;
		return (Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (Error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует'
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует'
			}
		}
	}
}
