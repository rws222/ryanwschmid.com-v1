window.onload = function() {
    scrollHeader();
    navIndicator();
    //Remove loader
    $("#loader-wrapper").fadeOut();
    document.body.style.overflowY = "visible";
}

window.onscroll = function() {
    scrollHeader();
    navIndicator();
}

window.onresize = function() {
    scrollHeader();
    navIndicator();
}

// button; should show 6 projects when minimized; all others have class 'extra-project'
var projects_btn = document.getElementById("projects-btn");

projects_btn.onclick = function() {
    var extra_projects = document.getElementsByClassName("extra-project");
    if (projects_btn.innerText === "Show fewer") {//'show fewer' ==> 'show all'
        projects_btn.innerText = "Show all";
        for (var i = 0; i < extra_projects.length; i++) {
            extra_projects[i].classList.add("hidden-project");
        }
    } else {//'show all' ==> 'show fewer'
        projects_btn.innerText = "Show fewer";
        for (var i = 0; i < extra_projects.length; i++) {
            extra_projects[i].classList.remove("hidden-project");
        }
    }
}

/* functions */

//shows the fixed header bar on scroll given certain conditions
function scrollHeader() {
    if (document.body.scrollTop > document.getElementById("welcome-section").offsetTop - 70 || document.documentElement.scrollTop > document.getElementById("welcome-section").offsetTop - 70 || document.getElementById("body-container").offsetWidth <= 600) {
        document.getElementById("fixed-header").style.top = "0px";
    } else {
        document.getElementById("fixed-header").style.top = "-70px";
    }
}

//turns current section's link white in nav bar
function navIndicator() {
    // initialize section coordinate variables (top of each section, except contact)
    var projects = document.getElementById("projects-section").offsetTop - (screen.height / 2);
    var skills = document.getElementById("skills-section").offsetTop - (screen.height / 2);
    var leadership = document.getElementById("leadership-section").offsetTop - (screen.height / 2);
    var contact = document.getElementById("body-container").offsetHeight - screen.height - 50;
    
    //home
    if (document.body.scrollTop < projects || document.documentElement.scrollTop < projects) {
        linkColorReset();
        document.getElementById("home-link-f").classList.add("whiten");
    }
    //projects
    if ((document.body.scrollTop >= projects || document.documentElement.scrollTop >= projects) && (document.body.scrollTop < skills || document.documentElement.scrollTop < skills)) {
        linkColorReset();
        document.getElementById("projects-link-f").classList.add("whiten");
    }
    //skills
    if ((document.body.scrollTop >= skills || document.documentElement.scrollTop >= skills) && (document.body.scrollTop < leadership || document.documentElement.scrollTop < leadership)) {
        linkColorReset();
        document.getElementById("skills-link-f").classList.add("whiten");
    }
    //leadership
    if ((document.body.scrollTop >= leadership || document.documentElement.scrollTop >= leadership) && (document.body.scrollTop < contact || document.documentElement.scrollTop < contact)) {
        linkColorReset();
        document.getElementById("leadership-link-f").classList.add("whiten");
    }
    //contact
    if (document.body.scrollTop >= contact || document.documentElement.scrollTop >= contact) {
        linkColorReset();
        document.getElementById("contact-link-f").classList.add("whiten");
    }

}

//internal function for navIndicator()
function linkColorReset() {
    var items = document.getElementsByClassName("link-f");
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("whiten");
    }
}


/* Lots of event listeners */

/* nav bar links */

document.getElementById("home-link-f").onclick = function() {
    window.scrollTo({
        top: document.getElementById("static-header").offsetTop,
        behavior: 'smooth'
    });
}

document.getElementById("home-link-s").onclick = function() {
    window.scrollTo({
        top: document.getElementById("static-header").offsetTop,
        behavior: 'smooth'
    });
}

document.getElementById("home-link-m").onclick = function() {
    window.scrollTo({
        top: document.getElementById("static-header").offsetTop,
        behavior: 'smooth'
    });
}

document.getElementById("projects-link-f").onclick = function() {
    window.scrollTo({
        top: document.getElementById("projects-section").offsetTop - 70,
        behavior: 'smooth'
    });
}

document.getElementById("projects-link-s").onclick = function() {
    window.scrollTo({
        top: document.getElementById("projects-section").offsetTop - 70,
        behavior: 'smooth'
    });
}

document.getElementById("projects-link-m").onclick = function() {
    window.scrollTo({
        top: document.getElementById("projects-section").offsetTop - 70,
        behavior: 'smooth'
    });
}

document.getElementById("skills-link-f").onclick = function() {
    window.scrollTo({
        top: document.getElementById("skills-section").offsetTop - 70,
        behavior: 'smooth'
    });
}

document.getElementById("skills-link-s").onclick = function() {
    window.scrollTo({
        top: document.getElementById("skills-section").offsetTop - 70,
        behavior: 'smooth'
    });
}

document.getElementById("skills-link-m").onclick = function() {
    window.scrollTo({
        top: document.getElementById("skills-section").offsetTop - 70,
        behavior: 'smooth'
    });
}

document.getElementById("leadership-link-f").onclick = function() {
    window.scrollTo({
        top: document.getElementById("leadership-section").offsetTop - 70,
        behavior: 'smooth'
    });
}

document.getElementById("leadership-link-s").onclick = function() {
    window.scrollTo({
        top: document.getElementById("leadership-section").offsetTop - 70,
        behavior: 'smooth'
    });
}

document.getElementById("leadership-link-m").onclick = function() {
    window.scrollTo({
        top: document.getElementById("leadership-section").offsetTop - 70,
        behavior: 'smooth'
    });
}

document.getElementById("contact-link-f").onclick = function() {
    window.scrollTo({
        top: document.getElementById("contact-section").offsetTop - 70,
        behavior: 'smooth'
    });
}

document.getElementById("contact-link-s").onclick = function() {
    window.scrollTo({
        top: document.getElementById("contact-section").offsetTop - 70,
        behavior: 'smooth'
    });
}

document.getElementById("contact-link-m").onclick = function() {
    window.scrollTo({
        top: document.getElementById("contact-section").offsetTop - 70,
        behavior: 'smooth'
    });
}

/* --- Modals --- */

//mobile nav menu
$("#menu-btn").click(function() {
    $("#modal-nav-menu").css("display", "flex");
    $("body").css("overflow-y", "hidden");
});
$("#modal-nav-menu").click(function() {
    $("#modal-nav-menu").css("display", "none");
    $("body").css("overflow-y", "visible");
});


/* project section */

//Project thumbnail modals

//fin377
$("#project-fin377").click(function() {
    $("#modal-fin377").css("display", "flex");
    $("body").css("overflow-y", "hidden");
});
$("#close-btn-fin377").click(function() {
    $("#modal-fin377").css("display", "none");
    $("body").css("overflow-y", "visible");
});
//ibe capstone
$("#project-ibe-capstone").click(function() {
    $("#modal-ibe-capstone").css("display", "flex");
    $("body").css("overflow-y", "hidden");
});
$("#close-btn-ibe-capstone").click(function() {
    $("#modal-ibe-capstone").css("display", "none");
    $("body").css("overflow-y", "visible");
});
//blackjack
$("#project-blackjack").click(function() {
    $("#modal-blackjack").css("display", "flex");
    $("body").css("overflow-y", "hidden");
});
$("#close-btn-blackjack").click(function() {
    $("#modal-blackjack").css("display", "none");
    $("body").css("overflow-y", "visible");
});
//jj-comp
$("#project-jj-comp").click(function() {
    $("#modal-jj-comp").css("display", "flex");
    $("body").css("overflow-y", "hidden");
});
$("#close-btn-jj-comp").click(function() {
    $("#modal-jj-comp").css("display", "none");
    $("body").css("overflow-y", "visible");
});
//cs-classwork
$("#project-cs-classwork").click(function() {
    $("#modal-cs-classwork").css("display", "flex");
    $("body").css("overflow-y", "hidden");
});
$("#close-btn-cs-classwork").click(function() {
    $("#modal-cs-classwork").css("display", "none");
    $("body").css("overflow-y", "visible");
});
//data-str
$("#project-data-str").click(function() {
    $("#modal-data-str").css("display", "flex");
    $("body").css("overflow-y", "hidden");
});
$("#close-btn-data-str").click(function() {
    $("#modal-data-str").css("display", "none");
    $("body").css("overflow-y", "visible");
});
//business-game
$("#project-business-game").click(function() {
    $("#modal-business-game").css("display", "flex");
    $("body").css("overflow-y", "hidden");
});
$("#close-btn-business-game").click(function() {
    $("#modal-business-game").css("display", "none");
    $("body").css("overflow-y", "visible");
});
//hawk-messenger
$("#project-hawk-messenger").click(function() {
    $("#modal-hawk-messenger").css("display", "flex");
    $("body").css("overflow-y", "hidden");
});
$("#close-btn-hawk-messenger").click(function() {
    $("#modal-hawk-messenger").css("display", "none");
    $("body").css("overflow-y", "visible");
});
//ibe-fw
$("#project-ibe-fw").click(function() {
    $("#modal-ibe-fw").css("display", "flex");
    $("body").css("overflow-y", "hidden");
});
$("#close-btn-ibe-fw").click(function() {
    $("#modal-ibe-fw").css("display", "none");
    $("body").css("overflow-y", "visible");
});
//prev-site
$("#project-prev-site").click(function() {
    $("#modal-prev-site").css("display", "flex");
    $("body").css("overflow-y", "hidden");
});
$("#close-btn-prev-site").click(function() {
    $("#modal-prev-site").css("display", "none");
    $("body").css("overflow-y", "visible");
});
