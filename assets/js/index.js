// Portfolio data
const portfolioData = [
  {
    title: "Master Thesis",
    description: "Remote Sensing Time Series as Covariance Matrices for Crop Classification",
    image: "assets/img/portfolio/matrix_make.png",
    tag: "Remote Sensing",
    link: "e_portfolio/portfolio_items/thesis_portfolio.html"
  },
  {
    title: "Collection of StoryMaps",
    description: "Explore. Discover. Share. With the Collection of my ArcGIS StoryMaps",
    image: "assets/img/portfolio/ArcGIS-StoryMaps.jpg",
    tag: "GIS Mapping",
    link: "https://arcg.is/1mbGjS1"
  },
  {
    title: "Kelp Forest Segmentation",
    description: "Semantic Segmentation using satellite imagery to map kelp forests",
    image: "assets/img/portfolio/kelp_benefits.jpg",
    tag: "Deep Learning",
    link: "e_portfolio/portfolio_items/kelp_segmentation_portfolio.html"
  },
  {
    title: "Landcover Classification App",
    description: "Streamlit app for landcover classification using geemap library",
    image: "assets/img/portfolio/geemap.jpg",
    tag: "Web App",
    link: "e_portfolio/portfolio_items/streamlit_app_portfolio.html"
  },
  {
    title: "Flood Mapping with SAR",
    description: "Flood estimation using Sentinel-1 SAR data in Google Earth Engine",
    image: "assets/img/portfolio/SAR.png",
    tag: "SAR Analysis",
    link: "e_portfolio/portfolio_items/flood_mapping_portfolio.html"
  },
  {
    title: "Wildfire Risk Monitoring",
    description: "Ctrl+F (Fire) - Climate data visualization for wildfire risk monitoring",
    image: "assets/img/portfolio/ctrl+f.png",
    tag: "Climate Analytics",
    link: "e_portfolio/portfolio_items/ctrl_f_portfolio.html"
  }
];

// Populate Swiper slides
function initPortfolioSwiper() {
  const swiperWrapper = document.getElementById('portfolio-swiper');
  
  portfolioData.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <a href="${item.link}" style="text-decoration: none; width: 100%;">
        <div class="portfolio-card">
          <div class="portfolio-img">
            <img src="${item.image}" alt="${item.title}">
          </div>
          <div class="portfolio-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span class="portfolio-tag">${item.tag}</span>
          </div>
        </div>
      </a>
    `;
    swiperWrapper.appendChild(slide);
  });

  // Initialize Swiper
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 1,
      }
    }
  });
}

// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll indicator click handler
function setupScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.style.cursor = 'pointer';
    
    // Click handler
    const handleScrollClick = function(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      const portfolioSection = document.querySelector('#portfolio-section');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    scrollIndicator.addEventListener('click', handleScrollClick);
    scrollIndicator.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        handleScrollClick(e);
      }
    });
  }
}

// Setup scroll indicator immediately and on load
setupScrollIndicator();
document.addEventListener('DOMContentLoaded', function() {
  setupScrollIndicator();
  initPortfolioSwiper();
});
