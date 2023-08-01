let n =+prompt("Enter a number");
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    document.write("&nbsp &nbsp");
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    document.write("*");
  }
  document.write("</br>");
}