// ===== LIGHTBOX =====
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});


// ===== FORMULAIRE (FORMSPREE) =====
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

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
  });
}
