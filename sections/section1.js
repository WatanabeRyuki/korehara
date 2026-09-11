(function () {
  var content = SECTION1_CONTENT;
  var root = document.getElementById("section1");
  if (!root) return;

  var style = document.createElement("style");
  style.textContent =
    ".section1{" +
      "position:relative;" +
      "font-family:var(--font-base);" +
      "background:linear-gradient(135deg,var(--navy-400) 0%,var(--navy-800) 100%);" +
      "padding:var(--section1-padding-top) var(--section-padding-x) var(--section-padding-y);" +
      "overflow:hidden;" +
    "}" +
    ".section1::before{" +
      "content:\"\";" +
      "position:absolute;" +
      "inset:0;" +
      "z-index:0;" +
      "pointer-events:none;" +
      "opacity:0.25;" +
      "mix-blend-mode:overlay;" +
      "background-image:url(\"data:image/svg+xml," +
        encodeURIComponent(
          "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>" +
            "<filter id='n'>" +
              "<feTurbulence type='fractalNoise' baseFrequency='0.55' numOctaves='4' stitchTiles='stitch'/>" +
            "</filter>" +
            "<rect width='100%' height='100%' filter='url(#n)'/>" +
          "</svg>"
        ) +
      "\");" +
      "background-size:160px 160px;" +
    "}" +
    ".section1__inner{" +
      "position:relative;" +
      "z-index:1;" +
      "max-width:var(--layout-max-width);" +
      "margin:0 auto;" +
      "display:flex;" +
      "flex-direction:column;" +
      "align-items:center;" +
      "gap:48px;" +
    "}" +
    ".section1__copy{" +
      "width:100%;" +
      "text-align:center;" +
    "}" +
    ".section1__heading{" +
      "margin:0;" +
      "color:var(--white);" +
      "font-size:32px;" +
      "font-weight:800;" +
      "line-height:1.4;" +
      "letter-spacing:0.06em;" +
    "}" +
    ".section1__sub{" +
      "margin:16px 0 0;" +
      "color:var(--navy-100);" +
      "font-size:16px;" +
      "font-weight:400;" +
      "line-height:1.8;" +
    "}" +
    ".section1__sub-break{" +
      "display:block;" +
    "}" +
    ".section1__cta{" +
      "position:relative;" +
      "display:inline-flex;" +
      "align-items:center;" +
      "justify-content:center;" +
      "margin-top:64px;" +
      "min-height:56px;" +
      "min-width:44px;" +
      "padding:0 64px;" +
      "border:3px solid var(--green-600);" +
      "border-radius:var(--radius-sm);" +
      "background:var(--white);" +
      "color:var(--green-600);" +
      "font-family:inherit;" +
      "font-size:18px;" +
      "font-weight:700;" +
      "line-height:1.5;" +
      "box-shadow:0 8px 24px rgba(15, 32, 56, 0.5);" +
      "cursor:pointer;" +
      "transition:background 120ms ease-out;" +
    "}" +
    ".section1__cta:hover," +
    ".section1__cta:focus-visible{" +
      "background:var(--gray-100);" +
    "}" +
    ".section1__cta-arrow{" +
      "position:absolute;" +
      "top:50%;" +
      "right:15px;" +
      "display:block;" +
      "width:20px;" +
      "height:20px;" +
      "animation:section1-cta-arrow 2.5s ease-in-out infinite;" +
    "}" +
    "@keyframes section1-cta-arrow{" +
      "0%,100%{transform:translateY(-50%) translateX(0);}" +
      "50%{transform:translateY(-50%) translateX(10px);}" +
    "}" +
    ".section1__visual{" +
      "position:relative;" +
      "display:flex;" +
      "align-items:center;" +
      "justify-content:center;" +
    "}" +
    ".section1__spotlight{" +
      "position:absolute;" +
      "z-index:0;" +
      "width:400px;" +
      "height:400px;" +
      "border-radius:50%;" +
      "background:radial-gradient(circle,var(--navy-300) 0%,transparent 70%);" +
      "opacity:0.9;" +
      "pointer-events:none;" +
    "}" +
    ".section1__device{" +
      "position:relative;" +
      "z-index:1;" +
      "width:220px;" +
      "padding:12px;" +
      "background:var(--navy-900);" +
      "border-radius:40px;" +
      "box-shadow:var(--shadow-card),0 0 0 1px rgba(255,255,255,0.55),inset 0 1px 0 rgba(255,255,255,0.45);" +
    "}" +
    ".section1__island{" +
      "position:absolute;" +
      "top:18px;" +
      "left:50%;" +
      "z-index:2;" +
      "width:72px;" +
      "height:22px;" +
      "transform:translateX(-50%);" +
      "background:var(--navy-900);" +
      "border-radius:12px;" +
    "}" +
    ".section1__device img{" +
      "display:block;" +
      "width:100%;" +
      "border-radius:28px;" +
    "}" +
    "@media (min-width:768px){" +
      ".section1{padding:var(--section1-padding-top) var(--section-padding-x) var(--section-padding-y);}" +
      ".section1__inner{" +
        "flex-direction:row;" +
        "align-items:center;" +
        "justify-content:space-between;" +
        "gap:48px;" +
      "}" +
      ".section1__copy{text-align:left;flex:1;}" +
      ".section1__sub-break{display:inline;}" +
      ".section1__device{width:260px;}" +
      ".section1__spotlight{width:600px;height:600px;}" +
    "}" +
    "@media (min-width:1080px){" +
      ".section1__heading{font-size:56px;}" +
      ".section1__sub{font-size:18px;}" +
    "}";
  document.head.appendChild(style);

  var section = document.createElement("section");
  section.className = "section1";

  var inner = document.createElement("div");
  inner.className = "section1__inner";

  var copy = document.createElement("div");
  copy.className = "section1__copy";

  var heading = document.createElement("h1");
  heading.className = "section1__heading";
  heading.textContent = content.main_copy;

  var sub = document.createElement("p");
  sub.className = "section1__sub";
  var breakAt = content.sub_copy.indexOf("、");
  if (breakAt !== -1) {
    var line1 = document.createElement("span");
    line1.textContent = content.sub_copy.slice(0, breakAt + 1);
    var line2 = document.createElement("span");
    line2.className = "section1__sub-break";
    line2.textContent = content.sub_copy.slice(breakAt + 1);
    sub.appendChild(line1);
    sub.appendChild(line2);
  } else {
    sub.textContent = content.sub_copy;
  }

  var cta = document.createElement("button");
  cta.type = "button";
  cta.className = "section1__cta";
  var ctaLabel = document.createElement("span");
  ctaLabel.textContent = content.cta;
  cta.appendChild(ctaLabel);
  var ctaArrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  ctaArrow.setAttribute("class", "section1__cta-arrow");
  ctaArrow.setAttribute("viewBox", "0 0 20 20");
  ctaArrow.setAttribute("aria-hidden", "true");
  ctaArrow.setAttribute("focusable", "false");
  var ctaArrowPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  ctaArrowPath.setAttribute("d", "M7 4 L13 10 L7 16");
  ctaArrowPath.setAttribute("fill", "none");
  ctaArrowPath.setAttribute("stroke", "currentColor");
  ctaArrowPath.setAttribute("stroke-width", "3");
  ctaArrowPath.setAttribute("stroke-linecap", "round");
  ctaArrowPath.setAttribute("stroke-linejoin", "round");
  ctaArrow.appendChild(ctaArrowPath);
  cta.appendChild(ctaArrow);

  copy.appendChild(heading);
  copy.appendChild(sub);
  copy.appendChild(cta);

  var visual = document.createElement("div");
  visual.className = "section1__visual";

  var spotlight = document.createElement("div");
  spotlight.className = "section1__spotlight";
  spotlight.setAttribute("aria-hidden", "true");

  var device = document.createElement("div");
  device.className = "section1__device";

  var island = document.createElement("div");
  island.className = "section1__island";
  island.setAttribute("aria-hidden", "true");

  var img = document.createElement("img");
  img.src = "public/images/" + content.image;
  img.alt = "";

  device.appendChild(island);
  device.appendChild(img);
  visual.appendChild(spotlight);
  visual.appendChild(device);

  inner.appendChild(copy);
  inner.appendChild(visual);
  section.appendChild(inner);
  root.appendChild(section);
})();
