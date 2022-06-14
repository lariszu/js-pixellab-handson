function getTime() {
  const date = new Date();

  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  const milliseconds = new Date().getMilliseconds();

  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

console.log(getTime(), 'Am ajuns la Pixellab');
