Sir Trevor editor additional formatters
================

### How to use additional formatters


Don't forget about [sir-trevor](http://madebymany.github.io/sir-trevor-js/) editor first! ;)

Following scripts and styles are required on your page to use formatters:
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title></title>
        <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}" />

        <!-- Styles for st -->
        <link rel="stylesheet" href="sir-trevor-js-master/sir-trevor-icons.css" media="all">
        <link rel="stylesheet" href="sir-trevor-js-master/sir-trevor.css" media="all">

        <!-- jQuery -->
        <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <!-- Sir Trevor -->
        <script type="text/javascript" src="sir-trevor-js-master/sir-trevor.js"></script>

        <!-- Underscore -->
        <script type="text/javascript" src="sir-trevor-js-master/website/bower_components/underscore/underscore-min.js"></script>

        <!-- Eventable -->
        <script type="text/javascript" src="sir-trevor-js-master/website/bower_components/Eventable/eventable.js"></script>

    <!-- FORMATTERS -->
        <!-- Insert special charachters formatter (Require jquery ui with dialog plugin) -->
        <script src="http://code.jquery.com/ui/jquery-ui-git.js"></script>
        <link rel="stylesheet" href="http://code.jquery.com/ui/jquery-ui-git.css" media="all">

        <link rel="stylesheet" href="sir-trevor-formatters-master/special-char.css" media="all">
        <script src="sir-trevor-formatters-master/special-char.js"></script>

        <!-- Strike through formatter -->
        <link rel="stylesheet" href="sir-trevor-formatters-master/strike-through.css" media="all">
        <script src="sir-trevor-formatters-master/strike-through.js"></script>

        <!-- Underline formatter -->
        <link rel="stylesheet" href="sir-trevor-formatters-master/underline.css" media="all">
        <script src="sir-trevor-formatters-master/underline.js"></script>

        <!-- Justify formatters -->
        <link rel="stylesheet" href="sir-trevor-formatters-master/justify.css" media="all">
        <script src="sir-trevor-formatters-master/justify.js"></script>

        <!-- Subscript formatter -->
        <link rel="stylesheet" href="sir-trevor-formatters-master/subscript.css" media="all">
        <script src="sir-trevor-formatters-master/subscript.js"></script>

        <!-- Superscript formatter -->
        <link rel="stylesheet" href="sir-trevor-formatters-master/superscript.css" media="all">
        <script src="sir-trevor-formatters-master/superscript.js"></script>

        <!-- Clear formatter -->
        <link rel="stylesheet" href="sir-trevor-formatters-master/clear-format.css" media="all">
        <script src="sir-trevor-formatters-master/clear-format.js"></script>
    <!-- END FORMATTERS -->

        <script>
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

                window.editor = new SirTrevor.Editor({
                    el: $('#st')
                });
            });
        </script>
    </head>
    <body>
        <form>
            <textarea name="st" id="st" cols="30" rows="10"></textarea>
        </form>
    </body>
</html>
```

So this way you can complete base Sir Trefor formatter set! Try, report about bugs and issues, enjoy! =)
