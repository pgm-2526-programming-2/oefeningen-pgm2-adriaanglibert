// Oproepen van zijn eigen functie.

let amountOfMessages = 0;

function showMessage() {
    console.log('Hoi!');

    amountOfMessages = amountOfMessages + 1;

    // if (amountOfMessages === 10) return;
    if (amountOfMessages === 10) {
        return;
    }

    showMessage();
}

showMessage();

// Use cases? Maken van een menu met submenus, en die hebben weer submenus, ... Tree -> Lijst

const menu = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: "Explore",
        path: '/explore',
        subpages: [
            {
                name: "Awards",
                path: '/awards',
                subpages: [
                    {
                        name: "Nominees",
                        path: '/nominees'
                    },
                    {
                        name: "Sites of the day",
                        path: '/sotd'
                    }
                ]
            },
            {
                name: "Blog",
                path: 'blog'
            }
        ]
    }
]

// Oefening:
// Log al de pagina's en hun path in de console.
// 1. ZONDER RECURSIE
function showItem(item) {
    console.log('Name: ', item.name, '-- ', item.path);
}

function showMenuWithoutRecursion(list) {
    for (const item of list) {
        showItem(item);

        if (item.subpages) {
            for (const subitem of item.subpages) {
                showItem(subitem);

                if (subitem.subpages) {
                    for (const subsubitem of subitem.subpages) {
                        showItem(subsubitem);
                    }
                }
            }
        }
    }
}

// showMenuWithoutRecursion(menu);

// 2. MET RECURSIE
function showMenuWithRecursion(list) {
    for (const item of list) {
        showItem(item);

        if (item.subpages) {
            showMenuWithRecursion(item.subpages);
        }
    }
}

showMenuWithRecursion(menu);