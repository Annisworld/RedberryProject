export function generateErrors(err, container) {
    err.map((item) => {
      const newPTag = document.createElement("p");
      newPTag.innerHTML = `${item}`;
      newPTag.style.color = "red";
      container.appendChild(newPTag);
    });
  }