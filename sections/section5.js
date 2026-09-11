(function () {
  var content = SECTION5_CONTENT;
  var root = document.getElementById("section5");
  if (!root) return;

  var style = document.createElement("style");
  style.textContent =
    "#section5{" +
      "background:var(--navy-50);" +
    "}" +
    ".section5{" +
      "font-family:var(--font-base);" +
      "background:linear-gradient(135deg,var(--navy-400) 0%,var(--navy-800) 100%);" +
      "padding:var(--section-padding-y) var(--section-padding-x);" +
      "text-align:center;" +
    "}" +
    ".section5__inner{" +
      "max-width:var(--layout-max-width);" +
      "margin:0 auto;" +
    "}" +
    ".section5__heading{" +
      "margin:0;" +
      "color:var(--white);" +
      "font-size:22px;" +
      "font-weight:700;" +
      "line-height:1.5;" +
    "}" +
    ".section5__heading-break{" +
      "display:block;" +
    "}" +
    "@media (min-width:768px){" +
      ".section5__heading-break{display:inline;}" +
    "}" +
    ".section5__cta{" +
      "position:relative;" +
      "display:inline-flex;" +
      "align-items:center;" +
      "justify-content:center;" +
      "margin-top:40px;" +
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
    ".section5__cta:hover," +
    ".section5__cta:focus-visible{" +
      "background:var(--gray-100);" +
    "}" +
    ".section5__cta-arrow{" +
      "position:absolute;" +
      "top:50%;" +
      "right:15px;" +
      "display:block;" +
      "width:20px;" +
      "height:20px;" +
      "animation:section5-cta-arrow 2.5s ease-in-out infinite;" +
    "}" +
    "@keyframes section5-cta-arrow{" +
      "0%,100%{transform:translateY(-50%) translateX(0);}" +
      "50%{transform:translateY(-50%) translateX(10px);}" +
    "}" +
    "@media (min-width:1080px){" +
      ".section5__heading{font-size:28px;}" +
    "}";
  document.head.appendChild(style);

  var section = document.createElement("section");
  section.className = "section5";

  var inner = document.createElement("div");
  inner.className = "section5__inner";

  var heading = document.createElement("h2");
  heading.className = "section5__heading";
  var breakAt5 = content.main_copy.indexOf("、");
  if (breakAt5 !== -1) {
    var line1 = document.createElement("span");
    line1.textContent = content.main_copy.slice(0, breakAt5 + 1);
    var line2 = document.createElement("span");
    line2.className = "section5__heading-break";
    line2.textContent = content.main_copy.slice(breakAt5 + 1);
    heading.appendChild(line1);
    heading.appendChild(line2);
  } else {
    heading.textContent = content.main_copy;
  }

  var cta = document.createElement("button");
  cta.type = "button";
  cta.className = "section5__cta";

  var ctaLabel = document.createElement("span");
  ctaLabel.textContent = content.cta;
  cta.appendChild(ctaLabel);

  var ctaArrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  ctaArrow.setAttribute("class", "section5__cta-arrow");
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

  inner.appendChild(heading);
  inner.appendChild(cta);
  section.appendChild(inner);
  root.appendChild(section);
})();
