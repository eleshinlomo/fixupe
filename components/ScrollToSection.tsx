export const ScrollToSection = (section: string) => {
  const element = document.getElementById(section);
  
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    // Update URL hash without jumping
    window.history.pushState(null, '', `#${section}`);
  }
};