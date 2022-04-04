var removeFilm;
var list = document.querySelector("ul");

const FilmsForm = () => {
    const form = $(document.createElement('form'));
    form.attr({
        class: 'container',
        id: 'form'
    });
    const newFilm = $(document.createElement('input'));
    newFilm.attr({
        type: "text",
        class: 'form-control',
        id: 'newFilm',
        name: 'newFilm',
        placeholder: 'Tytuł filmu',
    });
    const button = $(document.createElement('button'));
    button.html('Dodaj film');
    button.attr({
        type: 'button',
        id: 'addButton',
        class: 'btn btn-outline-secondary'
    });
    button.click(addFilms);

    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            e.preventDefault();
            e.stopImmediatePropagation();
            addFilms();
        }
    });

    form.append([newFilm, button])
    return form;
}

function randomColor() {
    var color = '#' + Math.floor(Math.random()*16777215).toString(16);
    return color;
}

function selectFilm() {
    this.classList.toggle("select");
}

function addFilms() {
    if ($('#newFilm').val().length > 0) {
        document.body.style.backgroundColor = randomColor() 

        var li = document.createElement("li");
        var span = document.createElement("span");
        li.appendChild(span);
        span.appendChild(document.createTextNode($('#newFilm').val()));
        list.appendChild(li);
    
        var button = document.createElement("button");
        button.appendChild(document.createTextNode("X"));
        button.className = "x";
        li.appendChild(button);
    
        removeFilm = document.querySelectorAll(".x")
    
        for (var i = 0; i < removeFilm.length; i++) {
            removeFilm[i].addEventListener("click", function() {
                this.parentNode.remove()
            })
        }

        $('#newFilm').val('');
    
        li.addEventListener('click', selectFilm);
    }
}

export default FilmsForm;