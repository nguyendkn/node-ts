interface String {
  capitalize(): string;
  reverse(): string;
  route(path: string): string;
  parseInt(): number;
}

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

String.prototype.route = function (path: string) {
  return "/" + path + "/";
};

String.prototype.parseInt = function () {
  return Number(this);
};
