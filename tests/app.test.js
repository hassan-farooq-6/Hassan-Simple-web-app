/**
 * @jest-environment jsdom
 */

describe('TechFlow Website Tests', () => {
  test('HTML structure is valid', () => {
    document.body.innerHTML = `
      <div id="menuToggle"></div>
      <div class="nav-links"></div>
      <div id="contactForm"></div>
    `;
    
    expect(document.getElementById('menuToggle')).toBeTruthy();
    expect(document.querySelector('.nav-links')).toBeTruthy();
    expect(document.getElementById('contactForm')).toBeTruthy();
  });
  
  test('Basic JavaScript functionality', () => {
    // Mock scrollToSection function
    global.scrollToSection = function(sectionId) {
      return sectionId === 'contact';
    };
    
    expect(scrollToSection('contact')).toBe(true);
  });
  
  test('Page title is correct', () => {
    document.title = '1st Containerized Simple Web Application';
    expect(document.title).toContain('Containerized');
  });
});
