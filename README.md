Sir Trevor editor additional formatters
================

### How to use additional formatters


Don't forget about [sir-trevor](http://madebymany.github.io/sir-trevor-js/) editor first! ;)

Following scripts and styles are required on your page to use formatters:
```html
<!-- Insert special charachters formatter (Require jquery ui with dialog plugin) -->
<script src="http://code.jquery.com/ui/jquery-ui-git.js"></script>
<link rel="stylesheet" href="http://code.jquery.com/ui/jquery-ui-git.css" media="all">

<link rel="stylesheet" href="./special-char.css" media="all">
<script src="./special-char.js"></script>

<!-- Strike through formatter -->
<link rel="stylesheet" href="./strike-through.css" media="all">
<script src="./strike-through.js"></script>

<!-- Underline formatter -->
<link rel="stylesheet" href="./underline.css" media="all">
<script src="./underline.js"></script>

<!-- Justify formatters -->
<link rel="stylesheet" href="./justify.css" media="all">
<script src="./justify.js"></script>

<!-- Subscript formatter -->
<link rel="stylesheet" href="./subscript.css" media="all">
<script src="./subscript.js"></script>

<!-- Superscript formatter -->
<link rel="stylesheet" href="./superscript.css" media="all">
<script src="./superscript.js"></script>

<!-- Clear formatter -->
<link rel="stylesheet" href="./clear-format.css" media="all">
<script src="./clear-format.js"></script>
```

Than just add formatter to sir-trevor formattres.

Correct way with jquery noConflict():
```javascript
(function($){
    $(function(){
        // Insert special charachters formatter
        SirTrevor.Formatters.SpecialChars   = new SpecialChars();

        // Strike through formatter
        SirTrevor.Formatters.StrikeThrough  = new StrikeThrough();

        // Underline formatter
        SirTrevor.Formatters.Underline      = new Underline();

        // Justify formatters
        SirTrevor.Formatters.JustifyLeft    = new JustifyLeft();
        SirTrevor.Formatters.JustifyCenter  = new JustifyCenter();
        SirTrevor.Formatters.JustifyRight   = new JustifyRight();

        // Subscript formatter
        SirTrevor.Formatters.Subscript      = new Subscript();

        // Superscript formatter
        SirTrevor.Formatters.Superscript    = new Superscript();

        // Clear formatter
        SirTrevor.Formatters.ClearFormat    = new ClearFormat();
    })
})(jQuery.noConflict());
```

So this way you can complete base Sir Trefor formatter set! Try, report about bugs and issues, enjoy! =)
