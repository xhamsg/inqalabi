const nav = document.querySelector('.links');
const closemenu = document.querySelector('.fa-xmark');
const nv0 = document.querySelector('.nv-0');



nv0.addEventListener('click',show);
closemenu.addEventListener('click',close);


function show(){
    nav.style.display = 'flex';
    nav.style.top = '0';
}

function close(){
    nav.style.top = '-100%';
    
};





function sendEmail() {
    const recipientEmail = 'inqalabidawakhana@gmail.com';
    const subject = 'Subject Here';
    const body = 'Message Here';

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
};