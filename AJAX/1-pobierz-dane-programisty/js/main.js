$(document).ready(function () {


    $('#pobierzDane').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (naszeDane) {
            $('#dane-programisty').append(
                '<br><hr>Imię: ' + naszeDane.imie +
                '<br><hr>Nazwisko: ' + naszeDane.nazwisko +
                '<br><hr>Zawod: ' + naszeDane.zawod +
                '<br><hr>Firma: ' + naszeDane.firma);

        });

    });
});
