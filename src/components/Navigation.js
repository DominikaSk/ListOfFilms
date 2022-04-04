const Navigation = () => {
    const nav = $(document.createElement('nav'));
    nav.attr('class', 'navbar navbar-expand-lg navbar-light bg-light');
    const div = $(document.createElement('div'));

    div.attr({
        class: 'container-fluid',
        id: 'example-id'
    });
    nav.append(div);

    return nav;
}

export default Navigation;