!(function () {
  try {
    var d = document.documentElement,
      c = d.classList;
    c.remove("light", "dark");
    var e = localStorage.getItem("theme");
    if ("system" === e || (!e && true)) {
      var t = "(prefers-color-scheme: dark)",
        m = window.matchMedia(t);
      if (m.media !== t || m.matches) {
        d.style.colorScheme = "dark";
        c.add("dark");
      } else {
        d.style.colorScheme = "light";
        c.add("light");
      }
    } else if (e) {
      c.add(e || "");
    }
    if (e === "light" || e === "dark") d.style.colorScheme = e;
  } catch (e) {}
})();

//todo: drop down event listener
function toggleDropDown() {
  document
    .getElementById("headlessui-listbox-options")
    .classList.toggle("hidden");
}
