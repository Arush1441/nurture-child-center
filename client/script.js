document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  });

  
  // Function to open the modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  var modals = document.getElementsByClassName('modal');
  for (var i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
};

document.querySelectorAll('.accordion-btn').forEach(button => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    button.classList.toggle('active');
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});
// Accordion toggle
document.querySelectorAll('.service-header').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');
  });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});
