var inputRadius = document.getElementById('radius'),
  elementResult = document.getElementById('result'),
  form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (e) {
    var radius = inputRadius.value || 0;

    var result = 0;

    result = 4 * Math.PI * (radius * radius);

    elementResult.innerText = result;

    e.preventDefault();
  },
  false,
);
