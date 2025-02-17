document.addEventListener("DOMContentLoaded", function () {
    if (!document.cookie.includes("cookiesAccepted=true")) {
        let cookieBanner = document.createElement("div");
        cookieBanner.innerHTML = `
            <div style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);" class = "bg-secondary border border-success border border-4 pt-2 pb-2 pe-4 ps-4">
                Este sitio usa cookies. <button id="acceptCookies" class = "bg-primary pt-2 pb-2 pe-4 ps-4">Aceptar</button>
            </div>
        `;
        document.body.appendChild(cookieBanner);

        document.getElementById("acceptCookies").addEventListener("click", function () {
            document.cookie = "cookiesAccepted=true; path=/; max-age=" + 60 * 60 * 24 * 30; // Expira en 30 días
            cookieBanner.remove();
        });
    }
});