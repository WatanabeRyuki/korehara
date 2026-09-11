(function () {
  var content = SECTION3_CONTENT;
  var root = document.getElementById("section3");
  if (!root) return;

  var highlight = "52.3％には認識、自覚がない";

  var style = document.createElement("style");
  style.textContent =
    ".section3{" +
      "font-family:var(--font-base);" +
      "background:var(--white);" +
      "padding:var(--section-padding-y) var(--section-padding-x);" +
    "}" +
    ".section3__inner{" +
      "max-width:var(--layout-max-width);" +
      "margin:0 auto;" +
    "}" +
    ".section3__heading{" +
      "margin:0 0 32px;" +
      "color:var(--navy-900);" +
      "font-size:22px;" +
      "font-weight:700;" +
      "line-height:1.5;" +
      "text-align:center;" +
    "}" +
    ".section3__heading::after{" +
      "content:\"\";" +
      "display:block;" +
      "width:50px;" +
      "height:4px;" +
      "margin:32px auto 0;" +
      "background:var(--navy-400);" +
    "}" +
    ".section3__body{" +
      "display:flex;" +
      "flex-direction:column;" +
      "gap:32px;" +
    "}" +
    ".section3__figure{" +
      "margin:0;" +
    "}" +
    ".section3__graph-title{" +
      "margin:0 auto 16px;" +
      "color:var(--navy-900);" +
      "font-size:18px;" +
      "font-weight:700;" +
      "line-height:1.6;" +
      "max-width:380px;" +
      "text-align:center;" +
    "}" +
    ".section3__image{" +
      "display:block;" +
      "width:100%;" +
      "max-width:380px;" +
      "margin:0 auto;" +
    "}" +
    ".section3__source{" +
      "margin:16px 0 0;" +
      "color:var(--gray-500);" +
      "font-size:12px;" +
      "font-weight:400;" +
      "line-height:1.6;" +
      "text-align:left;" +
    "}" +
    ".section3__copy{" +
      "margin:0;" +
    "}" +
    ".section3__description{" +
      "margin:0;" +
      "color:var(--gray-700);" +
      "font-size:16px;" +
      "font-weight:400;" +
      "line-height:1.8;" +
    "}" +
    ".section3__highlight{" +
      "font-weight:700;" +
    "}" +
    ".section3__sub{" +
      "margin:24px 0 0;" +
      "color:var(--navy-900);" +
      "font-size:24px;" +
      "font-weight:700;" +
      "line-height:1.5;" +
    "}" +
    ".section3__sub-mark{" +
      "background-image:linear-gradient(var(--green-300),var(--green-300));" +
      "background-repeat:no-repeat;" +
      "background-position:left 100%;" +
      "background-size:0% 0.3em;" +
      "transition:background-size 2000ms ease-out;" +
    "}" +
    ".section3--marked .section3__sub-mark{" +
      "background-size:100% 0.3em;" +
    "}" +
    "@media (min-width:768px){" +
      ".section3__body{" +
        "flex-direction:row;" +
        "align-items:center;" +
        "gap:48px;" +
      "}" +
      ".section3__figure,.section3__copy{flex:1;}" +
      ".section3__graph-title{text-align:left;margin-left:auto;margin-right:0;}" +
      ".section3__source{text-align:left;}" +
      ".section3__image{margin:0 0 0 auto;}" +
    "}" +
    "@media (min-width:1080px){" +
      ".section3__heading{font-size:28px;}" +
    "}";
  document.head.appendChild(style);

  var section = document.createElement("section");
  section.className = "section3";

  var inner = document.createElement("div");
  inner.className = "section3__inner";

  var heading = document.createElement("h2");
  heading.className = "section3__heading";
  heading.textContent = content.main_copy;

  var body = document.createElement("div");
  body.className = "section3__body";

  var figure = document.createElement("figure");
  figure.className = "section3__figure";

  var graphTitle = document.createElement("figcaption");
  graphTitle.className = "section3__graph-title";
  graphTitle.textContent = content.graph_title;

  var img = document.createElement("img");
  img.className = "section3__image";
  img.src = "public/images/" + content.graph_image;
  img.alt = content.graph_title;

  var source = document.createElement("p");
  source.className = "section3__source";
  source.textContent = content.source;

  figure.appendChild(graphTitle);
  figure.appendChild(img);
  figure.appendChild(source);

  var copy = document.createElement("div");
  copy.className = "section3__copy";

  var description = document.createElement("p");
  description.className = "section3__description";
  var highlightAt = content.description.indexOf(highlight);
  if (highlightAt !== -1) {
    description.appendChild(
      document.createTextNode(content.description.slice(0, highlightAt))
    );
    var mark = document.createElement("strong");
    mark.className = "section3__highlight";
    mark.textContent = highlight;
    description.appendChild(mark);
    description.appendChild(
      document.createTextNode(
        content.description.slice(highlightAt + highlight.length)
      )
    );
  } else {
    description.textContent = content.description;
  }

  var sub = document.createElement("p");
  sub.className = "section3__sub";
  var subMark = document.createElement("span");
  subMark.className = "section3__sub-mark";
  subMark.textContent = content.sub_copy;
  sub.appendChild(subMark);

  copy.appendChild(description);
  copy.appendChild(sub);

  body.appendChild(copy);
  body.appendChild(figure);
  inner.appendChild(heading);
  inner.appendChild(body);
  section.appendChild(inner);
  root.appendChild(section);

  if (window.IntersectionObserver) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            section.classList.add("section3--marked");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(section);
  } else {
    section.classList.add("section3--marked");
  }
})();
