// Safen User Input Part I - htmlspecialchars
function htmlspecialchars(formData) {
  // Insert your code here
  const map = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '&': '&amp;',
  };

  return formData.replace(/[<>"&]/g, function (m) {
    return map[m];
  });
}
