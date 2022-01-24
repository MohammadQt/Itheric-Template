! function(icons) {
    function iconEx() {
        var iconEx = '';
        icons.querySelector("body").insertAdjacentHTML("afterbegin", iconEx)
    }

    function t(icons, iconEx) {
        var iconEx = iconEx || {},
            t = iconEx.size ? "icon--" + iconEx.size : "",
            iconClass = "alpha-icon" + t + "" + (iconEx["class"] || ""),
            iconSvg = "<svg><use xlink:href='#" + icons + "' /></svg>",
            iconSpan = "<span class='" + iconClass + "'>" + a(iconSvg, iconClass) + "</span>";
        return iconSpan
    }

    function a(icons, iconEx) {
        return iconEx.indexOf("spinner") > -1 ? "<span class='icon__spinner'>" + icons + "</span>" : icons
    }

    function iconClass() {
        for (var iconEx = icons.querySelectorAll("[data-icon]"), a = 0; a < iconEx.length; a++) {
            var iconClass = iconEx[a],
                iconSvg = iconClass.getAttribute("data-icon"),
                iconSpan = {
                    "class": iconClass.className,
                    size: iconClass.getAttribute("data-size")
                };
            iconClass.insertAdjacentHTML("beforebegin", t(iconSvg, iconSpan)), iconClass.parentNode.removeChild(iconClass)
        }
    }
    icons.addEventListener("DOMContentLoaded", function() {
        iconEx(), iconClass()
    })
}(window.document);
