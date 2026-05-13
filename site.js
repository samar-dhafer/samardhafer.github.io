(function () {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const menuButton = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-nav]");

  const storedTheme = localStorage.getItem("theme");
  root.dataset.theme = storedTheme || "light";

  function updateThemeLabel() {
    if (!toggle) return;
    const isDark = root.dataset.theme === "dark";
    const icon = toggle.querySelector("[data-theme-icon]");
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    toggle.querySelector("[data-theme-label]").textContent = isDark ? "Light" : "Dark";
    if (icon) icon.innerHTML = `<i data-lucide="${isDark ? "sun" : "moon"}"></i>`;
    if (window.lucide) window.lucide.createIcons();
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", root.dataset.theme);
      updateThemeLabel();
    });
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  }

  updateThemeLabel();
  if (window.lucide) window.lucide.createIcons();
})();
