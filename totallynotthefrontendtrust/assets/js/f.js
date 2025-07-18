// Remove the problematic Font Awesome Kit configuration and replace with CDN version
document.addEventListener("DOMContentLoaded", function() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css";
  document.head.appendChild(link);
});