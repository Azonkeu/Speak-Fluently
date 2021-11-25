const hamburgerone = document.getElementById('hamone');
hamburgerone.addEventListener('click', () => {
  document.getElementById('iconlistone').style.width = '100%';
});

const closeNavone = document.getElementById('closeNavone');
closeNavone.addEventListener('click', () => {
  document.getElementById('iconlistone').style.display = 'none';
  window.location.reload();
});

const openNavlinkone = document.getElementById('homeone');
openNavlinkone.addEventListener('click', () => {
  document.getElementById('iconlistone').style.display = 'none';
  window.location.reload();
});

const openlinkAboutone = document.getElementById('aboutone');
openlinkAboutone.addEventListener('click', () => {
  document.getElementById('iconlistone').style.display = 'none';
  window.location.reload();
});

const openlinkhowone = document.getElementById('howitone');
openlinkhowone.addEventListener('click', () => {
  document.getElementById('iconlistone').style.display = 'none';
  window.location.reload();
});

const openlinkTeachone = document.getElementById('teacherone');
openlinkTeachone.addEventListener('click', () => {
  document.getElementById('iconlistone').style.display = 'none';
  window.location.reload();
});

const openlinkpartone = document.getElementById('partnerone');
openlinkpartone.addEventListener('click', () => {
  document.getElementById('iconlist1one').style.display = 'none';
  window.location.reload();
});

const openlinkContactone = document.getElementById('contactone');
openlinkContactone.addEventListener('click', () => {
  document.getElementById('iconlistone').style.display = 'none';
  window.location.reload();
});

const bodyCol = document.getElementById('abobody');
bodyCol.onload = function color() {
  const colorNew = document.getElementById('desktopab');
  colorNew.classList.add('newcaolor');
};
