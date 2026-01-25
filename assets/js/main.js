// =========================
// LIGHTBOX GALERIE
// =========================

const images = document.querySelectorAll(".zoom-image img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

if (images.length && lightbox && lightboxImg && closeBtn) {

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            document.body.style.overflow = "hidden"; // bloque scroll
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}


// =========================
// FORMULAIRE CONTACT
// =========================

const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = new FormData(form);

        try {
            const res = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { "Accept": "application/json" }
            });

            if (res.ok) {
                form.reset();
                form.innerHTML = "<p style='color:green;'>Message envoyé ✅ Merci !</p>";
            } else {
                form.innerHTML = "<p style='color:red;'>Erreur 😅 Réessaie plus tard.</p>";
            }
        } catch (error) {
            form.innerHTML = "<p style='color:red;'>Problème de connexion 😅</p>";
        }
    });
}