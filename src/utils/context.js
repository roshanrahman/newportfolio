class SiteContext {
  themePreference;
  skillPreference;
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    let context = loadSiteContext();
    const newColorScheme = e.matches ? "dark" : "light";
    context.themePreference = newColorScheme;
    saveSiteContext(context);
    applyDarkTheme(e.matches);
  });

export function checkIfSystemDarkMode() {
  console.log(window.matchMedia);
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    console.info("Dark theme detected on OS");
    return true;
  }
  console.info("Light theme detected on OS");
  return false;
}

export function loadSiteContext() {
  let context = localStorage.getItem("roshanPortfolioPreferences");
  if (context === null) {
    context = new SiteContext();
    context.themePreference = checkIfSystemDarkMode() ? "dark" : "light";
    context.skillPreference = "designer";
    return context;
  }
  context = JSON.parse(context);
  return context;
}

export function saveSiteContext(context) {
  localStorage.setItem("roshanPortfolioPreferences", JSON.stringify(context));
}

export function toggleDarkTheme() {
  let context = loadSiteContext();
  if (context.themePreference === "dark") {
    applyDarkTheme(false);
    context.themePreference = "light";
  } else {
    applyDarkTheme(true);
    context.themePreference = "dark";
  }
  saveSiteContext(context);
}

export function isDarkTheme() {
  let context = loadSiteContext();
  console.log(context);
  if (context.themePreference === "dark") {
    return true;
  }
  return false;
}

export function applyDarkTheme(bool) {
  if (bool) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
