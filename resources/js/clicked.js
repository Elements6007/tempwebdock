var resetDisp = {

    resetIndex: function (direction) {
        console.log("index reset");
        reset("logo");
        reset("divider");
        reset("nav-items");
        reset("words2", true);
        reset("words", true);
        setTimeout(() => {
            window.location.href = direction;
        }, "2000");
    },
    resetProjects: function (direction) {
        reset("logo");
        reset("divider");
        reset("nav-items");
        reset("content");
        setTimeout(() => {
            window.location.href = direction;
        }, "2000");
    },
    resetAbout: function (direction) {
        reset("logo");
        reset("divider");
        reset("nav-items");
        reset("about");
        setTimeout(() => {
            window.location.href = direction;
        }, "2000");
    },
    resetContact: function (direction) {
        reset("logo");
        reset("divider");
        reset("nav-items");
        reset("contactlinks");
        setTimeout(() => {
            window.location.href = direction;
        }, "2000");
    }

};

function clicked(location, current) {
    console.log(location, current)

    resetDisp['reset' + current](location);
}

function link(href) {
    if (href === "youtube") {
        reset("logo");
        reset("divider");
        reset("nav-items");
        reset("about");
        setTimeout(() => {
            window.location.href = 'https://www.youtube.com/@elements1122';
        }, "2000");
    } else if (href === "twitter") {
        reset("logo");
        reset("divider");
        reset("nav-items");
        reset("about");
        setTimeout(() => {
            window.location.href = 'https://twitter.com/Elements6007';
        }, "2000");
    } else if (href === "insta") {
        reset("logo");
        reset("divider");
        reset("nav-items");
        reset("about");
        setTimeout(() => {
            window.location.href = 'https://www.instagram.com/elements6007/';
        }, "2000");
    } else if (href === "github") {
        reset("logo");
        reset("divider");
        reset("nav-items");
        reset("about");
        setTimeout(() => {
            window.location.href = 'https://github.com/Elements6007';
        }, "2000");
    } else if (href === "reddit") {
        reset("logo");
        reset("divider");
        reset("nav-items");
        reset("about");
        setTimeout(() => {
            window.location.href = 'https://www.reddit.com/user/Obamacube6007';
        }, "2000");
    }
}

function reset(div, param) {
    const x = document.getElementsByClassName(div)[0];
    x.style.animationDirection = "reverse";
    x.style.animationFillMode = "forwards";

    x.classList.remove(div);
    x.classList.remove(div);

    void x.offsetWidth;

    x.classList.add(div);
    x.classList.add(div);

    if (param === true) {
        x.style.animationDuration = "1s";
        x.style.animationDelay = "0s";
    }
}