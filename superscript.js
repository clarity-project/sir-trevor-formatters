/**
 * Note: superscript don't exist in markdown syntax - http://daringfireball.net/projects/markdown/syntax
 * Use ^^ as markdown wrapper
 */
var Superscript = SirTrevor.Formatter.extend({
    title: "SuperScript",
    cmd: "Superscript",
    text: "X",
    toMarkdown: function (markdown) {
        return markdown.replace(/<sup[^>]*>(.+?)<\/sup>/mg, '^^$1^^');
    },
    toHTML: function (html) {
        return html.replace(/\^\^(.+?)\^\^/mg, '<sup>$1</sup>');
    },
    isActive: function() {
        var selection = window.getSelection(),
            node;

        if (selection.rangeCount > 0) {
            node = selection.getRangeAt(0)
                .startContainer
                .parentNode;
        }

        return (node && node.nodeName == "SUP");
    }
});
