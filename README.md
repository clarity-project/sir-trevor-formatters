### How to use my extension

Correct way with jquery noConflict()

(function($){
    $(function(){
        SirTrevor.Formatters.SpecialChars = new SpecialChars();
    })
})(jQuery.noConflict());