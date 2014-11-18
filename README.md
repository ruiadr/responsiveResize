responsiveResize
================

Permet de réaliser différents traitements après un temps donné, lors du redimensionnement de la fenêtre du navigateur.
Les traitements ne sont donc pas réalisés en continue, ce qui évite de une sur-sollicitation, et un ralentissement général.

## Utilisation

    $(window).responsiveResize ({
        callback: function (resizing) {
            if (!resizing) {
                // Code...
            }
        } // callback ();
    });
