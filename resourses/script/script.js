const btnSwitch = document.querySelector('.switch');

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('light');
  btnSwitch.classList.toggle('active');
});

const btnDownFender = document.querySelector('.btnDownFender');

const btnDownHusqvarna = document.querySelector('.btnDownHusqvarna');

const btnDownTea = document.querySelector('.btnDownTea');

const fenderDescription = document.querySelector('.fenderDescription');

const husqvarnaDescription = document.querySelector('.husqvarnaDescription');

const teaDescription = document.querySelector('.teaDescription');

btnDownFender.addEventListener('click', () => {
  fenderDescription.style.display = 'block';
  btnDownFender.style.display = 'none';

  btnDownHusqvarna.style.display = 'block';
  husqvarnaDescription.style.display = 'none';

  teaDescription.style.display = 'none';
  btnDownTea.style.display = 'block';
});

btnDownHusqvarna.addEventListener('click', () => {
  husqvarnaDescription.style.display = 'block';
  btnDownHusqvarna.style.display = 'none';

  btnDownFender.style.display = 'block';
  fenderDescription.style.display = 'none';

  btnDownTea.style.display = 'block';
  teaDescription.style.display = 'none';
});

btnDownTea.addEventListener('click', () => {
  btnDownTea.style.display = 'none';
  teaDescription.style.display = 'block';

  husqvarnaDescription.style.display = 'none';
  btnDownHusqvarna.style.display = 'block';

  btnDownFender.style.display = 'block';
  fenderDescription.style.display = 'none';
});
