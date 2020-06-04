let servicesImageDivs = document.querySelectorAll('.services-image');


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
}
