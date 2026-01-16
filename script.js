/**
 * script.js
 * Luxury Real Estate Portfolio - Dynamic Content & Interactivity
 * Handles property listings, modal interactions, and navigation
 */

// ============================================================================
// 1. DATA (The CMS)
// ============================================================================

/**
 * Properties Data
 * Array of property objects with metadata and details
 */
const properties = [
    {
        id: 1,
        title: "Ikoyi Waterfront Penthouse",
        price: "₦850M",
        location: "Ikoyi, Lagos",
        image: "assets/image1.jpg",
        description: "Stunning 5-bedroom luxury penthouse with panoramic views of Lagos lagoon. State-of-the-art smart home technology, private rooftop terrace, and direct access to private beach. Ideal for high-net-worth individuals seeking premium waterfront living.",
        externalLink: "https://carnelianrealty.com/properties/ikoyi-penthouse"
    },
    {
        id: 2,
        title: "Victoria Island Executive Suite",
        price: "₦650M",
        location: "Victoria Island, Lagos",
        image: "assets/image2.png",
        description: "Exquisite 4-bedroom executive apartment in the heart of VI. Premium finishes, climate control, and world-class amenities. Walking distance to fine dining and business districts. Perfect for corporate executives and investors.",
        externalLink: "https://carnelianrealty.com/properties/vi-executive-suite"
    },
    {
        id: 3,
        title: "Banana Island Signature Mansion",
        price: "₦1.2B",
        location: "Banana Island, Lagos",
        image: "assets/image2.png",
        description: "Palatial 7-bedroom mansion on exclusive Banana Island. Private infinity pool, spa, wine cellar, and entertainment suite. Gated compound with 24/7 security. The epitome of luxury living in Lagos.",
        externalLink: "https://carnelianrealty.com/properties/banana-island-mansion"
    },
    {
        id: 4,
        title: "Lekki Phase 1 Contemporary Residence",
        price: "₦520M",
        location: "Lekki Phase 1, Lagos",
        image: "assets/image1.jpg",
        description: "Modern 3-bedroom contemporary home with eco-friendly design. Solar power system, smart automation, and landscaped gardens. Close to international schools and shopping centers.",
        externalLink: "https://carnelianrealty.com/properties/lekki-contemporary"
    },
    {
        id: 5,
        title: "Abuja Presidential Estate Compound",
        price: "₦450M",
        location: "Abuja, Nigeria",
        image: "assets/image2.png",
        description: "Exclusive 6-bedroom family estate in Abuja's most secure community. Stone's throw from government district. Features guest quarters, home theatre, and Olympic-size pool.",
        externalLink: "https://carnelianrealty.com/properties/abuja-presidential"
    },
    {
        id: 6,
        title: "Ajah Oceanfront Resort Community",
        price: "₦380M",
        location: "Ajah, Lagos",
        image: "assets/image1.jpg",
        description: "Serene oceanfront property in premium resort community. 4-bedroom villa with beach access. Amenities include golf course, yacht club, and fine dining. Perfect investment opportunity.",
        externalLink: "https://carnelianrealty.com/properties/ajah-oceanfront"
    },
    {
        id: 7,
        title: "Ikoyi Waterfront Penthouse",
        price: "₦850M",
        location: "Ikoyi, Lagos",
        image: "assets/image1.jpg",
        description: "Stunning 5-bedroom luxury penthouse with panoramic views of Lagos lagoon. State-of-the-art smart home technology, private rooftop terrace, and direct access to private beach. Ideal for high-net-worth individuals seeking premium waterfront living.",
        externalLink: "https://carnelianrealty.com/properties/ikoyi-penthouse"
    },
    {
        id: 8,
        title: "Victoria Island Executive Suite",
        price: "₦650M",
        location: "Victoria Island, Lagos",
        image: "assets/image2.png",
        description: "Exquisite 4-bedroom executive apartment in the heart of VI. Premium finishes, climate control, and world-class amenities. Walking distance to fine dining and business districts. Perfect for corporate executives and investors.",
        externalLink: "https://carnelianrealty.com/properties/vi-executive-suite"
    },
    {
        id: 9,
        title: "Banana Island Signature Mansion",
        price: "₦1.2B",
        location: "Banana Island, Lagos",
        image: "assets/image2.png",
        description: "Palatial 7-bedroom mansion on exclusive Banana Island. Private infinity pool, spa, wine cellar, and entertainment suite. Gated compound with 24/7 security. The epitome of luxury living in Lagos.",
        externalLink: "https://carnelianrealty.com/properties/banana-island-mansion"
    },
    {
        id: 10,
        title: "Lekki Phase 1 Contemporary Residence",
        price: "₦520M",
        location: "Lekki Phase 1, Lagos",
        image: "assets/image1.jpg",
        description: "Modern 3-bedroom contemporary home with eco-friendly design. Solar power system, smart automation, and landscaped gardens. Close to international schools and shopping centers.",
        externalLink: "https://carnelianrealty.com/properties/lekki-contemporary"
    },
    {
        id: 11,
        title: "Abuja Presidential Estate Compound",
        price: "₦450M",
        location: "Abuja, Nigeria",
        image: "assets/image2.png",
        description: "Exclusive 6-bedroom family estate in Abuja's most secure community. Stone's throw from government district. Features guest quarters, home theatre, and Olympic-size pool.",
        externalLink: "https://carnelianrealty.com/properties/abuja-presidential"
    },
    {
        id: 12,
        title: "Ajah Oceanfront Resort Community",
        price: "₦380M",
        location: "Ajah, Lagos",
        image: "assets/image1.jpg",
        description: "Serene oceanfront property in premium resort community. 4-bedroom villa with beach access. Amenities include golf course, yacht club, and fine dining. Perfect investment opportunity.",
        externalLink: "https://carnelianrealty.com/properties/ajah-oceanfront"
    }
];

/**
 * Keep old propertiesData for backwards compatibility
 */
const propertiesData = properties;


/**
 * Gallery Data (Legacy - kept for other pages)
 * Array of gallery items for events and lifestyle content
 */
const galleryData = [
    {
        id: 1,
        caption: "Luxury Property Showcase 2024",
        src: "assets/image.avif",
        date: "2024-11-15"
    },
    {
        id: 2,
        caption: "Luxury Property Showcase 2024",
        src: "assets/image.avif",
        date: "2024-11-15"
    },
    {
        id: 3,
        caption: "Luxury Property Showcase 2024",
        src: "assets/image.avif",
        date: "2024-11-15"
    },
    {
        id: 4,
        caption: "Luxury Property Showcase 2024",
        src: "assets/image.avif",
        date: "2024-11-15"
    },
    {
        id: 5,
        caption: "Luxury Property Showcase 2024",
        src: "assets/image.avif",
        date: "2024-11-15"
    },
    {
        id: 6,
        caption: "Luxury Property Showcase 2024",
        src: "assets/image.avif",
        date: "2024-11-15"
    },
    {
        id: 6,
        caption: "Luxury Property Showcase 2024",
        src: "assets/image.avif",
        date: "2024-11-15"
    },
    {
        id: 7,
        caption: "Luxury Property Showcase 2024",
        src: "assets/image.avif",
        date: "2024-11-15"
    },
    
];

// ============================================================================
// 2. MODAL FUNCTIONS - WINDOW SCOPE FOR HTML ONCLICK EVENTS
// ============================================================================

/**
 * window.openModal(propertyId)
 * Opens the property modal and populates it with property data
 * Attached to window object so HTML onclick can access it
 */
window.openModal = function(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) {
        console.error(`Property with ID ${propertyId} not found`);
        return;
    }

    // Populate modal content dynamically
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalLocation = document.getElementById('modalLocation');
    const modalDescription = document.getElementById('modalDescription');
    const modalButton = document.getElementById('modalButton');

    if (modalImage) modalImage.src = property.image;
    if (modalImage) modalImage.alt = property.title;
    if (modalTitle) modalTitle.textContent = property.title;
    if (modalPrice) modalPrice.textContent = property.price;
    if (modalLocation) modalLocation.textContent = property.location;
    if (modalDescription) modalDescription.textContent = property.description;
    if (modalButton) {
        modalButton.href = property.externalLink;
        modalButton.target = '_blank';
    }

    // Show modal with active class
    const modalOverlay = document.getElementById('propertyModal');
    if (modalOverlay) {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

/**
 * window.closeModal()
 * Closes the property modal
 * Attached to window object so HTML onclick can access it
 */
window.closeModal = function() {
    const modalOverlay = document.getElementById('propertyModal');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

// Setup modal event listeners on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('propertyModal');
    
    if (modal) {
        // Close modal when clicking outside the content area
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                window.closeModal();
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.closeModal();
        }
    });
});

// ============================================================================
// 3. RENDER FUNCTIONS - PROPERTY CARDS
// ============================================================================

/**
 * renderProperties(data, container, limit)
 * Renders premium property cards with full-width click area
 * @param {Array} data - Array of property objects
 * @param {HTMLElement|string} container - DOM element or container ID
 * @param {Number|null} limit - Number of items to render (null = all)
 */
function renderProperties(data, container, limit) {
    // Handle container as either element or string ID
    const containerElement = typeof container === 'string' 
        ? document.getElementById(container) 
        : container;
    
    if (!containerElement) return;
    
    const itemsToRender = limit ? data.slice(0, limit) : data;
    
    containerElement.innerHTML = itemsToRender.map(property => `
        <div class="property-card" onclick="window.openModal(${property.id})" role="button" tabindex="0" 
             aria-label="View ${property.title}" onkeypress="if(event.key==='Enter') window.openModal(${property.id})">
            <img src="${property.image}" alt="${property.title}" class="property-card-image">
            <div class="property-card-info">
                <h3 class="property-card-title">${property.title}</h3>
                <p class="property-card-location">${property.location}</p>
                <p class="property-card-price">${property.price}</p>
            </div>
        </div>
    `).join('');
}

/**
 * renderCards(dataArray, containerId, limit)
 * Legacy function for thought/gallery cards
 * @param {Array} dataArray - Array of data objects
 * @param {String} containerId - ID of the target container element
 * @param {Number|null} limit - Number of items to display (null = all)
 */
function renderCards(dataArray, containerId, limit) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Determine which items to render
    const itemsToRender = limit ? dataArray.slice(0, limit) : dataArray;

    // Render based on data type
    if (containerId.includes('thought')) {
        renderThoughts(itemsToRender, container);
    } else if (containerId.includes('gallery')) {
        renderGallery(itemsToRender, container);
    }
}

/**
 * renderThoughts(data, container)
 * Generates and inserts thought cards into the container
 */
function renderThoughts(data, container) {
    container.innerHTML = data.map(thought => `
        <article class="card thought-card" data-id="${thought.id}" role="button" tabindex="0" aria-label="Open thought: ${thought.title}">
            <div class="card-header">
                <span class="card-category">${thought.category}</span>
                <span class="card-date">${formatDate(thought.date)}</span>
            </div>
            <h3 class="card-title">${thought.title}</h3>
            <p class="card-summary">${thought.summary}</p>
            <div class="card-footer">
                <span class="card-cta">Read Full Insight →</span>
            </div>
        </article>
    `).join('');

    // Attach click handlers
    attachCardListeners(container, thoughtsData, 'thought');
}

/**
 * renderGallery(data, container)
 * Generates and inserts gallery items into the container
 */
function renderGallery(data, container) {
    container.innerHTML = data.map(item => `
        <div class="gallery-item" data-id="${item.id}" role="button" tabindex="0" aria-label="View gallery item: ${item.caption}">
            <img src="${item.src}" alt="${item.caption}" class="gallery-image" loading="lazy">
            <div class="gallery-overlay">
                <p class="gallery-caption">${item.caption}</p>
                <p class="gallery-date">${formatDate(item.date)}</p>
            </div>
        </div>
    `).join('');

    // Attach click handlers
    attachCardListeners(container, galleryData, 'gallery');
}

/**
 * attachCardListeners(container, dataArray, type)
 * Adds click and keyboard event listeners to cards
 */
function attachCardListeners(container, dataArray, type) {
    const cards = container.querySelectorAll('[data-id]');

    cards.forEach(card => {
        const cardId = parseInt(card.dataset.id);
        const data = dataArray.find(item => item.id === cardId);

        // Click event
        card.addEventListener('click', () => {
            if (type === 'thought') {
                openThoughtModal(data);
            } else if (type === 'gallery') {
                openGalleryModal(data);
            }
        });

        // Keyboard event (Enter/Space)
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

// ============================================================================
// 3. MODAL FUNCTIONS
// ============================================================================

/**
 * openThoughtModal(thought)
 * Opens a modal with the full thought content
 */
function openThoughtModal(thought) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content modal-thought">
            <button class="modal-close" aria-label="Close modal">✕</button>
            <div class="modal-header">
                <span class="modal-category">${thought.category}</span>
                <span class="modal-date">${formatDate(thought.date)}</span>
            </div>
            <h2 class="modal-title">${thought.title}</h2>
            <div class="modal-body">
                <p>${thought.fullContent}</p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.focus();

    // Close on button click
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });

    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Close on Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

/**
 * openGalleryModal(galleryItem)
 * Opens a modal with the full gallery image
 */
function openGalleryModal(galleryItem) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content modal-gallery">
           
            <img src="${galleryItem.src}" alt="${galleryItem.caption}" class="modal-image">
            <div class="modal-gallery-info">
            <p class="modal-gallery-caption">${galleryItem.caption}</p>
            <p class="modal-gallery-date">${formatDate(galleryItem.date)}</p>
            </div>
             <button class="modal-close close-gallery" aria-label="Close modal">✕</button>
        </div>
    `;

    document.body.appendChild(modal);
    modal.focus();

    // Close on button click
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });

    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Close on Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// ============================================================================
// 4. ROUTER LOGIC (Critical)
// ============================================================================

/**
 * Initialize on page load
 * Check which grids exist and populate them accordingly
 */
document.addEventListener('DOMContentLoaded', () => {
    // Featured properties grid (all 6 properties)
    if (document.getElementById('featured-properties-grid')) {
        renderProperties(properties, document.getElementById('featured-properties-grid'), 3);
    }

    if (document.getElementById('all-featured-properties-grid')) {
        renderProperties(properties, document.getElementById('all-featured-properties-grid'), null);
    }

    // Home page - Thoughts preview (3 items)
    if (document.getElementById('home-thoughts-grid')) {
        renderCards(thoughtsData, 'home-thoughts-grid', 3);
    }

    // Thoughts page - All thoughts (12 items)
    if (document.getElementById('all-thoughts-grid')) {
        renderCards(thoughtsData, 'all-thoughts-grid', null);
    }

    // Home page - Gallery preview (6 items)
    if (document.getElementById('home-gallery-grid')) {
        renderCards(galleryData, 'home-gallery-grid', 6);
    }

    // Gallery page - All gallery (12 items)
    if (document.getElementById('all-gallery-grid')) {
        renderCards(galleryData, 'all-gallery-grid', null);
    }

    // Initialize mobile menu toggle
    initializeMobileMenu();
});

// ============================================================================
// 5. UTILITY FUNCTIONS
// ============================================================================

/**
 * formatDate(dateString)
 * Converts date string to readable format
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

/**
 * initializeMobileMenu()
 * Handles mobile navigation toggle
 */
function initializeMobileMenu() {
    // Add mobile menu button if needed
    const nav = document.querySelector('.site-nav');
    if (!nav) return;

    // Create mobile menu toggle (if screen is small)
    if (window.innerWidth < 768) {
        // Mobile logic can be added here if needed
    }

    // Handle responsive behavior
    window.addEventListener('resize', () => {
        // Additional responsive logic can go here
    });
}

  
/* =========================================
   NUCLEAR OPTION CONTACT HANDLER
   ========================================= */
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
        // 1. STOP REDIRECT IMMEDIATELY
        event.preventDefault(); 
        event.stopPropagation();

        const allInputs = contactForm.querySelectorAll('input, textarea, button');
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;

        // 2. Lock Form
        allInputs.forEach(input => input.disabled = true);
        submitBtn.innerText = "SENDING...";

        // 3. FORCE THE KEY INTO THE DATA
        const formData = new FormData(contactForm);
        formData.append("access_key", "71f51bec-4efb-41f8-a256-52e9aa010032"); // <--- PASTE KEY HERE

        try {
            const response = await fetch("https://api.web3forms.com/submit", { 
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                formStatus.innerHTML = '<span class="status-icon">✓</span> Message received. We will be in touch.';
                formStatus.className = "status-message active";
                contactForm.reset(); 
            } else {
                throw new Error(result.message || "Submission failed.");
            }

        } catch (error) {
            console.error(error); // See exact error in console if it fails
            formStatus.innerHTML = '<span class="status-icon">✕</span> Error: ' + error.message;
            formStatus.className = "status-message active error";
        } finally {
            // 4. Unlock Form
            allInputs.forEach(input => input.disabled = false);
            submitBtn.innerText = originalBtnText;

            setTimeout(() => {
                formStatus.classList.remove('active');
            }, 5000);
        }
    });
}

// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger = document.querySelector('.hamburger');
//     const navLinks = document.querySelector('.nav-links');

//     // 1. Toggle Menu on Hamburger Click
//     if (hamburger && navLinks) {
//         hamburger.addEventListener('click', () => {
//             // This toggles the 'active' class defined in your CSS
//             navLinks.classList.toggle('active');
            
//             // Optional: Animate the hamburger icon (turn X) if you add CSS for it later
//             hamburger.classList.toggle('open');
//         });
//     }

//     // 2. Auto-Close Menu When a Link is Clicked (Crucial for Mobile UX)
//     document.querySelectorAll('.nav-links a').forEach(link => {
//         link.addEventListener('click', () => {
//             navLinks.classList.remove('active');
//             if (hamburger) hamburger.classList.remove('open');
//         });
//     });
// });



/* =========================================
   MOBILE MENU LOGIC (Animation + Click Outside)
   ========================================= */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    // 1. Toggle Menu & Animation on Click
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Stop click from bubbling to document immediately
        hamburger.classList.toggle('active'); // Triggers the "X" CSS
        navLinks.classList.toggle('active');  // Shows the Menu
    });

    // 2. Close when clicking a Link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 3. Close when Clicking Outside
    document.addEventListener('click', (e) => {
        // If click is NOT on the menu AND NOT on the hamburger icon
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active'); // Turn X back to Bars
            navLinks.classList.remove('active');  // Hide Menu
        }
    });
}


// ================================================================
// 10. TIMELINE ANIMATION (SEQUENTIAL)
// ================================================================

const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Stagger animation for timeline items
            const index = Array.from(timelineItems).indexOf(entry.target);
            entry.target.style.animationDelay = `${index * 0.1}s`;
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
// End of script.js
