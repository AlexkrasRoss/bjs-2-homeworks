class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;
	}
	fix() {
		
		this.state = this.answer * 1.5;
		
	}
	set state(sum) {
		if (this.state === undefined) {
			this.answer = 100;
		}
		if (sum < 0) {
			this.answer = 0;
		}
		if (sum < 100) {
			this.answer = sum;
		}
		if (sum >= 100) {
			this.answer = 100;
		}
	}
	get state() {
		return this.answer;
	}
}
class Magazine extends PrintEditionItem {
	type = "magazine";
	}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.author = author;
		this.type = "book";
	}
}
class NovelBook extends Book {
		type = "novel";
	}

class FantasticBook extends Book {
		type = "fantastic";
}
class DetectiveBook extends Book {
		type = "detective";
	}

class Library {
	constructor(name) {
		if (typeof name === "string") {
			this.name = name;
		}
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}

	}
	findBookBy(type, value) {
		let book = this.books.find((item) => item[type] === value);
		if (book === undefined) {
			return null;
		}
		return book;
	}
	giveBookByName(bookName) {
		const book = this.findBookBy(bookName);
		if (book) {
			this.books.splice(this.books.indexOf(book), 1);
		}
		return book;
	}

}

