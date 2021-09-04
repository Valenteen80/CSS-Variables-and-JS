const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  //
  //
  //   console.log(this.dataset.sizing);
  console.log(this.name);
  console.log(this.value);
  console.log(suffix);
  console.log(`--${this.name}`, this.value + suffix);
}

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];
  //   input.addEventListener("change", handleUpdate);
  input.addEventListener("mousemove", handleUpdate);
}

//
