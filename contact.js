// Same contact format as the Bookcase and Pulse sites, with a no-JavaScript fallback.
document.querySelectorAll('.contact[data-u][data-d]').forEach(function (element) {
    var address = element.dataset.u + String.fromCharCode(64) + element.dataset.d;
    var link = document.createElement('a');
    link.href = 'mail' + 'to:' + address;
    link.textContent = address;
    element.replaceChildren(link);
});
