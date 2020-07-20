import { Connection } from "./main.js";

class TestApp extends Connection {
	buttonClick() {
		this.targets["text"].innerHTML = "OMG!";
	}
}

TestApp.connect();
