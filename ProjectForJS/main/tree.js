function generateTree(elem) {
    var child = elem.firstElementChild;
    var ul = document.createElement('ul');
    while(child) {
        var li = document.createElement('li');
        li.innerHTML = child.tagName;
        var list = generateTree(child);
        li.appendChild(list);
        ul.appendChild(li);
        child = child.nextElementSibling;
    }
    elem.appendChild(ul);
    return ul;
}

generateTree(document.documentElement);