class ClassListForComponent {
  list = [];

  addItem(val) {
    this.list.push(val);
  }

  removeItem(val) {
    this.list.replace(val, "");
  }

  get string() {
    return this.list.join(" ");
  }
}

export default ClassListForComponent;
