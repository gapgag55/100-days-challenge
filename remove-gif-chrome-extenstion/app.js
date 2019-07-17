window.addEventListener('DOMContentLoaded', (event) => {
  const getGIFFunc = element => {
    if (element.tagName !== 'IMG') return false;

    const match = element.outerHTML.match(/(gif|banner)/gi);
    return (match == null || match == void 0) ? false : true;
  }

  const hideElement = element => {
    element.style.display = 'none';
  }

  const imageManager = element => {
    hideElement(element);
  }

  const dom = Array.prototype.slice.call(document.querySelectorAll('*'));
  const gifs = dom.filter(getGIFFunc);

  gifs.map(imageManager);
});