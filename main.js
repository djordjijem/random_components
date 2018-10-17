(function(){
    //segmented-control
    const modifiers = {
        btnActive: 'segmented-control__btn--active'
    };
    const attributes = {
        value: 'data-value'
    };
    const elRoot =  document.querySelector('.js-segmented-control');
    const elsButton = elRoot.querySelectorAll('.js-segmented-control__btn');
    const elSelect = elRoot.querySelector('.js-segmented-control__select');

    const chooseBtn = elBtn => {
        
        elsButton.forEach(el => el.classList.remove(modifiers.btnActive));

        elBtn.classList.add(modifiers.btnActive);
    }

    elsButton.forEach(el => {
        el.addEventListener('click', event =>{
            event.preventDefault();//testirati ovo sa prevent def
            chooseBtn(el);

            elSelect.value = el.getAttribute(attributes.value);
        });
    });

    elSelect.addEventListener('change', event =>{
        // (trick to transform NodeList into an array)
        const buttons = [].slice.call(elsButton, 0);

        const targetButton = buttons.find(el => {
            return event.target.value === el.getAttribute(attributes.value);
        });

        chooseBtn(targetButton);
    });

})();

(function(){
    //tab-index
     const modifiers = {
         tabActive: 'tab-index__vals--active'
     }

     const elRoot = document.querySelector('.js-tab-index');
     const elInput = elRoot.querySelector('input');
     
     elInput.addEventListener('click', e =>{
         if(e.which === 1) console.log('aaa');
     });
})();