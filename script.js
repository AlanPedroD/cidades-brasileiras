let selectEstado = document.querySelector('select[name="estado"]');

let imagemSp = document.getElementsByClassName('imagem-sp');
let imagemSc = document.getElementsByClassName('imagem-sc');
let imagemRj = document.getElementsByClassName('imagem-rj');
let imagemMc = document.getElementsByClassName('imagem-mc');

selectEstado.addEventListener('change', function(event){
    if(event.target.value === 'SP'){
        imagemSp[0].style.display = 'block';
        imagemRj[0].style.display = 'none';
        imagemSc[0].style.display = 'none';
        imagemMc[0].style.display = 'none';
    }else
    if(event.target.value === 'RJ'){
        imagemRj[0].style.display = 'block';
        imagemSp[0].style.display = 'none';
        imagemSc[0].style.display = 'none';
        imagemMc[0].style.display = 'none';
    }else
    if(event.target.value === 'SC'){
        imagemSc[0].style.display = 'block';
        imagemSp[0].style.display = 'none';
        imagemRj[0].style.display = 'none';
        imagemMc[0].style.display = 'none';
    }else
    if(event.target.value === 'AL'){
        imagemMc[0].style.display = 'block';
        imagemSp[0].style.display = 'none';
        imagemRj[0].style.display = 'none';
        imagemSc[0].style.display = 'none';
    }
})
