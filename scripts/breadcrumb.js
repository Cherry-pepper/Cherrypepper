// scripts/breadcrumb.js

// Called from iframe pages to tell the main page where we are
function setBreadcrumb(parts) {
  if (window.parent && window.parent.updateBreadcrumb) {
    window.parent.updateBreadcrumb(parts);
  }
}
