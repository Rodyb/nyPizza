// Wrapper around standard .click()
//
// If click fails, it might be because something is in the way.
// Try dismissing lightboxes/overlays by clicking on the body tag,
// then click again.
exports.command = function clickJS() {
    this.execute(function(css) {
        document.querySelector(css)

    })
    // try clicking again
        .click(selector, callback);

};