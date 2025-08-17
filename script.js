// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Scroll Animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.remove('opacity-0', 'translate-y-10');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Navbar shadow saat scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
//animasi persentase
const skillBars = document.querySelectorAll(".skill-bar");
const skillPercents = document.querySelectorAll(".skill-percent");
let skillsPlayed = false;

function fillSkills() {
  skillBars.forEach((bar, i) => {
    const target = parseInt(bar.getAttribute("data-skill"));
    bar.style.width = target + "%";

    let count = 0;
    const counter = setInterval(() => {
      if (count >= target) {
        clearInterval(counter);
      } else {
        count++;
        skillPercents[i].textContent = count + "%";
      }
    }, 15); // semakin kecil semakin cepat naik angkanya
  });
}

function checkSkillsInView() {
  const skillsSection = document.getElementById("skills");
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100 && !skillsPlayed) {
    skillsPlayed = true;
    fillSkills();
  }
}

window.addEventListener("scroll", checkSkillsInView);

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".skill-bar");
  const percents = document.querySelectorAll(".skill-percent");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach((bar, index) => {
          const target = parseInt(bar.getAttribute("data-skill"));
          bar.style.width = target + "%";

          let count = 0;
          const updateCounter = setInterval(() => {
            if (count >= target) {
              clearInterval(updateCounter);
            } else {
              count++;
              percents[index].textContent = count + "%";
            }
          }, 15);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.querySelector("#skills"));
});

//animasi pada my project
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-700");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});


