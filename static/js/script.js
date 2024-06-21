const queryElementDatum = (index, value) =>
    document.querySelectorAll(`[data-${index}="${value}"]`);

const unwrap = (node) => {
    node.replaceWith(...node.childNodes);
};

String.prototype.toElement = function () {
    var temp = document.createElement("div");
    temp.innerHTML = this;
    return temp.firstChild;
};

HTMLElement.prototype.prependChild = function (childNode) {
    if (this.firstChild) {
        this.insertBefore(childNode, this.firstChild);
    } else {
        this.appendChild(childNode);
    }
};

document.querySelectorAll("[data-wo]").forEach((element) => {
    const id = element.dataset.wo;
    element.setAttribute("href", `#${id}`);
    element.appendChild(
        `<span class="indicator" data-for="${id}"></span>`.toElement()
    );
    element.addEventListener("click", (e) => {
        e.preventDefault();
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: "smooth" });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const splashScreen = document.getElementById("splash-screen");
        splashScreen.style.opacity = "0";
        splashScreen.addEventListener("transitionend", function() {
            splashScreen.style.display = "none";
            document.getElementById("content").style.display = "block";
        });
    }, 1500); // Adjust the time (3000ms = 3s) as needed
});