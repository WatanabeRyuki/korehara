(function () {
  var root = document.getElementById("site-footer");
  if (!root) return;

  var style = document.createElement("style");
  style.textContent =
    ".site-footer{" +
      "font-family:var(--font-base);" +
      "background:var(--navy-900);" +
      "padding:24px var(--section-padding-x);" +
    "}" +
    ".site-footer__inner{" +
      "max-width:var(--layout-max-width);" +
      "margin:0 auto;" +
      "text-align:center;" +
    "}" +
    ".site-footer__copy{" +
      "margin:0;" +
      "color:var(--navy-300);" +
      "font-size:12px;" +
      "font-weight:400;" +
      "line-height:1.6;" +
    "}" +
    "@media (min-width:768px){" +
      ".site-footer{padding:32px var(--section-padding-x);}" +
      ".site-footer__copy{font-size:14px;}" +
    "}";
  document.head.appendChild(style);

  var footer = document.createElement("footer");
  footer.className = "site-footer";

  var inner = document.createElement("div");
  inner.className = "site-footer__inner";

  var copy = document.createElement("p");
  copy.className = "site-footer__copy";
  copy.textContent = "© 2026 Korehara Project. All Rights Reserved.";

  inner.appendChild(copy);
  footer.appendChild(inner);
  root.appendChild(footer);
})();
