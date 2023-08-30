function form7(){
    var shoe = document.forms["step7"]["shoe_size"].value;
    var year = document.forms["step7"]["year"].value;

    window.alert(((((shoe*2)+5)*50)-year)+1766);

}