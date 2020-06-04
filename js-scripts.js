const servicesImageDivs = document.querySelectorAll('.services-image');
const serviceImageDesc = document.querySelectorAll('.services-desc');

// const resetFromPageLoad = {
//     'removeBackground': servicesImageDivs && servicesImageDivs ? servicesImageDivs.classList.remove('darker-background') : undefined,
//     'removeShow': serviceImageDesc ? servicesImageDesc.classList.remove('show') : undefined,
//     'addHide': serviceImageDesc ? servicesImageDesc.classList.add('hide') : undefined
// }

updateWindowFunctionality = function(resetOptions = null) {
    if (resetOptions && typeof(resetOptions) === 'function') {
        for (func in resetOptions) {
            func()
        };
    }

    if (window.innerWidth <= 700) {
        mobileView();
    } else {
        desktopView();
    }
}

checkHeightPos = function() {
    for (let i = 0; i < servicesImageDivs.length; i++) {
        boundingRect = servicesImageDivs[i].getBoundingClientRect();
        if (boundingRect.top+200 <= (window.innerHeight || document.documentElement.clientHeight)) {
            servicesImageDivs[i].classList.add('darker-background');
            let description = servicesImageDivs[i].querySelector('.services-desc')
                description.classList.remove('hide');
                description.classList.add('show');  
            servicesImageDivs[i].removeEventListener('scroll', checkHeightPos)
        } else {
            servicesImageDivs[i].removeEventListener('scroll', checkHeightPos)
        }
    }
}


mobileView = function() {
    window.addEventListener('scroll', checkHeightPos)    
};


desktopView = function() {
    for (let i = 0; i < servicesImageDivs.length; i++) {
        servicesImageDivs[i].addEventListener("mouseover", function() {
            servicesImageDivs[i].classList.add('darker-background');
            let description = servicesImageDivs[i].querySelector('.services-desc')
            description.classList.remove('hide');
            description.classList.add('show');        
        });
        servicesImageDivs[i].addEventListener("mouseout", function() {
            servicesImageDivs[i].classList.remove('darker-background');
            let description = servicesImageDivs[i].querySelector('.services-desc')
            description.classList.remove('show');
            description.classList.add('hide');        
        });
    };
};



// window.addEventListener('resize', updateWindowFunctionality(resetFromPageLoad));
window.addEventListener('resize', updateWindowFunctionality);
window.addEventListener('load', updateWindowFunctionality);

//window.parent.navigator.userAgent
//if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { // some code..}
  