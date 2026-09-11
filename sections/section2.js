(function () {
  var content = SECTION2_CONTENT;
  var root = document.getElementById("section2");
  if (!root) return;

  var style = document.createElement("style");
  style.textContent =
    ".section2{" +
      "font-family:var(--font-base);" +
      "background:var(--gray-100);" +
      "padding:var(--section-padding-y) var(--section-padding-x);" +
    "}" +
    ".section2__inner{" +
      "max-width:var(--layout-max-width);" +
      "margin:0 auto;" +
    "}" +
    ".section2__heading{" +
      "margin:0 0 40px;" +
      "color:var(--navy-900);" +
      "font-size:22px;" +
      "font-weight:700;" +
      "line-height:1.5;" +
      "text-align:center;" +
    "}" +
    ".section2__heading::after{" +
      "content:\"\";" +
      "display:block;" +
      "width:50px;" +
      "height:4px;" +
      "margin:32px auto 0;" +
      "background:var(--navy-400);" +
    "}" +
    ".section2__list{" +
      "margin:0;" +
      "padding:0;" +
      "list-style:none;" +
    "}" +
    ".section2__item{" +
      "display:flex;" +
      "align-items:center;" +
      "gap:12px;" +
      "padding:16px 24px;" +
      "background:var(--white);" +
      "border-radius:var(--radius-sm);" +
    "}" +
    ".section2__item + .section2__item{" +
      "margin-top:16px;" +
    "}" +
    ".section2__icon{" +
      "flex:0 0 auto;" +
      "display:flex;" +
      "align-items:center;" +
      "justify-content:center;" +
      "width:32px;" +
      "height:32px;" +
      "border-radius:50%;" +
      "background:var(--green-100);" +
      "color:var(--green-600);" +
    "}" +
    ".section2__icon svg{" +
      "display:block;" +
      "width:16px;" +
      "height:16px;" +
    "}" +
    ".section2__text{" +
      "color:var(--gray-700);" +
      "font-size:16px;" +
      "font-weight:400;" +
      "line-height:1.8;" +
    "}" +
    "@media (min-width:768px){" +
      ".section2__list{max-width:640px;margin:0 auto;}" +
    "}" +
    "@media (min-width:1080px){" +
      ".section2__heading{font-size:28px;}" +
    "}";
  document.head.appendChild(style);

  var section = document.createElement("section");
  section.className = "section2";

  var inner = document.createElement("div");
  inner.className = "section2__inner";

  var heading = document.createElement("h2");
  heading.className = "section2__heading";
  heading.textContent = content.main_copy;

  var list = document.createElement("ul");
  list.className = "section2__list";

  content.checklist.forEach(function (itemText) {
    var item = document.createElement("li");
    item.className = "section2__item";

    var icon = document.createElement("span");
    icon.className = "section2__icon";
    icon.setAttribute("aria-hidden", "true");

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("focusable", "false");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M3.5 8.5 L6.5 11.5 L12.5 4.5");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "3");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path);
    icon.appendChild(svg);

    var text = document.createElement("span");
    text.className = "section2__text";
    text.textContent = itemText;

    item.appendChild(icon);
    item.appendChild(text);
    list.appendChild(item);
  });

  inner.appendChild(heading);
  inner.appendChild(list);
  section.appendChild(inner);
  root.appendChild(section);
})();
