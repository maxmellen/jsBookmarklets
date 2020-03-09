require("./_logBookmarklet")(() => {
  ((d, e, U, a, c) => {
    e = d.querySelector(`[${a}=\"${U}\"]`);
    if (e) return d.body.removeChild(e);
    e = d.createElement("style");
    e.setAttribute(a, U);
    e.textContent = c;
    d.body.appendChild(e);
  })(
    document,
    null,
    "UNIQUE_ID",
    "meta-dark",
    "body { filter: invert(1) hue-rotate(180deg); }"
  );
});
