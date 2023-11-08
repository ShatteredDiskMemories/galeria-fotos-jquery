$(document).ready(function () {
    $('header button').click(function () {
      $('form').slideDown();
    });
  
    $('#botao-cancelar').click(function () {
      $('form').slideUp();
    });
  
    $('form').on('submit', function (e) {
      e.preventDefault();
      const enderecoNova = $('#endereco-imagem').val();
      const novoItem = $('<li style="display: none"></li>'); // Correção no fechamento da tag.
      $(`<img src='${enderecoNova}' />`).appendTo(novoItem);
      $(`
          <div class='overlay-link'>
              <a href="${enderecoNova}" target="_blank" title="Ver imagem em tamanho real">
                  Ver imagem em tamanho real
              </a>
          </div>
      `).appendTo(novoItem);
      $(novoItem).appendTo('ul');
      $(novoItem).fadeIn(1000);
      $('#endereco-imagem').val('');
    });
  });
  