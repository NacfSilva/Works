function myFunction() {
  if (document.body.scrollTop > (($('#MyWork').offset().top)-150) || document.documentElement.scrollTop >  (($('#MyWork').offset().top))-150) {
       if (document.body.scrollTop >  (($('#About').offset().top)-50) || document.documentElement.scrollTop > (($('#About').offset().top)-50)  ) {
             if (document.body.scrollTop >  (($('#Contact').offset().top)-50) || document.documentElement.scrollTop > (($('#Contact').offset().top)-50)  ) {
    document.getElementById("myMenu").className = "navbar sticky-top navbar-fixed-top navbar-expand-lg navbar-light border-bottom w-100 borde-ochre bg-pastel";
    document.getElementById("myLogo").className = "changeLogo logo1 socail-vertical mt-2";
    document.getElementById("Silva").className = "Silva3";
      document.getElementById("social-em").className = "fa fa-envelope fa-2x social black-text social-vertical ";
      document.getElementById("social-gi").className = "fab fa-github fa-2x social black-text social-vertical ";
      document.getElementById("social-fi").className = "fiverr-icon social fiverr-black  social-vertical ";
    document.getElementById("rotate").className = "rotate1 mx-1 hashtag3 mt-2";
       document.getElementById("show").className = "hide";
      document.getElementById("hide").className = "";
                 
             
       document.getElementById("contact-animation").className = "col-xs-12 col-sm-8 col-md-6 col-sm-push-2 col-md-push-3 form__container animation";           document.getElementById("icon").className = "pl-3 mt-1";
     document.getElementById("menu-size").className = "menu-size coolgrey-text mb-3";
      document.getElementById("menu-size1").className = "menu-size coolgrey-text mb-3";
      document.getElementById("menu-size2").className = "menu-size coolgrey-text mb-3";
      document.getElementById("menu-size3").className = "menu-size coolgrey-text active3 mb-3";
    }else{
    document.getElementById("myMenu").className = "navbar  navbar-fixed-top sticky-top container-fluid  navbar-expand-lg navbar-dark border-bottom w-100 borde-golden bg-ivory";
    document.getElementById("myLogo").className = "changeLogo logo2 socail-vertical mt-2";
    document.getElementById("Silva").className = "Silva1";
        document.getElementById("icon").className = "pl-3 mt-1";
      document.getElementById("social-em").className = "fa fa-envelope fa-2x social white-text social-vertical ";
        document.getElementById("social-gi").className = "fab fa-github fa-2x social white-text social-vertical ";
      document.getElementById("social-fi").className = "fiverr-icon social fiverr-white  social-vertical ";
    document.getElementById("rotate").className = "rotate1 mx-1 hashtag2 mt-2";
         document.getElementById("show").className = "hide";
      document.getElementById("hide").className = "";
        
        document.getElementById("html").className = "col-12  card m-3 pt-2 html";
      document.getElementById("css").className = "col-12  card m-3 pt-2 css";
      document.getElementById("javascript").className = "col-12  card m-3 pt-2 javascript";
      document.getElementById("bootstrap").className = "col-12  card m-3 pt-2 bootstrap";
      document.getElementById("bulma").className = "col-12  card m-3 pt-2 bulma";
      document.getElementById("react").className = "col-12  card m-3 pt-2 react";
      document.getElementById("jsx").className = "col-12  card m-3 pt-2 jsx";
      document.getElementById("github").className = "col-12  card m-3 pt-2 github";
        
     document.getElementById("menu-size").className = "menu-size white-text mb-3";
      document.getElementById("menu-size1").className = "menu-size white-text mb-3";
      document.getElementById("menu-size2").className = "menu-size white-text active2 mb-3";
      document.getElementById("menu-size3").className = "menu-size white-text mb-3";
    }
  }else{
      document.getElementById("myMenu").className = "navbar navbar-fixed-top sticky-top container-fluid  navbar-expand-lg navbar-light border-bottom w-100 borde-redrush bg-white";
    document.getElementById("myLogo").className = "changeLogo logo1 socail-vertical mt-2";
    document.getElementById("Silva").className = "Silva2";
      document.getElementById("social-em").className = "fa fa-envelope fa-2x social black-text social-vertical ";
      document.getElementById("social-gi").className = "fab fa-github fa-2x social black-text social-vertical ";
      document.getElementById("social-fi").className = "fiverr-icon social fiverr-black social-vertical";
    document.getElementById("rotate").className = "rotate1 mx-1 hashtag1 mt-2"; 
       document.getElementById("show").className = "hide";
      document.getElementById("hide").className = "";
      
     /* document.getElementById("works").className = "container-fluid  pt-3   ";
      document.getElementById("websites").className = "col-11 col-md-4 m-auto  pt-5 mb-2 border-sky card";
      document.getElementById("mobiles").className = "col-11 col-md-4 m-auto mb-2  pt-5 border-sky card ";
      document.getElementById("works1").className = "container-fluid  pt-3   ";*/
      
      document.getElementById("icon").className = "pl-3 mt-1";
     document.getElementById("menu-size").className = "menu-size black-text mb-3";
      document.getElementById("menu-size1").className = "menu-size black-text active1 mb-3";
      document.getElementById("menu-size2").className = "menu-size black-text mb-3";
      document.getElementById("menu-size3").className = "menu-size black-text mb-3";
    
      }
  } else {
    document.getElementById("myMenu").className = "navbar sticky-top container-fluid  navbar-expand-lg navbar-dark bg-black  w-100 large";
    document.getElementById("myLogo").className = "";
    document.getElementById("Silva").className = "";
      document.getElementById("myLogo1").className = "";
    document.getElementById("Silva1").className = "";
    document.getElementById("rotate1").className = "rotate mx-1 hashtag";
      document.getElementById("social-em").className = "fa fa-envelope fa-2x social social-color ";
      document.getElementById("social-gi").className = "fab fa-github fa-2x social social-color ";
      document.getElementById("social-fi").className = "fiverr-icon social fiverr-color";
      document.getElementById("rotate").className = "rotate mx-1 hashtag";
      document.getElementById("show").className = "";
      document.getElementById("hide").className = "hide";
      
      document.getElementById("icon").className = "pl-3 mt-2";
    document.getElementById("menu-size").className = "Warmyellow-text active ";
      document.getElementById("menu-size1").className = "Warmyellow-text";
      document.getElementById("menu-size2").className = "Warmyellow-text";
      document.getElementById("menu-size3").className = "Warmyellow-text";
  }
}
window.onscroll = function() {myFunction()};




/* type effect*/

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #EAC67A}";
        document.body.appendChild(css);
    };