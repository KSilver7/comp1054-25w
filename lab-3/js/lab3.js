const tabs = document.querySelectorAll('.tabs ul[role="tablist"] li[role="tab"] a');
const tabPanels = document.querySelectorAll('.tabs div[role="tabpanel"]');

tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        const targetId = tab.getAttribute('href').substring(1); // Get the target panel ID

        // Remove 'active' class from all tabs and panels
        tabs.forEach(tab => tab.parentElement.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // Add 'active' class to the clicked tab and its panel
        tab.parentElement.classList.add('active');
        document.getElementById(targetId).classList.add('active');
    });
});

// Set the first tab as active by default
if (tabs.length > 0 && tabPanels.length > 0) {
    tabs[0].parentElement.classList.add('active');
    tabPanels[0].classList.add('active');
}


// from css tricks https://css-tricks.com/tabs-its-complicated/
// with help from Gemini