var inputLength = document.getElementById('length'),
  inputWidth = document.getElementById('width'),
  inputHeight = document.getElementById('height'),
  elementResult = document.getElementById('result'),
  form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (e) {
    var length = inputLength.value || 12,
      width = inputWidth.value || 3,
      height = inputHeight.value || 5,
      result = 180;

    result = length * width * height;

    elementResult.innerText = result;

    e.preventDefault();
  },
  false,
);
