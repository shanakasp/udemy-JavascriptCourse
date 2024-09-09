document.write("Array");

var array = new Array(10, 5, 6, 11, 14, 20);
var i, j, temp;

document.write("<br>Array Before Sorting: ");
document.write(array);

for (i = 0; i < array.length; i++) {
  for (j = 0; j < array.length - 1; j++) {
    if (array[j] > array[j + 1]) {
      temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
      document.write("<br>Array After Sorting: ");
      document.write(array);
    }
  }
}
