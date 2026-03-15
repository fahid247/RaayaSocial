(function() {
            const toggleBtn = document.getElementById('mobileToggle');
            const mobileMenu = document.getElementById('mobileMenu');

            if (toggleBtn && mobileMenu) {
                toggleBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    mobileMenu.classList.toggle('show');
                });

                document.addEventListener('click', function(event) {
                    if (!toggleBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                        mobileMenu.classList.remove('show');
                    }
                });
            }
        })();

        function toggleFaq(questionEl) {
      const item = questionEl.closest('.faq-item');
      item.classList.toggle('open');
    }