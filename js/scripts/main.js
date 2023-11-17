$(".menu-btn").click(function () {
  $(this).toggleClass("open");
  $(".navbar-mobile").slideToggle("fast");
});

$("#profile-home").click(function () {
  $("#profile-home").addClass("active");
  $("#profile-business").removeClass("active");
  $("#selected-home").show();
  $("#selected-business").hide();
});

$("#profile-business").click(function () {
  $("#profile-business").addClass("active");
  $("#profile-home").removeClass("active");
  $("#selected-business").show();
  $("#selected-home").hide();
});

$(document).ready(function () {
  $("#tel").mask("(00) 00000-0000");

  // Função para validar se um campo está preenchido
  function isFieldValid(field) {
    if ($(field).is(":checkbox, :radio")) {
      // Verifica se o checkbox ou algum botão de rádio no grupo está marcado
      var name = $(field).attr("name");
      return $('input[name="' + name + '"]:checked').length > 0;
    } else if ($(field).is("select")) {
      // Verifica se uma opção válida (não desabilitada) está selecionada no select
      return $(field).find("option:selected").val() !== "";
    } else {
      // Verifica se outros campos estão preenchidos
      var value = $(field).val();
      return value.trim() !== "";
    }
  }

  $(".form-subscribe").submit(function (event) {
    var isValid = true;

    $(".required").each(function () {
      if ($(this).find(":radio, :checkbox").length > 0) {
        if (!isFieldValid($(this).find(":radio, :checkbox").first())) {
          isValid = false;
          $(this).css("border", "2px solid red");
        } else {
          $(this).css("border", "");
        }
      } else {
        if (!isFieldValid(this)) {
          isValid = false;
          $(this).css("border", "2px solid red");
        } else {
          $(this).css("border", "");
        }
      }
    });

    if (!isValid) {
      event.preventDefault();
      $("#error-message").show(); // Exibe a mensagem de erro
    } else {
      $("#error-message").hide(); // Esconde a mensagem de erro se tudo estiver correto
    }
  });
});

$(window).scroll(function () {
  var header = $(".main-header");
  if ($(window).scrollTop() > 80) {
    header.addClass("header-fixed");
  } else {
    header.removeClass("header-fixed");
  }
});
