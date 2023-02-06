
$(document).ready(function(){

    $('#pobierzDane').click(function(){

    
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
      
        .done(function(data){
           
            
            let bId=$('<p></p>').text(`Id: ${data.id}`);
            let bUserId=$('<p></p>').text(`User id: ${data.userId}`);
            let bTitle=$('<p></p>').text(`Title: ${data.title}`);
            let bBody=$('<p></p>').text(`Tresc: ${data.body}`);
            let bHr=$('<hr></hr>');

            let jqBody=$('body');
            jqBody.append(bId);
            jqBody.append(bUserId);
            jqBody.append(bTitle);
            jqBody.append(bBody);
            jqBody.append(bHr);

            


        })
        .fail(function(error){
            console.error(error);

        });
        // console.log('dziala prawidlowo');

    });
});

