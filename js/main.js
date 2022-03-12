const elSiteHeaderToggler = document.querySelector('.js-site-header-toggler');
const elSiteHeaderSitenav = document.querySelector('.site-header__sitenav');

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', function () {
    elSiteHeaderSitenav.classList.toggle('site-header__sitenav--open');
  });
}


const elRegistrationForm = document.querySelector('.registration-form');

if (elRegistrationForm) {
  elRegistrationForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    let data = {
      Ism: elRegistrationForm.querySelector('[name="Ism"]').value,
      Telefon: elRegistrationForm.querySelector('[name="Telefon"]').value,
      Kurs: elRegistrationForm.querySelector('[name="Kurs"]').value
    };

    fetch('https://script.google.com/macros/s/AKfycbwm6KDq2w1P_j6UzAerEc9Vgg3arErjd8uXEH78M-Lzxt22mVR6K5abqnhpzu_3TwzU/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
  });
}
