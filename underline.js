(function($){
    $(function(){
        /**
         * Note: underline emphasis don't exist in markdown syntax - http://daringfireball.net/projects/markdown/syntax
         * Use ++ as markdown wrapper
         */
        var Underline = SirTrevor.Formatter.extend({
            title: "underline",
            cmd: "underline",
            text: "U",
            toMarkdown: function (markdown) {
                return markdown.replace(/<u[^>]*>(.+?)<\/u>/mg, '++$1++');
            },
            toHTML: function (html) {
                return html.replace(/\+\+(.+?)\+\+/mg, '<u>$1</u>');
            }
        });
    })
})(jQuery.noConflict());