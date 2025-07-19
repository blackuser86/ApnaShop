// थीम टॉगलर
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.setAttribute('data-theme', 
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    themeToggle.innerHTML = document.body.getAttribute('data-theme') === 'dark' ? 
        '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// फॉर्म सबमिशन (FormSubmit API)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
    })
    .then(response => {
        if (response.ok) {
            alert('धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।');
            this.reset();
        }
    });
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.setAttribute('data-theme', 
    document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  themeToggle.innerHTML = document.body.getAttribute('data-theme') === 'dark' 
    ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// स्क्रॉल एनिमेशन
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.card, .testimonial');
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});





// हैमबर्गर मेनू टॉगल
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// स्क्रॉल पर एक्टिव लिंक
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute('id');
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').includes(current)) {
      item.classList.add('active');
    }
  });
});
