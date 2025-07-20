const images = [
            {
                src: "https://picsum.photos/400/300?random=1",
                alt: "Beautiful landscape with mountains and lakes",
                caption: "Serene mountain landscape reflecting in crystal clear waters"
            },
            {
                src: "https://picsum.photos/400/300?random=2",
                alt: "Urban cityscape at sunset",
                caption: "Golden hour illuminating the bustling city skyline"
            },
            {
                src: "https://picsum.photos/400/300?random=3",
                alt: "Close-up of colorful flowers in bloom",
                caption: "Vibrant wildflowers dancing in the spring breeze"
            },
            {
                src: "https://picsum.photos/400/300?random=4",
                alt: "Ocean waves crashing on rocky shore",
                caption: "Powerful waves meeting the rugged coastline"
            },
            {
                src: "https://picsum.photos/400/300?random=5",
                alt: "Forest path covered with autumn leaves",
                caption: "A peaceful trail through the colorful autumn forest"
            },
            {
                src: "https://picsum.photos/400/300?random=6",
                alt: "Snow-capped mountain peaks under blue sky",
                caption: "Majestic peaks reaching toward the endless blue sky"
            }
        ];

        let currentImageIndex = 0;
        const gallery = document.getElementById('gallery');
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        const modalCaption = document.getElementById('modal-caption');
        const closeModal = document.getElementById('close-modal');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        // Function to create gallery items
        function createGalleryItems() {
            images.forEach((image, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.tabIndex = 0;
                galleryItem.setAttribute('role', 'button');
                galleryItem.setAttribute('aria-label', `View larger image: ${image.alt}`);
                
                galleryItem.innerHTML = `
                    <img src="${image.src}" alt="${image.alt}">
                    <div class="caption">
                        <p>${image.caption}</p>
                    </div>
                `;
                
                // Add click event listener
                galleryItem.addEventListener('click', () => openModal(index));
                
                // Add keyboard event listener
                galleryItem.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openModal(index);
                    }
                });
                
                gallery.appendChild(galleryItem);
            });
        }

        // Function to open modal
        function openModal(index) {
            console.log('Opening modal for image:', index); // Console log as requested
            currentImageIndex = index;
            const image = images[index];
            
            modalImg.src = image.src;
            modalImg.alt = image.alt;
            modalCaption.textContent = image.caption;
            
            modal.style.display = 'block';
            modal.setAttribute('aria-hidden', 'false');
            closeModal.focus(); // Focus management for accessibility
            
            // Add tabindex attributes for modal navigation
            addTabIndexToImages();
        }

        // Function to close modal
        function closeModalFunc() {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        }

        // Function to show next image
        function showNextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            openModal(currentImageIndex);
        }

        // Function to show previous image
        function showPreviousImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            openModal(currentImageIndex);
        }

        // Function to add tabindex attributes (as requested in assignment)
        function addTabIndexToImages() {
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach((item, index) => {
                item.setAttribute('tabindex', index === currentImageIndex ? '0' : '-1');
            });
        }

        // Event listeners for modal controls
        closeModal.addEventListener('click', closeModalFunc);
        closeModal.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                closeModalFunc();
            }
        });

        prevBtn.addEventListener('click', showPreviousImage);
        nextBtn.addEventListener('click', showNextImage);

        // Close modal when clicking outside the image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModalFunc();
            }
        });

        // Keyboard navigation for modal
        document.addEventListener('keydown', (e) => {
            if (modal.style.display === 'block') {
                switch(e.key) {
                    case 'Escape':
                        closeModalFunc();
                        break;
                    case 'ArrowLeft':
                        showPreviousImage();
                        break;
                    case 'ArrowRight':
                        showNextImage();
                        break;
                }
            }
        });

        // Functions for focus and blur events (as requested in assignment)
        function onFocusEvent(element) {
            console.log('Focus event triggered on:', element);
            element.style.outline = '3px solid #007bff';
        }

        function onBlurEvent(element) {
            console.log('Blur event triggered on:', element);
            element.style.outline = '';
        }

        // Mouse events (as requested in assignment)
        function onMouseOverEvent(element) {
            console.log('Mouse over event triggered');
            // Hover effects are handled by CSS
        }

        function onMouseLeaveEvent(element) {
            console.log('Mouse leave event triggered');
            // Hover effects are handled by CSS
        }

        // Page load event
        function onLoadEvent() {
            console.log('Page loaded successfully');
            createGalleryItems();
            addTabIndexToImages();
            
            // Add focus and blur events to gallery items
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach(item => {
                item.addEventListener('focus', () => onFocusEvent(item));
                item.addEventListener('blur', () => onBlurEvent(item));
                item.addEventListener('mouseover', () => onMouseOverEvent(item));
                item.addEventListener('mouseleave', () => onMouseLeaveEvent(item));
            });
        }

        // Initialize the gallery when page loads
        window.addEventListener('load', onLoadEvent);