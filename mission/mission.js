let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let spacerHeadings = document.querySelectorAll('.spacer'); 

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.className = 'dark';
        logo.src = 'byui-logo_dark.png';
        
        spacerHeadings.forEach(heading => {
            heading.className = 'spacer_dark '; 
        });
    } else {
        document.body.className = 'light';
        logo.src = 'byui-logo_blue.webp';

        spacerHeadings.forEach(heading => {
            heading.className = 'spacer';
        });
    }
}
