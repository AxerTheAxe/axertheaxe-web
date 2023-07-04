function includeHTML(file, targetElement) {
  fetch(file)
    .then(response => response.text())
    .then(content => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');
      const target = targetElement ? document.querySelector(targetElement) : document.body;
      target.innerHTML += doc.documentElement.innerHTML;
    })
    .catch(error => console.error('Error fetching include:', error));
}
