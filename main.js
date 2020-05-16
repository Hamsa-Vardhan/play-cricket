var player = /** @class */ (function () {
    function player(name) {
        this.name;
    }
    player.prototype.insertscore = function (score) {
        this.totalscore = score.reduce(function (a, b) { return a + b; });
    };
    return player;
}());
var team = /** @class */ (function () {
    function team(name) {
        this.allplayers = [];
        this.name = name;
    }
    team.prototype.insert = function (player) {
        this.allplayers.push(player);
    };
    team.prototype.gettotalscore = function () {
        var sum = 0;
        this.allplayers.forEach(function (v) {
            sum += v.totalscore;
        });
        return sum;
    };
    return team;
}());
document.addEventListener('DOMContentLoaded', function () {
    var __header = document.createElement('header');
    __header.className = 'container-fluid';
    document.body.appendChild(__header);
    var __marquee = document.createElement('marquee');
    __header.appendChild(__marquee);
    var __nav = document.createElement('nav');
    __header.appendChild(__nav);
    __nav.className = 'nav';
    __nav.id = '_nav';
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
    __ul.innerHTML += "<li class='active'><a href=\"#_first\">Home</a></li>\n\t\t\t\t\t<li><a href='#_second'>check your luck</a></li>\n\t\t\t\t\t<li><a>With computer</a></li>\n\t\t\t\t\t<li><a>Two Player<a></li>\n\t\t\t\t\t<li><a>world cup</a></li>";
    //first page text starts
    __h1_first.textContent = 'Welcome to have some fun';
    __span_h1_first.textContent = 'playing crciket';
    __button_first.type = 'button';
    __button_first.textContent = 'Play';
    __button_first.setAttribute('data-target', '#_nav');
    __button_first.addEventListener('click', function (event) {
        __nav.style.transition = 'transform 2000ms ease-out';
        __nav.style.display = 'flow-root';
        __nav.style.opacity = '1';
        __marquee.style.display = 'none';
        window.location.href = __button_first.getAttribute('data-target');
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
    // let __form_second: HTMLFormElement = document.createElement('form');
    // __second.appendChild(__form_second);
    // __form_second.className = 'container-fluid';
    // let __team1_label_second: HTMLLabelElement = document.createElement('label');
    // __second.appendChild(__team1_label_second);
    // let __team1_input_second: HTMLInputElement = document.createElement('input');
    // __form_second.appendChild(__team1_input_second);
    // let __team2_label_second: HTMLLabelElement = document.createElement('label');
    // __second.appendChild(__team2_label_second);
    // let __team2_input_second: HTMLInputElement = document.createElement('input');
    // __form_second.appendChild(__team2_input_second);
    // let __submit_form_second: HTMLInputElement = document.createElement('input');
    // __form_second.appendChild(__submit_form_second);
    var __section_second = document.createElement('section');
    __second.appendChild(__section_second);
    __section_second.className = 'container-fluid';
    var __instructions_second = document.createElement('div');
    __instructions_second.className = 'row instructions';
    __section_second.appendChild(__instructions_second);
    var __title_second = document.createElement('h1');
    __instructions_second.appendChild(__title_second);
    //__title_second.className = 'col-3 offset-4';
    var __button_second = document.createElement('button');
    __instructions_second.appendChild(__button_second);
    //__button_second.className = 'col-2';
    var __tables_second = document.createElement('div');
    __section_second.appendChild(__tables_second);
    __tables_second.className = 'container-fluid row tables';
    var __first_table_second = document.createElement('div');
    __tables_second.appendChild(__first_table_second);
    __first_table_second.className = 'col-md-12 col-lg-5';
    var __second_table_second = document.createElement('div');
    __tables_second.appendChild(__second_table_second);
    __second_table_second.className = 'col-md-12 col-lg-5';
    var datavalue = 1;
    var playernumber;
    Array.from(__tables_second.children).forEach(function (v) {
        v.innerHTML = "\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-3 active\">parent</div>\n\t\t\t<div class=\"col-1\">B1</div>\n\t\t\t<div class=\"col-1\">B2</div>\n\t\t\t<div class=\"col-1\">B3</div>\n\t\t\t<div class=\"col-1\">B4</div>\n\t\t\t<div class=\"col-1\">B5</div>\n\t\t\t<div class=\"col-1\">B6</div>\n\t\t\t<div class=\"col-3\">Total</div>\n\t\t</div>";
        datavalue = 0;
        playernumber = 0;
        for (var i = 1; i <= 10; i++) {
            v.innerHTML += "\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-3\">parent" + i + "</div>\n\t\t\t\t<div class=\"col-1 ball" + ++datavalue + "\"></div>\n\t\t\t\t<div class=\"col-1 ball" + ++datavalue + "\"></div>\n\t\t\t\t<div class=\"col-1 ball" + ++datavalue + "\"></div>\n\t\t\t\t<div class=\"col-1 ball" + ++datavalue + "\"></div>\n\t\t\t\t<div class=\"col-1 ball" + ++datavalue + "\"></div>\n\t\t\t\t<div class=\"col-1 ball" + ++datavalue + "\"></div>\n\t\t\t\t<div class=\"col-3 over" + playernumber++ + "\"></div>\n\t\t\t</div>";
        }
    });
    __title_second.textContent = '0';
    __button_second.textContent = 'start';
    __button_second.type = 'button';
    __button_second.addEventListener('click', function (event) {
        this.style.display = 'none';
        var seconds = setInterval(printseconds, 1000);
        var count = 0;
        function printseconds() {
            __title_second.textContent = "" + ++count;
            __title_second.classList.add('active');
            appenddata(count);
            if (count == 60) {
                clearInterval(seconds);
                __button_second.style.display = 'inline-block';
                __button_second.textContent = 'play again';
                __title_second.classList.remove('active');
            }
        }
    });
    var isout = false;
    playernumber = 0;
    var totalscore = 0;
    var scores = [];
    var score;
    function randomnumber(n) {
        return Math.floor(Math.random() * (n + 1));
    }
    function appenddata(count) {
        if (!isout) {
            score = randomnumber(6);
            document.querySelector(".ball" + count).textContent = "" + score;
            document.querySelector('.row .active').classList.remove('active');
            totalscore += score;
            document.querySelector(".over" + playernumber).textContent = "" + totalscore;
            if (score == 0 || count % 6 == 0) {
                scores.push(totalscore);
                isout = true;
            }
        }
        if (playernumber == Math.floor(count / 6)) {
        }
        else {
            isout = false;
            playernumber = Math.floor(count / 6);
            totalscore = 0;
        }
    }
});
//# sourceMappingURL=main.js.map