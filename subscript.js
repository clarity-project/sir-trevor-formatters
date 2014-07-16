(function($){
    $(function(){
        /**
         * Note: subscript don't exist in markdown syntax - http://daringfireball.net/projects/markdown/syntax
         * Use @@ as markdown wrapper
         */
        var Subscript = SirTrevor.Formatter.extend({
            title: "SubScript",
            cmd: "Subscript",
            text: "X",
            toMarkdown: function (markdown) {
                return markdown.replace(/<sub[^>]*>(.+?)<\/sub>/mg, '@@$1@@');
            },
            toHTML: function (html) {
                return html.replace(/@@(.+?)@@/mg, '<sub>$1</sub>');
            },
            isActive: function() {
                var selection = window.getSelection(),
                    node;

                if (selection.rangeCount > 0) {
                    node = selection.getRangeAt(0)
                        .startContainer
                        .parentNode;
                }

                return (node && node.nodeName == "SUB");
            }
        });
    })
})(jQuery.noConflict());