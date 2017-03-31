var $name;
var $lastName;
var $message;
var $persons;
var $modal;
var $title;

$(document).ready(function(){
    var $save = $("#bSave");
    var $seeLocal = $("#bLocal");
    var $clear = $("#bClear");

    $save.click(save);
    $seeLocal.click(listLS);
    $clear.click(clearLS);

    $name = $("#name");
    $lastName = $("#lastName");
    $message = $("#message");
    $modal = $("#myModal");
    $title = $("#title");
    $persons = $("#persons");

    //Para eliminar el mensaje de Guardado exitoso cuando quiera ingresar otra persona.
    //Cuando el foco esté en campo del Nombre, se eliminará el mensaje.
    $name.focus(function () {
        $message.text("");
    })

    $lastName.focus(function () {
        $message.text("");
    })

})

function save() {
    var arrayData;
    arrayData = JSON.parse(localStorage.getItem("Datos"));

    if (arrayData == null) {
        arrayData = [];
    }
    var person = {
        name: $name.val(),
        lastName: $lastName.val()
    }
    arrayData.push(person);
    localStorage["Datos"] = JSON.stringify(arrayData);
    $message.text('The info has been saved');
    $name.val("");
    $lastName.val("");
}

function clearLS() {
    localStorage.clear();
    $name.val("");
    $lastName.val("");
}

function listLS() {
    //Para mostrar el modal cuando se haga clic en el botón
    $modal.css("display","block");
    var li,span;
    var data = JSON.parse(localStorage.getItem("Datos"));
    //Para limpiar la lista
    $persons.empty();
    //Si la lista está vacia, se indica que no se encontraron datos
    if (!data) {
        $title.text("No se encontraron datos.");
    } else {
        $title.text("This persons are saved in the Local Storage:");
        for (var i = 0; i < data.length; i++){
            var object = data[i];
            li = "<li> <span>"+object.name+" "+object.lastName+"</span></li>";
            //Para agregar la lista de personas al <lu>
            $persons.append(li);
        }

    }
}
