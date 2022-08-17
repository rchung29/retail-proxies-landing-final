

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animatecss-fadeInUp');
    }
  });
});

const observer2 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animatecss-fadeInLeft');
    }
  });
});

const observer3 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animatecss-fadeInRight');
    }
  });
});

const observer4 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animatecss-fadeIn');
    }
  });
});

observer.observe(document.querySelector('#fadeInUp'));
observer.observe(document.querySelector('#fadeInUp2'));
observer.observe(document.querySelector('#fadeInUp3'));
observer2.observe(document.querySelector('#fadeInLeft'));
observer4.observe(document.querySelector('#fadeIn'));
observer3.observe(document.querySelector('#fadeInRight1'));
observer3.observe(document.querySelector('#fadeInRight2'));
observer3.observe(document.querySelector('#fadeInRight3'));
observer3.observe(document.querySelector('#fadeInRight4'));