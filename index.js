const body = document.getElementById("main-body");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const docHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = scrollTop / docHeight;

  const startColor = [255, 206, 174]; // #ffceae
  const endColor = [196, 178, 246]; // #c4b2f6
  const newColor = startColor.map((start, index) =>
    Math.round(start + (endColor[index] - start) * scrollPercent)
  );

  body.style.backgroundColor = `rgb(${newColor.join(",")})`;
});
