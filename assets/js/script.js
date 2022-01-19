$(function (){
    $('.carousel').carousel()

    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...")
    })
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    console.log('funciona tooltip')

    $('body').on('dblclick', '#ingredientes', function(){
        $(this).css('color','red')
    })

    $('body').on('dblclick', '#preparacion', function(){
        $(this).css('color','red')
    })

    $('.card-title').click(function(){
        $(".card-text").toggle()
    })

})





