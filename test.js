import { Connection } from "./main.js";

class TestApp extends Connection {
	textIndex = 0;

	buttonClick() {
		this.targets["text"].el.innerHTML = [
			"OMG!",
			"You did it!",
			"Wow.",
			"HOLY COW!",
			"undefind",
			"ERROR!! Error!! Everything is broken!",
			"Ugh.. Just go away!",
			"Fine. Now where's the button?",
			"NOOOO! You found it."
		][this.textIndex];
		this.textIndex++;
		switch (this.textIndex) {
			case 8:
				this.targets["btn"].style({ float: "right" });
				break;

			case 9:
				this.targets["btn"].style({ float: "initial" });

			default:
				break;
		}
	}
}

console.log(TestApp.connect());
