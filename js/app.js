!(function () {
  "use strict";
  function e(e) {
    this.type = e;
  }
  (e.prototype.init = function () {
    const e = this;
    (this.оbjects = []),
      (this.daClassname = "_dynamic_adapt_"),
      (this.nodes = document.querySelectorAll("[data-da]"));
    for (let e = 0; e < this.nodes.length; e++) {
      const t = this.nodes[e],
        n = t.dataset.da.trim().split(","),
        o = {};
      (o.element = t),
        (o.parent = t.parentNode),
        (o.destination = document.querySelector(n[0].trim())),
        (o.breakpoint = n[1] ? n[1].trim() : "767"),
        (o.place = n[2] ? n[2].trim() : "last"),
        (o.index = this.indexInParent(o.parent, o.element)),
        this.оbjects.push(o);
    }
    this.arraySort(this.оbjects),
      (this.mediaQueries = Array.prototype.map.call(
        this.оbjects,
        function (e) {
          return (
            "(" + this.type + "-width: " + e.breakpoint + "px)," + e.breakpoint
          );
        },
        this
      )),
      (this.mediaQueries = Array.prototype.filter.call(
        this.mediaQueries,
        function (e, t, n) {
          return Array.prototype.indexOf.call(n, e) === t;
        }
      ));
    for (let t = 0; t < this.mediaQueries.length; t++) {
      const n = this.mediaQueries[t],
        o = String.prototype.split.call(n, ","),
        a = window.matchMedia(o[0]),
        i = o[1],
        r = Array.prototype.filter.call(this.оbjects, function (e) {
          return e.breakpoint === i;
        });
      a.addListener(function () {
        e.mediaHandler(a, r);
      }),
        this.mediaHandler(a, r);
    }
  }),
    (e.prototype.mediaHandler = function (e, t) {
      if (e.matches)
        for (let e = 0; e < t.length; e++) {
          const n = t[e];
          (n.index = this.indexInParent(n.parent, n.element)),
            this.moveTo(n.place, n.element, n.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const n = t[e];
          n.element.classList.contains(this.daClassname) &&
            this.moveBack(n.parent, n.element, n.index);
        }
    }),
    (e.prototype.moveTo = function (e, t, n) {
      t.classList.add(this.daClassname),
        "last" === e || e >= n.children.length
          ? n.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? n.children[e].insertAdjacentElement("beforebegin", t)
          : n.insertAdjacentElement("afterbegin", t);
    }),
    (e.prototype.moveBack = function (e, t, n) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[n]
          ? e.children[n].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (e.prototype.indexInParent = function (e, t) {
      const n = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(n, t);
    }),
    (e.prototype.arraySort = function (e) {
      "min" === this.type
        ? Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? -1
                : "last" === e.place || "first" === t.place
                ? 1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          })
        : Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? 1
                : "last" === e.place || "first" === t.place
                ? -1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          });
    });
  new e("max").init();
  let t = !0,
    n = (e = 500) => {
      let n = document.querySelector("body");
      if (t) {
        let o = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < o.length; e++) {
            o[e].style.paddingRight = "0px";
          }
          (n.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    };
  function o(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  let a = (e, t = !1, a = 500, i = 0) => {
    const r = document.querySelector(e);
    if (r) {
      let l = "",
        s = 0;
      t &&
        ((l = "header.header"), (s = document.querySelector(l).offsetHeight));
      let c = {
        speedAsDuration: !0,
        speed: a,
        header: l,
        offset: i,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (n(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(r, "", c);
      else {
        let e = r.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: s ? e - s : e, behavior: "smooth" });
      }
      o(`[gotoBlock]: Юхуу...едем к ${e}`);
    } else o(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
  };
  let i = !1;
  setTimeout(() => {
    if (i) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const n = t.closest("[data-goto]"),
              o = n.dataset.goto ? n.dataset.goto : "",
              i = !!n.hasAttribute("data-goto-header"),
              r = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
            a(o, i, r), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            n = t.target;
          if ("navigator" === n.dataset.watch) {
            const e = n.id,
              o =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${e}"]`));
            t.isIntersecting
              ? o && o.classList.add("_navigator-active")
              : o && o.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e);
    })();
})();
