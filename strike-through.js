/**
 * Use ~~ as markdown wrapper
 */
var StrikeThrough = SirTrevor.Formatter.extend({
    title: "strikethrough",
    cmd: "strikeThrough",
    text: "S",
    toMarkdown: function (markdown) {
        return markdown.replace(/<strike[^>]*>(.+?)<\/strike>/mg, '~~$1~~');
    },
    toHTML: function (html) {
        return html.replace(/~~(.+?)~~/mg, '<strike>$1</strike>');
    }
});
