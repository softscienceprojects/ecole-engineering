const servicesImageDivs = document.querySelectorAll('.services-image');
//window.innerWidth >= 1200 : massive screen, put margins on the sides
//window.innerWeidth <= 900 : small screen, single column only

updateWindowFunctionality = function() {
    if (window.innerWidth <= 900) {
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
        
            //     console.log(boundingRect.top)
            //    console.log(window.innerHeight)
            // servicesImageDivs[i].addEventListener("mouseover", function() {      
            // });
            // servicesImageDivs[i].addEventListener("mouseout", function() {
            //     servicesImageDivs[i].classList.remove('darker-background');
            //     let description = servicesImageDivs[i].querySelector('.services-desc')
            //     description.classList.remove('show');
            //     description.classList.add('hide');        
            // });
    
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

window.addEventListener('resize', updateWindowFunctionality);
window.addEventListener('load', updateWindowFunctionality);

//window.parent.navigator.userAgent
//if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { // some code..}
  