let notificationBlock = document.getElementById('notificationBlock');
let data = [{"id":1,"title":"Reactive demand-driven array","phrase":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."},
{"id":2,"title":"User-centric global info-mediaries","phrase":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."},
{"id":3,"title":"Synergistic tertiary hardware","phrase":"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."},
{"id":4,"title":"Configurable real-time success","phrase":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."},
{"id":5,"title":"Business-focused reciprocal help-desk","phrase":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."},
{"id":6,"title":"Automated foreground collaboration","phrase":"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."},
{"id":7,"title":"Customizable didactic software","phrase":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."},
{"id":8,"title":"Focused mobile structure","phrase":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."},
{"id":9,"title":"Stand-alone optimizing help-desk","phrase":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."},
{"id":10,"title":"Robust systemic infrastructure","phrase":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."}];

if(localStorage.getItem('notification') != 'disable') {
    notificationBlock.style.display = 'block';
    let dataIndex = 0;
    let dotIndex = 0;
    let textNameHTML = `<div id="textName" class="textName"></div>`;
    let notificationTextHTML = `<div id="notificationText" class="notificationText"></div>`;
    let closeBtnHTML = `<button id="closeBtn" class="closeBtn">x</button>`;
    let textOnlyHTML = `<div class="textOnly">${textNameHTML}${notificationTextHTML}</div>`;
    let textAndCloseBlockHTML = `<div class="textAndCloseBlock">${textOnlyHTML}${closeBtnHTML}</div>`;
    let checkboxHTML = `<input id="checkbox" class="checkbox" type="checkbox">`;
    let checkboxDescriptionHTML = `<span class="checkboxDescription">Disable Tips</span>`;
    let checkboxBlockHTML = `<div class="checkboxBlock">${checkboxHTML}${checkboxDescriptionHTML}</div>`;
    let previousHTML = `<button id="previous" class="previous"><img class="leftArrow" src="img/icons8-%D1%88%D0%B5%D0%B2%D1%80%D0%BE%D0%BD-%D0%B2%D0%BB%D0%B5%D0%B2%D0%BE-%D0%B2-%D0%BA%D1%80%D1%83%D0%B3%D0%B5-64.png"></button>`;
    let circle1HTML = `<button id="circle1" class="circle1"></button>`;
    let circle2HTML = `<button id="circle2" class="circle2"></button>`;
    let circle3HTML = `<button id="circle3" class="circle3"></button>`;
    let circle4HTML = `<button id="circle4" class="circle4"></button>`;
    let circle5HTML = `<button id="circle5" class="circle5"></button>`;
    let circle6HTML = `<button id="circle6" class="circle6"></button>`;
    let circlesBlockHTML = `<div class="circlesBlock">${circle1HTML}${circle2HTML}${circle3HTML}${circle4HTML}${circle5HTML}${circle6HTML}</div>`;
    let nextHTML = `<button id="next" class="next"><img class="rightArrow" src="img/icons8-%D1%88%D0%B5%D0%B2%D1%80%D0%BE%D0%BD-%D0%B2%D0%BF%D1%80%D0%B0%D0%B2%D0%BE-%D0%B2-%D0%BA%D1%80%D1%83%D0%B3%D0%B5-64.png"></button>`;
    let paginationHTML = `<div class="pagination">${previousHTML}${circlesBlockHTML}${nextHTML}</div>`;
    let optionsBlockHTML = `<div class="optionsBlock">${checkboxBlockHTML}${paginationHTML}</div>`;

    notificationBlock.innerHTML = `${textAndCloseBlockHTML} ${optionsBlockHTML}`;

    let textName = document.getElementById('textName');
    let notificationText = document.getElementById('notificationText');
    let closeBtn = document.getElementById('closeBtn');
    let checkbox = document.getElementById('checkbox');
    let circle1 = document.getElementById('circle1');
    let circle2 = document.getElementById('circle2');
    let circle3 = document.getElementById('circle3');
    let circle4 = document.getElementById('circle4');
    let circle5 = document.getElementById('circle5');
    let circle6 = document.getElementById('circle6');
    let circlesArray = [circle1, circle2, circle3, circle4, circle5, circle6];
    let previous = document.getElementById('previous');
    let next = document.getElementById('next');

    textName.innerHTML = data[dataIndex].title;
    notificationText.innerHTML = data[dataIndex].phrase;
    
    closeBtn.addEventListener('click', close);
    function close() {
        notificationBlock.style.display = 'none';
        if(checkbox.checked) {
            localStorage.setItem('notification', 'disable');
        }
    }
    circlesArray[0].style.backgroundColor = '#1092fb';
    function nextNotification() {
        dataIndex = (dataIndex + 1) % data.length;
        textName.innerHTML = data[dataIndex].title;
        notificationText.innerHTML = data[dataIndex].phrase;
        dotIndex++;
        if (dotIndex > 5) {
            dotIndex = 0;
            circlesArray[dotIndex].style.backgroundColor = '#1092fb';
            circlesArray[5].style.backgroundColor = '#cbcfd0';
        }
        else {
            if (dotIndex != 0) {
                circlesArray[dotIndex].style.backgroundColor = '#1092fb';
                circlesArray[dotIndex-1].style.backgroundColor = '#cbcfd0';
            }
            else {
                circlesArray[dotIndex].style.backgroundColor = '#1092fb';
            }
        }
    }
    next.addEventListener('click', nextNotification);
    function previousNotification() {
        dataIndex -= 1;
        if(dataIndex < 0){
            dataIndex = dataIndex + data.length;
        }
        textName.innerHTML = data[dataIndex].title;
        notificationText.innerHTML = data[dataIndex].phrase;
        dotIndex--;
        if (dotIndex < 0) {
            dotIndex = 5;
            circlesArray[dotIndex].style.backgroundColor = '#1092fb';
            circlesArray[0].style.backgroundColor = '#cbcfd0';
        }
        else if (dotIndex === -1){
            dotIndexPrevious = 5;
            circlesArray[dotIndex].style.backgroundColor = '#1092fb';
            circlesArray[0].style.backgroundColor = '#cbcfd0';
        }
        else {
            circlesArray[dotIndex].style.backgroundColor = '#1092fb';
            circlesArray[dotIndex+1].style.backgroundColor = '#cbcfd0';
        }
    }
    previous.addEventListener('click', previousNotification);
    
    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
           previousNotification();
        }
        else if(e.keyCode == '39') {
           nextNotification();
        }
        else if(e.code == 'KeyX') {
            close(); 
        }
    }
}
