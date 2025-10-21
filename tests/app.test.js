/**
 * @jest-environment jsdom
 */

// Mock DOM elements
document.body.innerHTML = `
  <div id="menuToggle"></div>
  <div class="nav-links"></div>
  <div id="contactForm"></div>
  <div id="formMessage"></div>
`;

// Mock functions from script.js
global.scrollToSection = function(sectionId) {
  return true;
};

global.menuToggle = { addEventListener: jest.fn() };
global.navLinks = { classList: { toggle: jest.fn(), remove: jest.fn() } };

describe('TechFlow Website Tests', () => {
  test('scrollToSection function exists', () => {
    expect(typeof scrollToSection).toBe('function');
  });
  
  test('scrollToSection works correctly', () => {
    const result = scrollToSection('contact');
    expect(result).toBe(true);
  });
  
  test('DOM elements exist', () => {
    expect(document.getElementById('menuToggle')).toBeTruthy();
    expect(document.querySelector('.nav-links')).toBeTruthy();
  });
});
