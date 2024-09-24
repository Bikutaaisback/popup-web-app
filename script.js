const submit  = document.getElementById('btn');
const ok = document.getElementById('ok');
const popup = document.getElementById('pop-up');


function openPopup(){
   popup.classList.add('open-popup');
};
function closePopup(){
    popup.classList.remove('open-popup');
};
submit.addEventListener('click', openPopup);
ok.addEventListener('click', closePopup);