responsiveResize
================

Permet de réaliser différents traitements après un temps donné, lors du redimensionnement de la fenêtre du navigateur.
Les traitements ne sont donc pas réalisés en continue, ce qui évite de une sur-sollicitation, et un ralentissement général.

**Dans cette documentation**

1. [Utilisation](#utilisation)
2. [Options](#options)

## Utilisation

```javascript
$(window).responsiveResize ({
    callback: function (resizing) {
        if (!resizing) {
            // Code...
        }
    } // callback ();
});
```
    
## Options

```javascript
$(window).responsiveResize ({
	  resizingDelay: 500, // Délai d'attente avant de réaliser les traitements.
	  callback: function (resizing) {} // Fonction appelée au redimensionnement, resizing vaut false lorsqu'il est terminé, true sinon.
});
```
