export default class Collapse {
  constructor() {
    const btn = document.querySelector(".collapse-btn");
    btn.onclick = (ev) => {
      ev.preventDefault();
      this.show();
    };
  }

  show() {
    const collapseBlock = document.querySelector(".collapse-block");

    if (collapseBlock) {
      collapseBlock.style.animation = "collapseUp .45s linear";
      collapseBlock.addEventListener("animationend", function () {
        collapseBlock.remove();
      });
    } else {
      const maket = document.createElement("div");
      maket.classList.add("collapse-block");
      maket.insertAdjacentHTML(
        "beforeend",
        '<div class="collapse-block-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit commodi corrupti ducimus dicta, pariatur quo eos delectus rem placeat modi optio voluptatum, ut harum hic amet velit iusto. Voluptates, cum?</div>'
      );
      document.querySelector(".collapse").appendChild(maket);
      maket.style.animation = "collapseDown .45s linear";
      maket.style.maxHeight = "fit-content";
      maket.querySelector(".collapse-block-description").style.margin = "20px";
    }
  }
}
