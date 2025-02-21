document.addEventListener("DOMContentLoaded", function () {
    const text = "Hello, my name is Andriy Tryshnivskyy";
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            document.getElementById("hero-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            document.getElementById("hero-text").style.borderRight = "none"; // Remove cursor after completion
        }
    }
    typeWriter();
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 75, // Adjust to navbar height
                    behavior: "smooth"
                });
            }
        });
    });
});

