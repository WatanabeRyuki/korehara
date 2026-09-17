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
      "margin-top:40px;" +
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
      ".section3__source{text-align:left;margin-top:56px;}" +
      ".section3__image{margin:0 0 0 auto;}" +
    "}" +
    "@media (min-width:1080px){" +
      ".section3__heading{font-size:28px;}" +
      ".section3__source{margin-top:152px;}" +
    "}" +
    ".section3__ba{" +
      "max-width:680px;" +
      "margin:56px auto 0;" +
    "}" +
    ".section3__ba-row{" +
      "display:flex;" +
      "align-items:center;" +
      "gap:16px;" +
    "}" +
    ".section3__ba-row--before{" +
      "margin-top:160px;" +
    "}" +
    ".section3__ba-row--after{" +
      "margin:32px 0 0;" +
      "flex-direction:column;" +
      "align-items:stretch;" +
    "}" +
    ".section3__ba-after-content{" +
      "display:flex;" +
      "flex-direction:column;" +
      "gap:12px;" +
      "min-width:0;" +
    "}" +
    ".section3__ba-card{" +
      "position:relative;" +
      "display:flex;" +
      "align-items:center;" +
      "gap:48px;" +
      "width:100%;" +
      "max-width:600px;" +
      "padding:24px 20px 20px;" +
      "background:var(--gray-100);" +
      "border-radius:var(--radius-md);" +
    "}" +
    ".section3__ba-arrow{" +
      "flex:0 0 auto;" +
      "display:flex;" +
      "align-items:center;" +
      "justify-content:center;" +
      "color:var(--gray-300);" +
      "margin:0 0 8px;" +
      "transform:rotate(90deg);" +
    "}" +
    ".section3__ba-arrow svg{" +
      "display:block;" +
      "width:32px;" +
      "height:32px;" +
    "}" +
    ".section3__ba-label{" +
      "position:absolute;" +
      "top:0;" +
      "left:0;" +
      "transform:translateY(-100%);" +
      "display:inline-flex;" +
      "align-items:center;" +
      "height:48px;" +
      "padding:0 48px;" +
      "border-radius:var(--radius-md) var(--radius-md) 0 0;" +
      "color:var(--white);" +
      "font-size:18px;" +
      "font-weight:700;" +
    "}" +
    ".section3__ba-label--before{" +
      "background:var(--gray-500);" +
    "}" +
    ".section3__ba-label--after{" +
      "background:linear-gradient(90deg,#4A6D99,#83BFCB);" +
    "}" +
    ".section3__ba-avatar{" +
      "flex:0 0 auto;" +
      "width:72px;" +
      "height:72px;" +
      "border-radius:50%;" +
      "overflow:hidden;" +
    "}" +
    ".section3__ba-avatar img{" +
      "display:block;" +
      "width:100%;" +
      "height:100%;" +
      "object-fit:cover;" +
    "}" +
    ".section3__ba-text{" +
      "position:relative;" +
      "margin:0;" +
      "color:var(--navy-900);" +
      "font-size:15px;" +
      "font-weight:700;" +
      "line-height:1.7;" +
    "}" +
    ".section3__ba-text::before,.section3__ba-text::after{" +
      "display:none;" +
      "position:absolute;" +
      "font-family:Georgia,\"Times New Roman\",serif;" +
      "font-size:48px;" +
      "font-weight:700;" +
      "line-height:1;" +
      "color:var(--gray-300);" +
      "pointer-events:none;" +
      "user-select:none;" +
    "}" +
    ".section3__ba-text::before{" +
      "content:\"\\201C\";" +
      "left:-28px;" +
      "top:-16px;" +
    "}" +
    ".section3__ba-text::after{" +
      "content:\"\\201D\";" +
      "right:-28px;" +
      "bottom:-24px;" +
    "}" +
    ".section3__ba-note{" +
      "margin:0;" +
      "color:var(--gray-500);" +
      "font-size:12px;" +
      "font-weight:400;" +
      "line-height:1.6;" +
    "}" +
    "@media (min-width:768px){" +
      ".section3__ba-card{padding:28px 48px 24px;}" +
      ".section3__ba-avatar{width:88px;height:88px;}" +
      ".section3__ba-text{font-size:16px;}" +
      ".section3__ba-text::before,.section3__ba-text::after{display:block;}" +
      ".section3__ba-row--after{" +
        "margin:80px 0 0;" +
        "margin-left:auto;margin-right:0;" +
        "flex-direction:row;" +
        "align-items:flex-start;" +
      "}" +
      ".section3__ba-arrow{margin:24px 0 0;transform:none;}" +
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
  copy.appendChild(source);

  body.appendChild(copy);
  body.appendChild(figure);
  function buildBaCard(data, variant) {
    var card = document.createElement("div");
    card.className = "section3__ba-card";

    var label = document.createElement("span");
    label.className = "section3__ba-label section3__ba-label--" + variant;
    label.textContent = data.label;

    var avatar = document.createElement("div");
    avatar.className = "section3__ba-avatar";
    var avatarImg = document.createElement("img");
    avatarImg.src = "public/images/" + data.image;
    avatarImg.alt = data.label;
    avatar.appendChild(avatarImg);

    var text = document.createElement("p");
    text.className = "section3__ba-text";
    text.textContent = data.text;

    card.appendChild(label);
    card.appendChild(avatar);
    card.appendChild(text);
    return card;
  }

  var ba = content.before_after;
  var baWrap = document.createElement("div");
  baWrap.className = "section3__ba";

  var beforeRow = document.createElement("div");
  beforeRow.className = "section3__ba-row section3__ba-row--before";
  beforeRow.appendChild(buildBaCard(ba.before, "before"));
  baWrap.appendChild(beforeRow);

  var arrow = document.createElement("div");
  arrow.className = "section3__ba-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M6 5 L13 12 L6 19" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M11 5 L18 12 L11 19" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
    "</svg>";

  var afterContent = document.createElement("div");
  afterContent.className = "section3__ba-after-content";
  afterContent.appendChild(buildBaCard(ba.after, "after"));

  var baNote = document.createElement("p");
  baNote.className = "section3__ba-note";
  baNote.textContent = ba.note;
  afterContent.appendChild(baNote);

  var afterRow = document.createElement("div");
  afterRow.className = "section3__ba-row section3__ba-row--after";
  afterRow.appendChild(arrow);
  afterRow.appendChild(afterContent);
  baWrap.appendChild(afterRow);

  inner.appendChild(heading);
  inner.appendChild(body);
  inner.appendChild(baWrap);
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
