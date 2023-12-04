"use strict";
if (void 0 === document.cbDocumentWideState) {
  const e = {
    cbebloader_called: 1,
    mbk: null,
    mpt: null,
    cbeb_md: null,
    db: null,
    expectCache: !1,
    allow_google_map: null,
    bespoke_google_api_key: null,
    loadedCustomDesignFile: null,
    loadedFont: null,
    loadedFontAwesome: null,
    loadedMapGeocoder: null,
    loadedMapStyle: null,
    loadedMap: null,
  };
  document.cbDocumentWideState = e;
}
if (void 0 === read_cookie)
  var read_cookie = (e) => {
    const t = document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)");
    return (t && t.pop()) || "";
  };
function initialise_msp_login_details(e) {
  void 0 !== e && void 0 !== e.memberInfo
    ? (document.cbDocumentWideState.cbeb_md = {
        u: e.memberInfo.email,
        f: e.memberInfo.firstName,
        l: e.memberInfo.lastName,
        msp_key: e.memberInfo.id,
        m: "memberspace",
      })
    : void 0 !== e
    ? console.log("Unusual member info:", e)
    : console.log("Undefined member_info");
}
function CbDbCachePrefetch(e, t) {
  const o = "https://cdn.communitybox.co/directory/" + e + "/" + t + "/db-" + t,
    n = new XMLHttpRequest();
  n.open("GET", o, !0),
    (n.onload = function () {
      4 === n.readyState && 200 === n.status
        ? n.responseText &&
          (document.cbDocumentWideState.db = JSON.parse(n.responseText))
        : console.log(
            `CbDbCachePrefetch - onload - unexpected status ${n.status}`
          );
    }),
    (n.onerror = function () {
      console.error("An error occurred during CbDbCachePrefetch");
    }),
    n.send();
}
function loadCbResources(e) {
  const t = { box: e, origin: window.location.href },
    o = new XMLHttpRequest();
  o.open("POST", "https://cfapi.communitybox.co/get/embed/bootstrap/data", !0),
    o.setRequestHeader("Content-type", "application/json; charset=utf-8"),
    (o.onload = function () {
      if (4 === o.readyState && 200 === o.status) {
        const n = JSON.parse(o.responseText);
        if (n.hasOwnProperty("err")) console.error(n.err);
        else {
          n.cachecode
            ? ((document.cbDocumentWideState.expectCache = !0),
              null == document.cbDocumentWideState.db &&
                CbDbCachePrefetch(e, n.cachecode))
            : console.log("No cache-code for box ", e),
            (document.cbDocumentWideState.allow_google_map =
              n.allow_google_map),
            null == document.cbDocumentWideState.mbk &&
              (document.cbDocumentWideState.mbk =
                n.mapbox_api_key ||
                atob(
                  "cGsuZXlKMUlqb2ljbTlzWVc1a1pqY2lMQ0poSWpvaVkyczRjMnM1Tnpabk1HTjZlRE5sYnpWM1lXVjVNM1Z3YXlKOS5wV0xTR0hMWFBhX3JqVGFpSzlkYW5B"
                ));
          const o = n.revision,
            c = document.createElement("script");
          let a;
          const d = document.createElement("link"),
            i = document.createElement("link"),
            s = document.createElement("link"),
            m = document.createElement("link");
          if (
            (c.src != /localhost/.test(window.location.href)
              ? "embed.js"
              : "https://dashboard.communitybox.co/embed/" +
                o +
                "/embed-" +
                o +
                ".js",
            c.setAttribute("defer", ""),
            (document.cbDocumentWideState.bespoke_google_api_key =
              n.bespoke_google_api_key),
            void 0 !== n.gmap_api_key || void 0 !== n.bespoke_google_api_key)
          ) {
            const e = n.bespoke_google_api_key || n.gmap_api_key;
            (a = document.createElement("script")),
              (a.src =
                "https://maps.googleapis.com/maps/api/js?key=" +
                e +
                "&libraries=places,geometry"),
              a.setAttribute("async", "");
          }
          if (
            ((d.href =
              "https://api.tiles.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css"),
            (d.rel = "stylesheet"),
            (i.href =
              "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.css"),
            (i.rel = "stylesheet"),
            void 0 !== n.font_loader
              ? (s.href = n.font_loader)
              : (s.href =
                  "https://fonts.googleapis.com/css?family=Quicksand:400,500"),
            (s.rel = "stylesheet"),
            (m.rel = "stylesheet"),
            (m.href =
              "https://use.fontawesome.com/releases/v5.2.0/css/all.css"),
            m.setAttribute("crossorigin", "anonymous"),
            m.setAttribute(
              "integrity",
              "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
            ),
            void 0 !== n.custom_design_file &&
              null == document.cbDocumentWideState.loadedCustomDesignFile)
          ) {
            var t = document.createElement("link");
            (t.rel = "stylesheet"),
              (t.href = [
                "https://cdn.communitybox.co/directory/",
                e,
                "/design/",
                n.custom_design_file,
                "/design-",
                n.custom_design_file,
                ".css",
              ].join("")),
              document.head.appendChild(t),
              (document.cbDocumentWideState.loadedCustomDesignFile =
                n.custom_design_file);
          }
          null == document.cbDocumentWideState.loadedFont &&
            (document.head.appendChild(s),
            (document.cbDocumentWideState.loadedFont = !0)),
            null == document.cbDocumentWideState.loadedFontAwesome &&
              (document.head.appendChild(m),
              (document.cbDocumentWideState.loadedFontAwesome = !0)),
            document.head.appendChild(c),
            null == document.cbDocumentWideState.loadedMapStyle &&
              (document.head.appendChild(d),
              (document.cbDocumentWideState.loadedMapStyle = !0)),
            null == document.cbDocumentWideState.loadedMapGeocoder &&
              (document.head.appendChild(i),
              (document.cbDocumentWideState.loadedMapGeocoder = !0)),
            void 0 !== a &&
              null == document.cbDocumentWideState.loadedMap &&
              (document.head.appendChild(a),
              (document.cbDocumentWideState.loadedMap = !0));
        }
      } else
        console.log(
          `Unexpected network state ${o.readyState} and/or status ${o.status} during loadCbResources`
        ),
          console.error(o.responseText);
    }),
    (o.onerror = function () {
      console.log("Error registered in loadCbResources");
    }),
    o.send(JSON.stringify(t));
}
function fetchCbBoxKey() {
  const e = document.getElementById("communitybox-target"),
    t =
      document.querySelector("[cbeb-filter-bar]") ||
      document.querySelector("[communitybox-search-bar]");
  if (e || t) {
    const o =
      (e && e.getAttribute("box")) || (t && t.getAttribute("directory"));
    if (o && o.length > 0) return o;
  }
}
function waitForCbDiv(e) {
  const t = fetchCbBoxKey();
  void 0 === t && e.triesLeft > 0
    ? window.setTimeout(() => {
        waitForCbDiv({ triesLeft: e.triesLeft - 1 });
      }, 500)
    : null != t && loadCbResources(t);
}
!(function () {
  if (
    "object" == typeof UserAccountApi &&
    !0 === UserAccountApi.isUserAuthenticated()
  ) {
    const e = read_cookie("logged_in_maybe");
    "string" == typeof e &&
      e.length > 0 &&
      (document.cbDocumentWideState.cbeb_md = { u: e, m: "member areas" });
  }
})(),
  "object" == typeof Kajabi &&
    Kajabi.currentSiteUser &&
    Kajabi.currentSiteUser.contactId &&
    (document.cbDocumentWideState.cbeb_md = {
      u: Kajabi.currentSiteUser.contactId,
      m: "kajabi",
    }),
  "object" == typeof Thinkific &&
    Thinkific.current_user &&
    (document.cbDocumentWideState.cbeb_md = {
      u: Thinkific.current_user.email,
      m: "thinkific",
    }),
  (function () {
    if ("undefined" != typeof MemberSpace && !0 === MemberSpace.ready)
      MemberSpace.getMemberInfo &&
        MemberSpace.getMemberInfo() &&
        initialise_msp_login_details(MemberSpace.getMemberInfo());
    else {
      if (
        "undefined" != typeof MemberSpace &&
        (console.log(
          "MemberSpace object exists but ready was false or undefined:",
          MemberSpace
        ),
        void 0 !== MemberSpace.User &&
          void 0 !== MemberSpace.User.get &&
          "function" == typeof MemberSpace.User.get)
      ) {
        const e = MemberSpace.User.get();
        if (void 0 !== e)
          return (
            (document.cbDocumentWideState.cbeb_md = {
              u: e.email,
              f: e.firstName,
              l: e.lastName,
              msp_key: e.id,
              m: "memberspace",
            }),
            void console.log(
              "Updated MemberSpace user data the old-fashioned way"
            )
          );
      }
      document.addEventListener("MemberSpace.member.info", (e) => {
        const t = e;
        document.cbDocumentWideState.cbeb_md = {
          u: t.email,
          f: t.firstName,
          l: t.lastName,
          msp_key: t.id,
          m: "memberspace",
        };
      });
    }
  })(),
  waitForCbDiv({ triesLeft: 10 });
