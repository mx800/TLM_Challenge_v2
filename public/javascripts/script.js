
//Menu développant
$('#gender-select').dropdown();

//Pour permettre de vider le combo
$('.vider').on('click', function() {
    $('#gender-select').dropdown('restore defaults');

});

//Menu sélection selected
if(location.pathname=='/game'){
    $('#game').addClass('active')
}else if(location.pathname=='/konami' || location.pathname=='/secret' ){
    $('#konami').addClass('active')
}


//Pour inscrire le code
var cpt = 0;
var cheatcode=0;
$('.code').on('click', function() {
    if(cpt <4 ) {
        var htmlString = "<i style='font-size:36px;color: black;margin-top:5px' class='" + ($(this).attr('id')) + "'></i>";
        $('#cheatcodezone').append(htmlString)
        cheatcode+=parseInt(($(this).attr('value')));
        cpt++;
    }
});

//Pour envoyer le code konami
$('#submit').on('click', function() {
    console.log(cheatcode)
    if(cpt>3) {
        switch (cheatcode) {
            case 4:
                var htmlString = "<img id='pic' src='https://tlm.ninja/assets/images/layout/illustration-jumping-ninja_min.png'/>";
                 $('body').append(htmlString);
                break;
            case 5:
                var htmlString = "<img id='pic' src='/images/bombe.gif\'/>";
                $('body').append(htmlString);
                setTimeout(boom,1000);
                setTimeout(redirect,10000);
                break;
            case 6:
                for(i=0;i<10;i++) {
                    alert("Virus!!!");
                }
                break;
            case 7:
                window.location = "http://solutionstlm.com/"
                break;
            case 8:
                window.location.href = '/secret';
                break;
        }
        cheatcode = 0;
        cpt = 0;
        $('#cheatcodezone').empty();
    }
});

//Show explosion
var boom = function(){
    var htmlString = "<img id='pic' style='width: 100%;height: 100%' src='/images/explosion.gif\'/>";
    $('body').append(htmlString);
}

//Redirection
var redirect = function(){
    window.location.href = window.location.href
}

