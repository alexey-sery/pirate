$(".menu").hide();

let menu = false;

$("#open").click(function () {
    menu = !menu;

    if (menu) {
        $(".menu").removeClass("show").fadeIn(0).addClass("show");
        $("#open").html(`
            <svg class="close-icon" width="21" height="29" viewBox="0 0 21 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.52 24.824L1.224 23.528L9.096 15.608L1.224 7.688L2.52 6.392L10.392 14.312L18.216 6.392L19.512 7.688L11.64 15.608L19.512 23.528L18.216 24.824L10.392 16.952L2.52 24.824Z" fill="white"/>
            </svg>
        `);
    } else {
        $(".menu").removeClass("show").fadeOut(0);
        $("#open").html(`
            <svg class="open-icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H20V2H0V0Z" fill="white" />
                <path d="M0 7H20V9H0V7Z" fill="white" />
                <path d="M0 14H20V16H0V14Z" fill="white" />
            </svg>
        `);
    }
});