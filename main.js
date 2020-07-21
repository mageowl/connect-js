export class Connection {
	/**
	 * @type {HTMLElement}
	 */
	el = undefined;
	targets = {};

	constructor() {
		this.el = document.querySelector(
			`[connection-id="${this.constructor.name}"]`
		);
		this.el.querySelectorAll("[connection-target]").forEach((element) => {
			this.targets[
				element.getAttribute("connection-target")
			] = new ConnectionTarget(element);
		});
		this.el.querySelectorAll("[connection-action]").forEach((element) => {
			let action = element.getAttribute("connection-action").split("@");
			element.addEventListener(action[0], this[action[1]].bind(this));
		});

		this.onReady?.();
	}

	static connect() {
		return new this();
	}
}

class ConnectionTarget {
	#el;
	constructor(el) {
		this.#el = el;
	}

	get el() {
		return this.#el;
	}

	style(styles) {
		Object.entries(styles).forEach((style) => {
			this.#el.style[style[0]] = style[1];
		});
	}
}
