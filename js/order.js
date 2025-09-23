function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    tabContents.forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
    });

    document.querySelector(`#${tabId}`).classList.add('active');
    document.querySelector(`#${tabId}`).style.display = 'block';
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// Initial display
document.querySelector('.tab-content#active-orders').style.display = 'block';
document.querySelector('.tab-content#active-orders').classList.add('active');
