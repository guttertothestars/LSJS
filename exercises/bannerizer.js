Bannerizer
Write a function that will take a short line of text, and write it to the 
console log within a box.

Examples:
logInBox('To boldly go where no one has gone before.');
will log:
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
or
logInBox('');
+--+
|  |
|  |
|  |
+--+

function bannerizer(string) {
  let length = string.length;
  console.log(`+-${'-'.repeat(length)}-+`);
  console.log(`| ${' '.repeat(length)} |`);
  console.log(`| ${string} |`);
  console.log(`| ${' '.repeat(length)} |`);
  console.log(`+-${'-'.repeat(length)}-+`);
}