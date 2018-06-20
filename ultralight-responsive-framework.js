alert("hello");
/**
 * Shows Menu
 */
function ulnShowMenu(el) {
    //el.style.display = "block";    
    el.classList.add("dropped");
    setTimeout(function () {
        el.classList.add("ovfvis");
    }, 500);
}

/**
 * Hide Menu
 */
function ulnHideMenu(el) {
    //var ul = el.querySelector("ul");
    el.querySelectorAll("li").forEach(ulnHideMenu);
    //ul.querySelectorAll("ul:not(.menu)").forEach(ulnHideMenu);
    el.classList.remove("ovfvis");
    el.classList.remove("dropped");
    //el.style.display = "none";
}
/**
 * Animate Element display in
 */
function ulnMenuToggle(el) {
    if (isZeroHeight(el)) {
        ulnShowMenu(el);
    } else {
        ulnHideMenu(el);
    }
}
/**
 * Animate Element using animate.css
 */
function ulnAnim(el, efn, efo) {
    el.classList.remove(efo);
    el.classList.add(efn);
}

//Where el is the DOM element you'd like to test for visibility
function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.visibility === 'hidden' || style.display === 'none');
}

//Where el is the DOM element you'd like to test for max-height
function isZeroHeight(el) {
    var ul = el.querySelector("ul");
    var style = window.getComputedStyle(ul);
    return (style.maxHeight === '0px');
}


var lis = document.querySelectorAll(".menu:not(.hover) li");
lis.forEach(ulnMenu);
/**
 * Add click Event listener to Menus
 */
function ulnMenu(li, i) {
    var ul = li.querySelector("ul");
    if (ul != null) {
        var anc = li.querySelector("a");
        anc.addEventListener("click", function (e) {
            e.preventDefault();
            ulnMenuToggle(li);
        });
    }
}

var tgls = document.querySelectorAll("[data-toggle]");
tgls.forEach(ulnToggle);

/**
 * Element Toggle
 */
function ulnToggle(el, i) {
    var tglId = el.getAttribute("data-toggle");
    var tgls = tglId.split(" ");

    el.addEventListener("click", function (e) {
        e.preventDefault();
        for (var i = 0; i < tgls.length; i++) {
            var tglEl = document.getElementById(tgls[i]);
            ulnElementToggle(tglEl);
        }

    });
}

/**
 * 
 */
function ulnElementToggle(el) {
    var tglclass = el.getAttribute("data-toggle-class");
    if (tglclass != null && tglclass != "") {
        if (el.classList.contains(tglclass)) {
            el.classList.remove(tglclass);
        } else {
            el.classList.add(tglclass);
        }
    }
}
