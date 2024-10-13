document.querySelectorAll("pre").forEach((pre) => {
  const button = document.createElement("button");
  button.innerText = "Copy";
  button.className = "copy-btn";

  const codeElement = pre.querySelector("code") || pre;

  button.addEventListener("click", () => {
    const code = codeElement.innerText;
    navigator.clipboard
      .writeText(code)
      .then(() => {
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = "Copy"), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  });

  pre.style.position = "relative";
  pre.appendChild(button);
});
