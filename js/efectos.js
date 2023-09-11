let sobreMi=$('#sobreMi').offset().top;
let skill= $('#skill').offset().top;
let softSkills= $('#softSkill').offset().top;
let hobbie= $('#hobbie').offset().top;
let formacionAcademica= $('#formacionAcademica').offset().top;
let experienciaProfesional= $('#experienciaProfesional').offset().top;
let contacto= $('#contacto').offset().top;

    $('#btn_sobreMi').on('click', function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: sobreMi
        }, 500);
    });

    $('#btn_Skills').on('click', function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: skill
        }, 500);
    });

    $('#btn_SoftSkills').on('click', function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: softSkills
        }, 500);
    });


    $('#btn_Hobbies').on('click', function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: hobbie
        }, 500);
    });

    $('#btn_Formacion').on('click', function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: formacionAcademica
        }, 500);
    });

    $('#btn_Proyectos').on('click', function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: experienciaProfesional
        }, 500);
    });

    $('#btn_Contacto').on('click', function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: contacto
        }, 500);
    });


//------------aca empieza la parte del menú hamburguesa----//

const menuCheck = document.getElementById('menu-responsive');
const menu = document.querySelector('.menu');

menuCheck.addEventListener('click', function() {
    menu.classList.toggle('oculto');
});