(function () {
  var content = SECTION4_CONTENT;
  var root = document.getElementById("section4");
  if (!root) return;

  var style = document.createElement("style");
  style.textContent =
    ".section4{" +
      "font-family:var(--font-base);" +
      "background:var(--navy-50);" +
      "padding:var(--section-padding-y) var(--section-padding-x);" +
    "}" +
    ".section4__inner{" +
      "max-width:var(--layout-max-width);" +
      "margin:0 auto;" +
    "}" +
    ".section4__heading{" +
      "margin:0 0 32px;" +
      "color:var(--navy-900);" +
      "font-size:22px;" +
      "font-weight:700;" +
      "line-height:1.5;" +
      "text-align:center;" +
    "}" +
    ".section4__heading::after{" +
      "content:\"\";" +
      "display:block;" +
      "width:50px;" +
      "height:4px;" +
      "margin:32px auto 0;" +
      "background:var(--navy-400);" +
    "}" +
    ".section4__cards{" +
      "display:flex;" +
      "flex-direction:column;" +
      "gap:24px;" +
    "}" +
    ".section4__card{" +
      "position:relative;" +
      "background:var(--white);" +
      "border:1px solid var(--gray-300);" +
      "border-radius:var(--radius-md);" +
      "box-shadow:var(--shadow-card);" +
      "overflow:hidden;" +
      "padding-top:40px;" +
      "opacity:0;" +
      "transform:translateY(24px);" +
      "transition:opacity 500ms ease-in,transform 500ms ease-in;" +
    "}" +
    ".section4__card:nth-child(1){transition-delay:0ms;}" +
    ".section4__card:nth-child(2){transition-delay:300ms;}" +
    ".section4__card:nth-child(3){transition-delay:600ms;}" +
    ".section4--inview .section4__card{" +
      "opacity:1;" +
      "transform:translateY(0);" +
    "}" +
    ".section4__card-index{" +
      "position:absolute;" +
      "top:0px;" +
      "left:0;" +
      "z-index:1;" +
      "display:flex;" +
      "align-items:center;" +
      "justify-content:center;" +
      "width:40px;" +
      "height:40px;" +
      "border-radius:0;" +
      "border-bottom-right-radius:var(--radius-md);" +
      "background:var(--green-500);" +
      "color:var(--white);" +
      "font-size:14px;" +
      "font-weight:700;" +
      "line-height:1;" +
    "}" +
    ".section4__card-image{" +
      "display:block;" +
      "width:100%;" +
      "height:200px;" +
      "object-fit:cover;" +
      "object-position:center top;" +
    "}" +
    ".section4__card-body{" +
      "padding:24px;" +
    "}" +
    ".section4__card-title{" +
      "margin:0 0 8px;" +
      "color:var(--navy-900);" +
      "font-size:18px;" +
      "font-weight:700;" +
      "line-height:1.5;" +
    "}" +
    ".section4__card-description{" +
      "margin:0;" +
      "color:var(--gray-700);" +
      "font-size:16px;" +
      "font-weight:400;" +
      "line-height:1.8;" +
    "}" +
    ".section4__source{" +
      "margin:32px 0 0;" +
      "color:var(--gray-500);" +
      "font-size:12px;" +
      "font-weight:400;" +
      "line-height:1.6;" +
    "}" +
    "@media (min-width:768px){" +
      ".section4__cards{" +
        "flex-direction:row;" +
        "flex-wrap:wrap;" +
      "}" +
      ".section4__card{flex:1 1 calc(50% - 12px);}" +
    "}" +
    "@media (min-width:1080px){" +
      ".section4__heading{font-size:28px;}" +
      ".section4__card{flex:1 1 calc(33.333% - 16px);}" +
      ".section4__card-body{padding:32px;}" +
    "}";
  document.head.appendChild(style);

  var section = document.createElement("section");
  section.className = "section4";

  var inner = document.createElement("div");
  inner.className = "section4__inner";

  var heading = document.createElement("h2");
  heading.className = "section4__heading";
  heading.textContent = content.main_copy;

  var cards = document.createElement("div");
  cards.className = "section4__cards";

  content.features.forEach(function (feature, index) {
    var card = document.createElement("article");
    card.className = "section4__card";

    var badge = document.createElement("span");
    badge.className = "section4__card-index";
    badge.textContent = ("0" + (index + 1)).slice(-2);
    badge.setAttribute("aria-hidden", "true");

    var img = document.createElement("img");
    img.className = "section4__card-image";
    img.src = "public/images/" + feature.image;
    img.alt = feature.title;

    var body = document.createElement("div");
    body.className = "section4__card-body";

    var title = document.createElement("h3");
    title.className = "section4__card-title";
    title.textContent = feature.title;

    var description = document.createElement("p");
    description.className = "section4__card-description";
    description.textContent = feature.description;

    body.appendChild(title);
    body.appendChild(description);
    card.appendChild(badge);
    card.appendChild(img);
    card.appendChild(body);
    cards.appendChild(card);
  });

  var source = document.createElement("p");
  source.className = "section4__source";
  source.textContent = content.source;

  inner.appendChild(heading);
  inner.appendChild(cards);
  inner.appendChild(source);
  section.appendChild(inner);
  root.appendChild(section);

  if (window.IntersectionObserver) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            section.classList.add("section4--inview");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
  } else {
    section.classList.add("section4--inview");
  }
})();
