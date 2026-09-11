(function () {
  var content = SECTION6_CONTENT;
  var root = document.getElementById("section6");
  if (!root) return;

  var style = document.createElement("style");
  style.textContent =
    ".section6{" +
      "font-family:var(--font-base);" +
      "background:var(--navy-50);" +
      "padding:var(--section-padding-y) var(--section-padding-x);" +
    "}" +
    ".section6__inner{" +
      "max-width:var(--layout-max-width);" +
      "margin:0 auto;" +
    "}" +
    ".section6__heading{" +
      "margin:0;" +
      "color:var(--navy-900);" +
      "font-size:22px;" +
      "font-weight:700;" +
      "line-height:1.5;" +
      "text-align:center;" +
    "}" +
    ".section6__heading::after{" +
      "content:\"\";" +
      "display:block;" +
      "width:50px;" +
      "height:4px;" +
      "margin:32px auto 0;" +
      "background:var(--navy-400);" +
    "}" +
    ".section6__sub{" +
      "margin:24px 0 0;" +
      "color:var(--gray-700);" +
      "font-size:16px;" +
      "font-weight:400;" +
      "line-height:1.8;" +
      "text-align:center;" +
    "}" +
    ".section6__plans{" +
      "display:flex;" +
      "justify-content:center;" +
      "margin-top:40px;" +
    "}" +
    ".section6__card{" +
      "width:100%;" +
      "max-width:480px;" +
      "padding:24px;" +
      "background:var(--white);" +
      "border-radius:var(--radius-md);" +
      "box-shadow:var(--shadow-card);" +
      "opacity:0;" +
      "transform:translateY(24px);" +
      "transition:opacity 500ms ease-in,transform 500ms ease-in;" +
    "}" +
    ".section6__card:nth-child(1){transition-delay:0ms;}" +
    ".section6--inview .section6__card{" +
      "opacity:1;" +
      "transform:translateY(0);" +
    "}" +
    ".section6__plan-name{" +
      "margin:0;" +
      "color:var(--navy-700);" +
      "font-size:16px;" +
      "font-weight:700;" +
      "line-height:1.5;" +
      "text-align:center;" +
    "}" +
    ".section6__plan-price{" +
      "margin:5px 0 0;" +
      "color:var(--navy-900);" +
      "font-size:28px;" +
      "font-weight:800;" +
      "line-height:1.4;" +
      "text-align:center;" +
    "}" +
    ".section6__features{" +
      "margin:24px 0 0;" +
      "padding:0;" +
      "list-style:none;" +
    "}" +
    ".section6__feature{" +
      "position:relative;" +
      "padding-left:1.25em;" +
      "color:var(--gray-500);" +
      "font-size:16px;" +
      "font-weight:400;" +
      "line-height:1.8;" +
    "}" +
    ".section6__feature::before{" +
      "content:\"\";" +
      "display:block;" +
      "position:absolute;" +
      "left:0;" +
      "top:0.9em;" +
      "width:6px;" +
      "height:6px;" +
      "min-width:6px;" +
      "min-height:6px;" +
      "flex-shrink:0;" +
      "box-sizing:border-box;" +
      "border-radius:50%;" +
      "background:currentColor;" +
      "transform:translateY(-50%);" +
    "}" +
    ".section6__feature + .section6__feature{" +
      "margin-top:12px;" +
    "}" +
    "@media (min-width:768px){" +
      ".section6__card{padding:32px;}" +
    "}" +
    "@media (min-width:1080px){" +
      ".section6__heading{font-size:28px;}" +
      ".section6__plan-price{font-size:36px;}" +
    "}";
  document.head.appendChild(style);

  var section = document.createElement("section");
  section.className = "section6";

  var inner = document.createElement("div");
  inner.className = "section6__inner";

  var heading = document.createElement("h2");
  heading.className = "section6__heading";
  heading.textContent = content.main_copy;

  var sub = document.createElement("p");
  sub.className = "section6__sub";
  sub.textContent = content.sub_copy;

  var plans = document.createElement("div");
  plans.className = "section6__plans";

  content.plans.forEach(function (plan) {
    var card = document.createElement("article");
    card.className = "section6__card";

    var name = document.createElement("h3");
    name.className = "section6__plan-name";
    name.textContent = plan.name;

    var price = document.createElement("p");
    price.className = "section6__plan-price";
    price.textContent = plan.price;

    var list = document.createElement("ul");
    list.className = "section6__features";

    plan.features.forEach(function (item) {
      var li = document.createElement("li");
      li.className = "section6__feature";
      li.textContent = item;
      list.appendChild(li);
    });

    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(list);
    plans.appendChild(card);
  });

  inner.appendChild(heading);
  inner.appendChild(sub);
  inner.appendChild(plans);
  section.appendChild(inner);
  root.appendChild(section);

  if (window.IntersectionObserver) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            section.classList.add("section6--inview");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
  } else {
    section.classList.add("section6--inview");
  }
})();
