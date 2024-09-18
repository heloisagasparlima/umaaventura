const avanca=document.queryAelectorAll('.btn-proximo');

avanca.forEach (button=>) {
    button.addEventListener('.click',function() {
        const atual= document.querySelector('.ativo');
        const proximoPasso= 'passo-'+ this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementByld(proximoPasso).classList.add('ativo');
    })

})
