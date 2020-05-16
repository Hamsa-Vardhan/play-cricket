document.addEventListener('DOMContentLoaded', function () {
    var __header = document.createElement('header');
    __header.className = 'container-fluid';
    document.body.appendChild(__header);
    var __marquee = document.createElement('marquee');
    __header.appendChild(__marquee);
    var __nav = document.createElement('nav');
    __header.appendChild(__nav);
    __nav.className = 'nav';
    var __ul = document.createElement('ul');
    __nav.appendChild(__ul);
    var __first = document.createElement('div');
    __first.className = 'first container-fluid';
    __first.id = '_first';
    document.body.appendChild(__first);
    var __section_first = document.createElement('section');
    __first.appendChild(__section_first);
    __section_first.className = 'row';
    var __h1_first = document.createElement('h1');
    __section_first.appendChild(__h1_first);
    var __span_h1_first = document.createElement('span');
    __section_first.appendChild(__span_h1_first);
    var __button_first = document.createElement('button');
    __section_first.appendChild(__button_first);
    //adding content
    __marquee.textContent = 'Play Cricket';
    __marquee.behavior = 'scroll';
    __marquee.width = '100%';
    __marquee.direction = 'right';
    __marquee.scrollAmount = 4;
    //Have to add nav content;
    __ul.innerHTML += "<li class='active'><a href=\"#_first\">Home</a></li>\n\t\t\t\t\t<li><a href='#_second'>check your luck</a></li>\n\t\t\t\t\t<li><a>With computer</a></li>\n\t\t\t\t\t<li><a>Two Player<a></li>\n\t\t\t\t\t<li><a>world cup</a></li>";
    __h1_first.textContent = 'Welcome to have some fun';
    __span_h1_first.textContent = 'playing crciket';
    __button_first.type = 'button';
    __button_first.textContent = 'Play';
    __button_first.setAttribute('data-target', '#'); //need to set target
    __button_first.addEventListener('click', function (event) {
        __nav.style.transition = 'transform 2000ms ease-out';
        __nav.style.display = 'flow-root';
        __nav.style.opacity = '1';
        __marquee.style.display = 'none';
    });
    document.querySelectorAll('.nav li').forEach(function (v) {
        v.addEventListener('click', function () {
            document.querySelector('.nav .active').classList.remove('active');
            this.classList.add('active');
        });
    });
    //second page starts
    var __second = document.createElement('div');
    document.body.appendChild(__second);
    __second.className = 'second container-fluid';
    __second.id = '_second';
});
//# sourceMappingURL=main.js.map