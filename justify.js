/**
 * Note: justify don't exist in markdown syntax - http://daringfireball.net/projects/markdown/syntax
 */
(function($){
    $(function(){
        /**
         * Use %% as markdown wrapper for center justified text
         */
        var JustifyCenter = SirTrevor.Formatter.extend({
            title: "JustifyCenter",
            cmd: "justifyCenter",
            text: "Center",
            toMarkdown: function (markdown) {
                return markdown.replace(/<div[^"]+"text\\-align: center;\s*">(.+?)<\/[div][^>]+>/mg, '%%$1%%');
            },
            toHTML: function (html) {
                return html.replace(/%%(.+?)%%/mg, '<div style="text-align: center;">$1</div>');
            }
        });

        /**
         * Use && as markdown wrapper for right justified text
         */
        var JustifyRight = SirTrevor.Formatter.extend({
            title: "JustifyRight",
            cmd: "justifyRight",
            text: "Right ",
            toMarkdown: function (markdown) {
                return markdown.replace(/<div[^"]+"text\\-align: right;\s*">(.+?)<\/[div][^>]+>/mg, '&&$1&&');
            },
            toHTML: function (html) {
                return html.replace(/&&(.+?)&&/mg, '<div style="text-align: right;">$1</div>');
            }
        });

        var JustifyLeft = SirTrevor.Formatter.extend({
            title: "JustifyLeft",
            cmd: "justifyLeft",
            text: " Left"
        });
    })
})(jQuery.noConflict());
