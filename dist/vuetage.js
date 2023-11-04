import { openBlock as s, createElementBlock as n, createElementVNode as u, defineComponent as p, computed as c, normalizeClass as r, createVNode as m, createCommentVNode as d, createTextVNode as f, toDisplayString as v } from "vue";
const _ = (o, e) => {
  const a = o.__vccOpts || o;
  for (const [l, i] of e)
    a[l] = i;
  return a;
}, b = {}, h = { class: "spinner" }, g = /* @__PURE__ */ u("div", { class: "spinner-inner" }, null, -1), y = [
  g
];
function B(o, e) {
  return s(), n("div", h, y);
}
const k = /* @__PURE__ */ _(b, [["render", B]]), C = { style: { width: "max-content" } }, I = ["disabled", "title"], z = { key: 0 }, $ = {
  key: 1,
  class: "base-button-content"
}, w = /* @__PURE__ */ p({
  __name: "BaseButton",
  props: {
    action: { default: "Action" },
    disabled: { type: Boolean, default: !1 },
    tooltipMessage: { default: null },
    size: { default: "medium" },
    variant: { default: "outline-primary" },
    leftIcon: {},
    rightIcon: {},
    loading: { type: Boolean, default: !1 },
    customClass: {}
  },
  setup(o) {
    const e = o, a = c(() => `btn-${e.variant}`), l = c(() => e.tooltipMessage ?? e.disabled ? "This button is disabled." : ""), i = c(() => {
      switch (e.size) {
        case "small":
          return "btn-small";
        case "medium":
          return "btn-medium";
        case "large":
          return "btn-large";
        default:
          throw new Error('"size" props value passed is not valid.');
      }
    });
    return (t, N) => (s(), n("div", C, [
      u("button", {
        class: r(["base-button", [
          i.value,
          a.value,
          t.customClass
        ]]),
        disabled: e.disabled,
        title: l.value
      }, [
        t.loading ? (s(), n("span", z, [
          m(k)
        ])) : (s(), n("span", $, [
          t.leftIcon ? (s(), n("i", {
            key: 0,
            class: r(t.leftIcon)
          }, null, 2)) : d("", !0),
          f(" " + v(t.action) + " ", 1),
          t.rightIcon ? (s(), n("i", {
            key: 1,
            class: r(t.rightIcon)
          }, null, 2)) : d("", !0)
        ]))
      ], 10, I)
    ]));
  }
});
const E = /* @__PURE__ */ _(w, [["__scopeId", "data-v-c5e185a7"]]);
export {
  E as BaseButton,
  k as Spinner
};
