$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()

        const tarefa = $('#tarefa').val()
        const data =$('#data').val()

        const novoItem = $('<li"></li>')
        $(`<p> Tarefa: ${tarefa} | Data: ${data}</p>`).appendTo(novoItem)
        $(`<hr>`).appendTo(novoItem)
        $(novoItem).appendTo('ul').click()

        $('p').on('click',function(){
            $(this).addClass('riscado')
        })

    })
    
})