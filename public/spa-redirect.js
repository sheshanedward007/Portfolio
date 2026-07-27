// SPA 404 URL Restoration Script
// Required for GitHub Pages single-page app routing:
// The 404.html encodes the route as a query param (?p=...) and this script
// restores it to window.history so React Router sees the correct path.
(function (l) {
  if (l.search[1] === 'p') {
    var decoded = l.search.slice(1).split('&').map(function (s) {
      return s.replace(/~and~/g, '&');
    }).filter(function (s) {
      return s.slice(0, 2) === 'p=';
    })[0];
    if (decoded) {
      var path = decodeURIComponent(decoded.slice(2));
      var repoSubpath = l.pathname.endsWith('/') ? l.pathname.slice(0, -1) : l.pathname;
      window.history.replaceState(null, null,
        repoSubpath + (path ? '/' + path : '') + l.hash
      );
    }
  }
}(window.location));
