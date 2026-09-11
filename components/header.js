(function () {
  var root = document.getElementById("site-header");
  if (!root) return;

  var style = document.createElement("style");
  style.textContent =
    "html{scroll-behavior:smooth;}" +
    "#site-header{" +
      "min-height:var(--header-height);" +
    "}" +
    ".site-header{" +
      "position:fixed;" +
      "top:0;" +
      "left:0;" +
      "right:0;" +
      "z-index:100;" +
      "font-family:var(--font-base);" +
      "background:var(--white);" +
      "box-shadow:var(--shadow-card);" +
    "}" +
    ".site-header__inner{" +
      "display:flex;" +
      "align-items:center;" +
      "justify-content:flex-end;" +
      "gap:16px;" +
      "max-width:var(--layout-max-width);" +
      "margin:0 auto;" +
      "padding:8px var(--section-padding-x);" +
      "min-height:var(--header-height);" +
    "}" +
    ".site-header__logo{" +
      "display:flex;" +
      "align-items:center;" +
      "margin-right:auto;" +
    "}" +
    ".site-header__logo img{" +
      "display:block;" +
      "height:32px;" +
      "width:auto;" +
    "}" +
    ".site-header__nav{" +
      "display:flex;" +
      "align-items:center;" +
      "flex-wrap:wrap;" +
      "gap:12px 20px;" +
    "}" +
    ".site-header__link{" +
      "color:var(--navy-700);" +
      "font-size:14px;" +
      "font-weight:700;" +
      "line-height:1.5;" +
      "text-decoration:none;" +
    "}" +
    ".site-header__link:hover," +
    ".site-header__link:focus-visible{" +
      "color:var(--navy-500);" +
    "}" +
    ".site-header__cta{" +
      "position:relative;" +
      "display:inline-flex;" +
      "align-items:center;" +
      "justify-content:center;" +
      "flex:0 0 auto;" +
      "min-height:44px;" +
      "padding:0 36px 0 16px;" +
      "border:2px solid var(--green-600);" +
      "border-radius:var(--radius-sm);" +
      "background:var(--white);" +
      "color:var(--green-600);" +
      "font-family:inherit;" +
      "font-size:14px;" +
      "font-weight:700;" +
      "line-height:1.5;" +
      "text-decoration:none;" +
      "transition:background 120ms ease-out;" +
    "}" +
    ".site-header__cta:hover," +
    ".site-header__cta:focus-visible{" +
      "background:var(--gray-100);" +
    "}" +
    ".site-header__cta-arrow{" +
      "position:absolute;" +
      "top:50%;" +
      "right:10px;" +
      "display:block;" +
      "width:16px;" +
      "height:16px;" +
      "transform:translateY(-50%);" +
    "}" +
    "@media (min-width:768px){" +
      ".site-header__inner{padding:8px var(--section-padding-x);gap:24px;}" +
      ".site-header__nav{gap:32px;}" +
      ".site-header__link{font-size:16px;}" +
    "}";
  document.head.appendChild(style);

  var header = document.createElement("header");
  header.className = "site-header";

  var inner = document.createElement("div");
  inner.className = "site-header__inner";

  var logo = document.createElement("a");
  logo.className = "site-header__logo";
  logo.href = "#section1";

  var logoImg = document.createElement("img");
  logoImg.src = "public/images/header-logo.svg";
  logoImg.alt = "これハラ？";
  logo.appendChild(logoImg);

  var nav = document.createElement("nav");
  nav.className = "site-header__nav";

  var items = [
    { label: "機能", href: "#section4" },
    { label: "料金", href: "#section6" },
    { label: "よくあるご質問", href: "#section7" },
  ];

  items.forEach(function (item) {
    var link = document.createElement("a");
    link.className = "site-header__link";
    link.href = item.href;
    link.textContent = item.label;
    nav.appendChild(link);
  });

  var cta = document.createElement("a");
  cta.className = "site-header__cta";
  cta.href = "#section5";

  var ctaLabel = document.createElement("span");
  ctaLabel.textContent = "無料で始める";
  cta.appendChild(ctaLabel);

  var ctaArrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  ctaArrow.setAttribute("class", "site-header__cta-arrow");
  ctaArrow.setAttribute("viewBox", "0 0 20 20");
  ctaArrow.setAttribute("aria-hidden", "true");
  ctaArrow.setAttribute("focusable", "false");
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M7 4 L13 10 L7 16");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "currentColor");
  path.setAttribute("stroke-width", "3");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  ctaArrow.appendChild(path);
  cta.appendChild(ctaArrow);

  inner.appendChild(logo);
  inner.appendChild(nav);
  inner.appendChild(cta);
  header.appendChild(inner);
  root.appendChild(header);
})();
