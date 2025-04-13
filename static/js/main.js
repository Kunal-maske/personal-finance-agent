/**
 * FinWise Personal Finance Assistant - Main JavaScript
 */

// SVG Icons for use throughout the app
const ICONS = {
    chartLine: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M2 12H4V21H2V12ZM5 14H7V21H5V14ZM16 8H18V21H16V8ZM19 5H21V21H19V5ZM9 9H14.93L9.54 13.97L8.55 12.83C8.4 12.66 8.18 12.57 7.95 12.59C7.73 12.61 7.52 12.74 7.39 12.94L5 16.17V21H14V19H7V17.74L8.75 15.36L10.06 16.86C10.2 17.03 10.37 17.11 10.59 17.11C10.77 17.11 11 17.04 11.13 16.86L17.71 10.81L17.7 10.81C17.94 10.61 18.07 10.3 18.03 10C17.97 9.69 17.81 9.23 17.37 9.09C17.24 9.05 17.12 9 17 9H9V9Z"/></svg>`,
    calculator: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"/><path d="M6.25 7.72H11.25V9.22H6.25V7.72Z"/><path d="M13 15H17.75V16.5H13V15Z"/><path d="M13 12.5H17.75V14H13V12.5Z"/><path d="M13 10H17.75V11.5H13V10Z"/><path d="M6.25 10H11.25V11.5H6.25V10Z"/><path d="M6.25 15H7.75V16.5H6.25V15Z"/><path d="M8.5 15H10V16.5H8.5V15Z"/><path d="M6.25 12.5H7.75V14H6.25V12.5Z"/><path d="M8.5 12.5H10V14H8.5V12.5Z"/></svg>`,
    search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"/></svg>`,
    magic: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M7.5 5.6L10 7L8.6 4.5L10 2L7.5 3.4L5 2L6.4 4.5L5 7L7.5 5.6ZM19.5 15.4L17 14L18.4 16.5L17 19L19.5 17.6L22 19L20.6 16.5L22 14L19.5 15.4ZM22 2L20.6 4.5L22 7L19.5 5.6L17 7L18.4 4.5L17 2L19.5 3.4L22 2ZM13.34 12.78L15.78 10.34L13.66 8.22L11.22 10.66L13.34 12.78ZM14.37 7.29L16.71 9.63C17.1 10.02 17.1 10.65 16.71 11.04L5.04 22.71C4.65 23.1 4.02 23.1 3.63 22.71L1.29 20.37C0.9 19.98 0.9 19.35 1.29 18.96L12.96 7.29C13.35 6.9 13.98 6.9 14.37 7.29Z"/></svg>`,
    bullseye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"/></svg>`,
    coins: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.31 11.14C10.54 10.69 9.97 10.2 9.97 9.47C9.97 8.63 10.76 8.04 12.07 8.04C13.45 8.04 13.97 8.7 14.01 9.68H15.72C15.67 8.34 14.85 7.11 13.23 6.71V5H10.9V6.69C9.39 7.01 8.18 7.99 8.18 9.5C8.18 11.29 9.67 12.19 11.84 12.71C13.79 13.17 14.18 13.86 14.18 14.58C14.18 15.11 13.79 15.97 12.08 15.97C10.48 15.97 9.85 15.25 9.76 14.33H8.04C8.14 15.93 9.4 16.96 10.9 17.26V19H13.24V17.3C14.76 17.02 15.98 16.13 15.98 14.56C15.97 12.36 14.07 11.6 12.31 11.14Z"/></svg>`,
    shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"/></svg>`,
    book: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5ZM21 18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5Z"/></svg>`,
    graduation: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z"/></svg>`,
    lightbulb: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21ZM12 2C8.14 2 5 5.14 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.14 15.86 2 12 2ZM14.85 13.1L14 13.7V16H10V13.7L9.15 13.1C7.8 12.16 7 10.63 7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 10.63 16.2 12.16 14.85 13.1Z"/></svg>`
};

// DOM elements
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const financeForm = document.getElementById('finance-form');
const researchForm = document.getElementById('research-form');
const planResult = document.getElementById('plan-result');
const researchResult = document.getElementById('research-result');
const planLoader = document.getElementById('plan-loader');
const researchLoader = document.getElementById('research-loader');

/**
 * Initialize the application
 */
function initApp() {
    // Insert SVG icons
    insertIcons();
    
    // Set up event listeners
    setupTabSwitching();
    setupFormSubmissions();
}

/**
 * Insert SVG icons into the HTML
 */
function insertIcons() {
    document.querySelectorAll('[data-icon]').forEach(element => {
        const iconName = element.getAttribute('data-icon');
        if (ICONS[iconName]) {
            element.innerHTML = ICONS[iconName];
        }
    });
}

/**
 * Set up tab switching functionality
 */
function setupTabSwitching() {
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to current tab and content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

/**
 * Set up form submission handlers
 */
function setupFormSubmissions() {
    // Financial Plan Form
    financeForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const financialGoals = document.getElementById('financial-goals').value;
        const currentSituation = document.getElementById('current-situation').value;
        
        await submitForm('/generate_plan', {
            financial_goals: financialGoals,
            current_situation: currentSituation
        }, planResult, planLoader, 'plan');
    });
    
    // Research Form
    researchForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const query = document.getElementById('query').value;
        
        await submitForm('/research', {
            query: query
        }, researchResult, researchLoader, 'research');
    });
}

/**
 * Submit a form to the server
 * @param {string} endpoint - API endpoint
 * @param {object} data - Form data
 * @param {HTMLElement} resultElement - Element to display results
 * @param {HTMLElement} loaderElement - Loading indicator element
 * @param {string} resultType - Type of result ('plan' or 'research')
 */
async function submitForm(endpoint, data, resultElement, loaderElement, resultType) {
    // Show loading indicator
    loaderElement.style.display = 'inline-block';
    resultElement.style.display = 'none';
    
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data)
        });
        
        const responseData = await response.json();
        
        if (response.ok) {
            // Format the response
            const formattedResponse = formatResponse(responseData[resultType]);
            resultElement.innerHTML = formattedResponse;
            resultElement.style.display = 'block';
            
            // Scroll to results with smooth animation
            resultElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            showError(resultElement, responseData.error || 'Something went wrong');
        }
    } catch (error) {
        showError(resultElement, error.message);
    } finally {
        // Hide loading indicator
        loaderElement.style.display = 'none';
    }
}

/**
 * Format API response with markdown-like styling
 * @param {string} text - Raw text from API
 * @returns {string} - Formatted HTML
 */
function formatResponse(text) {
    if (!text) return '';
    
    // Add a title to the response based on context
    let html = '<div class="result-content">';
    
    // Replace headings (e.g., # Heading)
    text = text.replace(/^# (.*?)$/gm, '<h2>$1</h2>');
    text = text.replace(/^## (.*?)$/gm, '<h3>$1</h3>');
    text = text.replace(/^### (.*?)$/gm, '<h4>$1</h4>');
    
    // Process lists
    let inList = false;
    
    // Replace bullet points and handle lists properly
    const lines = text.split('\n');
    let processedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const nextLine = i < lines.length - 1 ? lines[i + 1] : '';
        
        // Check for bullet points
        if (line.match(/^\s*[\*\-]\s+/)) {
            const listItem = line.replace(/^\s*[\*\-]\s+/, '');
            
            if (!inList) {
                processedLines.push('<ul>');
                inList = true;
            }
            
            processedLines.push(`<li>${listItem}</li>`);
            
            // Check if next line is not a list item
            if (!nextLine.match(/^\s*[\*\-]\s+/) && nextLine.trim() !== '') {
                processedLines.push('</ul>');
                inList = false;
            }
        } else {
            if (inList && line.trim() !== '') {
                processedLines.push('</ul>');
                inList = false;
            }
            
            if (line.trim() !== '') {
                // Wrap non-empty, non-heading lines in paragraphs
                if (!line.match(/^<h[2-4]>/)) {
                    processedLines.push(`<p>${line}</p>`);
                } else {
                    processedLines.push(line);
                }
            } else if (processedLines.length > 0 && !processedLines[processedLines.length - 1].match(/^<h[2-4]>/)) {
                // Add a proper spacing between paragraphs
                processedLines.push('');
            }
        }
    }
    
    // Close any open list
    if (inList) {
        processedLines.push('</ul>');
    }
    
    text = processedLines.join('\n');
    
    // Bold text
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italics
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    html += text + '</div>';
    return html;
}

/**
 * Show error message in the result element
 * @param {HTMLElement} element - Element to show error in
 * @param {string} message - Error message
 */
function showError(element, message) {
    element.innerHTML = `<div class="error-message">Error: ${message}</div>`;
    element.style.display = 'block';
}

// Initialize the app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);