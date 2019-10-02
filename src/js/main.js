const SectionHeader = document.querySelector('.SectionHeader--js')
SectionHeader.addEventListener('click', (e) => {
  console.log ("click_SectionHeader");
});


const load = document.querySelector('.load--js')
load.addEventListener('click', (e) => {
  console.log ("click_load");
  const text =localStorage.getItem('text'); 
  SectionHeader.value = text;
});



const save = document.querySelector('.save--js')
save.addEventListener('click', (e) => {
  console.log ("click_save");
  localStorage.setItem('text', SectionHeader.value);
});




