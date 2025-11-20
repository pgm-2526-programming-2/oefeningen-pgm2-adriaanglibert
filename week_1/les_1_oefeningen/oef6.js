function mainLogic(func) {
    func();
}

function myCallback() {
    console.log('Dit is de callback-functie.')
}

mainLogic(myCallback); // Dit is de callback-functie.
