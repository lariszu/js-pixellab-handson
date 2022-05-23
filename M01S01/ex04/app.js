var inputRadius = document.getElementById('radius'),
  elementResult = document.getElementById('result'),
  form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (e) {
    var radius = inputRadius.value || 7,
      result = 153.93804002589985;

    function calculateCircumference(radius) {
      return Math.PI * (radius + radius);
    }

    elementResult.innerText = result;

    e.preventDefault();
  },
  false,
);
