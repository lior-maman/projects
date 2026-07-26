document.querySelectorAll(".contact-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    // מונע מהדפדפן לקפוץ לראש העמוד בגלל ה-# ב-href
    e.preventDefault();

    // פירוק המייל כדי להטעות בוטים
    const user = "lior.maman.ai+contact";
    const domain = "gmail.com";

    // הרכבת הכתובת המלאה ופתיחת חלונית שליחת מייל
    window.location.href = `mailto:${user}@${domain}`;
  });
});
