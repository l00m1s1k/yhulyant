// main.js

document.addEventListener("DOMContentLoaded", init);

function init() {
    const mainDiv = document.getElementById('main');

    // Create header, main, footer elements
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    // Set heights
    header.style.height = '100px';
    main.style.height = '500px';
    footer.style.height = '100px';

    // Create leftPanel, content, rightPanel inside main
    const leftPanel = document.createElement('div');
    const content = document.createElement('div');
    const rightPanel = document.createElement('div');

    leftPanel.id = 'leftPanel';
    content.id = 'content';
    rightPanel.id = 'rightPanel';

    leftPanel.style.width = '33%';
    content.style.width = '34%';
    rightPanel.style.width = '33%';

    leftPanel.classList.add('panel');
    content.classList.add('panel');
    rightPanel.classList.add('panel');

    main.appendChild(leftPanel);
    main.appendChild(content);
    main.appendChild(rightPanel);

    // Add header, main, footer to main div
    mainDiv.appendChild(header);
    mainDiv.appendChild(main);
    mainDiv.appendChild(footer);

    // Add buttons to header
    const buttons = ['User Rating', 'News', 'Contacts', 'About'];
    buttons.forEach(buttonName => {
        const button = document.createElement('button');
        button.innerText = buttonName;
        button.addEventListener('click', () => {
            content.innerHTML = `<h1>${buttonName}</h1>`;
        });
        header.appendChild(button);
    });

    // Add loaders
    [leftPanel, content, rightPanel].forEach(panel => {
        const loader = document.createElement('div');
        loader.classList.add('loader');
        panel.appendChild(loader);
    });

    // Add footer content
    const currentUsers = document.createElement('div');
    currentUsers.id = 'currentUsers';
    currentUsers.innerText = 'Current users: 0';
    footer.appendChild(currentUsers);

    const newUsers = document.createElement('div');
    newUsers.id = 'newUsers';
    newUsers.innerHTML = '<h3>New users</h3><ul></ul>';
    footer.appendChild(newUsers);

    // Hide loader after 1 second and show No users message and Get Users button in content
    setTimeout(() => {
        content.querySelector('.loader').style.display = 'none';
        content.innerHTML = '<p>No users</p><button id="getUsers">Get Users</button>';
        document.getElementById('getUsers').addEventListener('click', fetchAndDisplayUsers);
    }, 1000);

    // Additional setup for leftPanel and rightPanel after 1 second
    setTimeout(() => {
        setupLeftPanel();
        setupRightPanel();
    }, 1000);
}

function fetchAndDisplayUsers() {
    fetchUsers().then(users => {
        const content = document.getElementById('content');
        content.innerHTML = '';

        const table = document.createElement('table');
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = '<th>Last Name</th><th>First Name</th><th>Score</th>';
        table.appendChild(headerRow);

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${user.lastname}</td><td>${user.firstname}</td><td>${user.score}</td>`;
            table.appendChild(row);
        });

        content.appendChild(table);
    });
}

function setupLeftPanel() {
    const leftPanel = document.getElementById('leftPanel');
    const input = document.createElement('input');
    const searchButton = document.createElement('button');
    searchButton.innerText = 'Search';
    searchButton.addEventListener('click', searchTable);

    leftPanel.appendChild(input);
    leftPanel.appendChild(searchButton);
}

function searchTable() {
    const searchTerm = document.querySelector('#leftPanel input').value.toLowerCase();
    const rows = document.querySelectorAll('#content table tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length) {
            const text = Array.from(cells).map(cell => cell.innerText.toLowerCase()).join(' ');
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        }
    });
}

function setupRightPanel() {
    const rightPanel = document.getElementById('rightPanel');
    fetchUsers().then(users => {
        const totalScore = users.reduce((sum, user) => sum + user.score, 0);
        const scoreDisplay = document.createElement('div');
        scoreDisplay.innerText = `Total score: ${totalScore}`;
        rightPanel.appendChild(scoreDisplay);

        const editTableCheckbox = document.createElement('input');
        editTableCheckbox.type = 'checkbox';
        const editTableLabel = document.createElement('label');
        editTableLabel.innerText = 'Edit table';
        editTableCheckbox.addEventListener('change', toggleEditTable);

        rightPanel.appendChild(editTableCheckbox);
        rightPanel.appendChild(editTableLabel);
    });
}

function toggleEditTable(event) {
    const isChecked = event.target.checked;
    const rows = document.querySelectorAll('#content table tr');

    rows.forEach((row, index) => {
        if (index > 0) { // Skip header row
            if (isChecked) {
                const deleteCell = document.createElement('td');
                const deleteButton = document.createElement('button');
                deleteButton.innerText = 'Delete';
                deleteButton.addEventListener('click', () => row.remove());
                deleteCell.appendChild(deleteButton);
                row.appendChild(deleteCell);
            } else {
                row.removeChild(row.lastChild);
            }
        }
    });
}
