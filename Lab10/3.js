document.addEventListener('DOMContentLoaded', function () {
    const isFirstTab = sessionStorage.getItem('isFirstTab') === 'true';

    if (isFirstTab) {
        document.title = 'Головна вкладка';
    } else {
        document.title = 'Другорядна вкладка';
    }

    window.addEventListener('beforeunload', function () {
        if (isFirstTab) {
            sessionStorage.removeItem('isFirstTab');
        }
    });

    if (!isFirstTab) {
        sessionStorage.setItem('isFirstTab', 'false');
    }
});
