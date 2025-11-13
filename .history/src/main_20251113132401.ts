const heading = document.querySelector<HTMLHeadingElement>("#app");

if (heading) {
  heading.textContent = "Hello from TypeScript!";
} else {
  console.error("Could not find #app element");
}
