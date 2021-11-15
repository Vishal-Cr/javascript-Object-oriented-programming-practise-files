function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function HtmlElement() {
  this.click = function () {
    return "clicked!";
  };
}

function Focus() {
  this.focus = function () {
    return "focussed!";
  };
}

function HtmlSelectElement() {
  this.items = [];
  Object.defineProperty(this, "addItem", {
    set: function (value) {
      this.items.push(value);
      return this.items;
    },
  });

  Object.defineProperty(this, "removeItem", {
    set: function (value) {
      this.items.splice(items.indexOf(value), 1);
      return this.items;
    },
  });
}
extend(HtmlElement, Focus);
const H = new HtmlElement();
const F = new Focus();
const S = new HtmlSelectElement();

Object.assign(HtmlSelectElement.prototype, H);
Object.assign(HtmlSelectElement.prototype, HtmlElement.prototype);
