export default class Collapse {
  constructor() {
    const btn = document.querySelector(".collapse-btn");
    this.collapseBlock = document.querySelector(".collapse-block");
    this.collapseBlock.addEventListener("animationend", () => {
      if (this.collapseBlock.classList.contains("collapse-up")) {
        this.collapseBlock.style.display = "none";
      }
    });
    btn.onclick = (ev) => {
      ev.preventDefault();
      this.show();
    };
  }

  show() {
    if (this.collapseBlock.classList.contains("collapse-up")) {
      this.collapseBlock.style.display = "block";
      this.collapseBlock.classList.remove("collapse-up");
      this.collapseBlock.classList.add("collapse-down");
    } else {
      this.collapseBlock.classList.remove("collapse-down");
      this.collapseBlock.classList.add("collapse-up");
    }
  }
}
