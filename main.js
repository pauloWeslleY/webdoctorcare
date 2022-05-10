window.addEventListener('scroll', onScroll);

onScroll();
function onScroll() {
   showNavOnScroll()
   showBackToTopOnScroll()

   activeMenuAtCurrentSection(home)
   activeMenuAtCurrentSection(services)
   activeMenuAtCurrentSection(about)
   activeMenuAtCurrentSection(contact)
}
function activeMenuAtCurrentSection(section) {
   const targetLine = scrollY + innerHeight / 2;

   //?|> verificar se a seção passou da linha
   // quais dados vou precisar?
   const sectionTop = section.offsetTop;
   const sectionHeight = section.offsetHeight;
   const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

   // onde a section termina
   const sectionEndsAt = sectionTop + sectionHeight;
   const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

   //limit
   const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

   const isSectionId = section.getAttribute('id');
   const isMenuElement = document.querySelector(`.menu__mobile a[href*=${isSectionId}]`)

   isMenuElement.classList.remove('active')
   if (sectionBoundaries) {
      isMenuElement.classList.add('active')
   }
}
function showNavOnScroll() {
   if (scrollY > 0) {
      navigation.classList.add('scroll');
   } else {
      navigation.classList.remove('scroll');
   }
}
function showBackToTopOnScroll() {
   if (scrollY > 550) {
      btnBackToTop.classList.add('show');
   } else {
      btnBackToTop.classList.remove('show');
   }
}
function openMenuMobile() {
   document.body.classList.add('menu__expanded_mobile');
}
function closeMenuMobile() {
   document.body.classList.remove('menu__expanded_mobile');
}
//! === === === ===|> ScrollReveal
ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 900,
}).reveal(`
   #home,
   #home img,
   #home .stats,
   #services,
   #services header,
   #services .card,
   #about header,
   #about .content
   #contact header,
   #contact .content,
   #contact a img`)
