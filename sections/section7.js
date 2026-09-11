(function () {
  var content = SECTION7_CONTENT;
  var root = document.getElementById("section7");
  if (!root) return;

  var style = document.createElement("style");
  style.textContent =
    ".section7{" +
      "font-family:var(--font-base);" +
      "background:var(--white);" +
      "padding:var(--section-padding-y) var(--section-padding-x);" +
    "}" +
    ".section7__inner{" +
      "max-width:var(--layout-max-width);" +
      "margin:0 auto;" +
    "}" +
    ".section7__heading{" +
      "margin:0 0 32px;" +
      "color:var(--navy-900);" +
      "font-size:22px;" +
      "font-weight:700;" +
      "line-height:1.5;" +
      "text-align:center;" +
    "}" +
    ".section7__heading::after{" +
      "content:\"\";" +
      "display:block;" +
      "width:50px;" +
      "height:4px;" +
      "margin:32px auto 0;" +
      "background:var(--navy-400);" +
    "}" +
    ".section7__list{" +
      "margin:0 auto;" +
      "max-width:720px;" +
      "border-top:2px solid var(--gray-300);" +
    "}" +
    ".section7__item{" +
      "border-bottom:2px solid var(--gray-300);" +
      "background:transparent;" +
    "}" +
    ".section7__question{" +
      "display:flex;" +
      "align-items:center;" +
      "justify-content:space-between;" +
      "gap:16px;" +
      "padding:16px 0;" +
      "cursor:pointer;" +
      "list-style:none;" +
      "color:var(--navy-900);" +
      "font-size:16px;" +
      "font-weight:700;" +
      "line-height:1.5;" +
    "}" +
    ".section7__question::-webkit-details-marker{" +
      "display:none;" +
    "}" +
    ".section7__icon{" +
      "flex:0 0 auto;" +
      "width:20px;" +
      "height:20px;" +
      "color:var(--navy-600);" +
      "transition:transform 200ms ease-out;" +
    "}" +
    ".section7__item[open] .section7__icon{" +
      "transform:rotate(180deg);" +
    "}" +
    ".section7__answer{" +
      "margin:0;" +
      "padding:0 0 16px;" +
      "background:transparent;" +
      "color:var(--gray-700);" +
      "font-size:16px;" +
      "font-weight:400;" +
      "line-height:1.8;" +
    "}" +
    ".section7__item[open] .section7__answer{" +
      "animation:section7-answer-in 500ms ease-out;" +
    "}" +
    ".section7__item--preopened .section7__answer{" +
      "animation:none;" +
    "}" +
    "@keyframes section7-answer-in{" +
      "from{opacity:0;}" +
      "to{opacity:1;}" +
    "}" +
    "@media (min-width:1080px){" +
      ".section7__heading{font-size:28px;}" +
    "}";
  document.head.appendChild(style);

  var section = document.createElement("section");
  section.className = "section7";

  var inner = document.createElement("div");
  inner.className = "section7__inner";

  var heading = document.createElement("h2");
  heading.className = "section7__heading";
  heading.textContent = content.main_copy;

  var list = document.createElement("div");
  list.className = "section7__list";

  content.faqs.forEach(function (faq, index) {
    var item = document.createElement("details");
    item.className = "section7__item";
    if (index === 0) {
      item.open = true;
      item.classList.add("section7__item--preopened");
      item.addEventListener("toggle", function onFirstToggle() {
        item.classList.remove("section7__item--preopened");
        item.removeEventListener("toggle", onFirstToggle);
      });
    }

    var question = document.createElement("summary");
    question.className = "section7__question";

    var questionText = document.createElement("span");
    questionText.textContent = faq.question;

    var icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("class", "section7__icon");
    icon.setAttribute("viewBox", "0 0 20 20");
    icon.setAttribute("aria-hidden", "true");
    icon.setAttribute("focusable", "false");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M5 7 L10 13 L15 7");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "1.75");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    icon.appendChild(path);

    question.appendChild(questionText);
    question.appendChild(icon);

    var answer = document.createElement("p");
    answer.className = "section7__answer";
    answer.textContent = faq.answer;

    item.appendChild(question);
    item.appendChild(answer);
    list.appendChild(item);
  });

  inner.appendChild(heading);
  inner.appendChild(list);
  section.appendChild(inner);
  root.appendChild(section);
})();
