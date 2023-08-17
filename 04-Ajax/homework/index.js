let friendsHandler = function () {
    let lista = $("#lista");
    lista.empty();
  
    $.get("http://localhost:5000/amigos", (response) => {
      response.map((amigo) => {
        let elementoHTML = document.createElement("li");
        elementoHTML.innerText = `${amigo.name} es tu amigo numero: ${amigo.id}`;
  
        lista.append(elementoHTML);
      });
    });
  };
  
  let searchHandler = function () {
    // let id = document.querySelector("#input").value
    let id = $("#input").val();
  
    if (id) {
      $.get(`http://localhost:5000/amigos/${id}`, (response) => {
        $("#amigo").html(`Nombre: ${response.name}`);
      });
    } else {
      $("#amigo").html("Inserta un id");
    }
  };
  
  let deleteHandler = function () {
    let id = document.querySelector("#inputDelete").value;
  
    if (id) {
      $.ajax({
        type: "DELETE",
        url: `http://localhost:5000/amigos/${id}`,
        success: () => {
          $("#success").html("Tu amigo fue eliminado con exito");
          friendsHandler();
        },
      });
    } else {
      $("#success").html("Inserta un id");
    }
    // vaciarId(id = "") ;
  };
  
  $("#boton").on("click", friendsHandler);
  $("#search").on("click", searchHandler);
  $("#delete").on("click", deleteHandler);