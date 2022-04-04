import Navigation from '../components/Navigation.js';
import FilmsForm from '../components/FilmsForm.js';

const MainMenu = () => {
    const mainMenu = $(document.createElement('div'));
    const nav = Navigation();
    const films = FilmsForm();

    const p = $(document.createElement('p'));
    p.html('Dodaj film, który chcesz obejrzeć. Aby zaznaczyć pozycję, klijnij na nią. Aby usunąć - najedź kursorem, a następnie kliknij przycisk "X".');

    const button = $(document.createElement('button'));
    button.html('Wyloguj');
    button.attr({
        type: 'button',
        class: 'btn btn-outline-dark btn-sm'
    });
    button.click(logOut);

    nav.append(button);
    mainMenu.append([nav, p, films]);

    return mainMenu;
};

function logOut() {
    window.location.href = "index.html";
}

export default MainMenu;