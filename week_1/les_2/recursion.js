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
// 2. MET RECURSIE