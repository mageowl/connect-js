export class Connection {
	targets = {};

	/**
	 * @type {HTMLElement}
	 */
	el = undefined;

	static connect() {
		let instance = new this();
		instance.el = document.querySelector(`[connection-id="${this.name}"]`);
		instance.onReady?.();

		instance.el.querySelectorAll("[connection-target]").forEach((element) => {
			instance.targets[element.getAttribute("connection-target")] = element;
		});
		console.log(instance.targets["Text"]);

		instance.el.querySelectorAll("[connection-action]").forEach((element) => {
			let action = element.getAttribute("connection-action").split("@");
			element.addEventListener(action[0], instance[action[1]].bind(instance));
		});
	}

	onReady() {}
}
