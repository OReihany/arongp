import 'services/index';

Object.defineProperty(Object.prototype, "toCss", {
	configurable: true,
	get: function () {
		return Object.keys(this).filter(a => !!a && a !== "null" && a !== "undefined" && this[a]).join(" ");
	}
});
