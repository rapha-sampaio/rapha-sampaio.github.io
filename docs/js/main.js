function toggle_menu() {
    var menu = document.getElementsByClassName("lang-selector-content")[0];
    menu.style.display = menu.style.display === 'none' ? '' : 'none';
}
function reverse(s){
    return s.split("").reverse().join("");
}
function decode_and_show(str){
    str = reverse(str);
    alert(atob(str));
}