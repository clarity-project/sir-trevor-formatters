### How to use my extension


Don't forget about [sir-trevor](http://madebymany.github.io/sir-trevor-js/) editor first!

Following additional scripts and styles are required on your page:
```html
<!-- Require jquery ui with dialog plugin -->
<script src="http://code.jquery.com/ui/jquery-ui-git.js"></script>
<script src="./special-char.js"></script>

<link rel="stylesheet" href="http://code.jquery.com/ui/jquery-ui-git.css" media="all">
<link rel="stylesheet" href="./special-char.css" media="all">
```

Than just add formatter to sir-trevor formattres.

Correct way with jquery noConflict():
```javascript
(function($){
    $(function(){
        SirTrevor.Formatters.SpecialChars = new SpecialChars();
    })
})(jQuery.noConflict());
```
