(function(){
    /**
     * Insert special char sir-trevor formatter
     * @require jQuery UI dialog plugin
     */
    var SpecialChars = SirTrevor.Formatter.extend({
        title: "",
        cmd: "insertText",
        text : "",
        char: null,
        chars: [
            '&cent;', '&copy;', '&divide;', '&gt;', '&lt;', '&ndash;', '&mdash;', '&iexcl;', '&iquest;', '&quot;',
            '&ldquo;', '&laquo;', '&raquo;', '&micro;', '&middot;', '&para;', '&plusmn;', '&euro;', '&pound;', '&reg;',
            '&sect;', '&trade;', '&yen;',
            '&beta;', '&alpha;', '&Omega;', '&Sigma;', '&Phi;', '&phi;', '&Psi;', '&omega;', '&pi;', '&mu;', '&lambda;', '&eta;', '&Delta;',
            '&aacute;', '&Aacute;', '&agrave;', '&Agrave;', '&acirc;', '&Acirc;', '&aring;', '&Aring;', '&atilde;', '&Atilde;', '&auml;', '&Auml;', '&aelig;', '&AElig;',
            '&ccedil;', '&Ccedil;',
            '&eacute;', '&Eacute;', '&egrave;', '&Egrave;', '&ecirc;', '&Ecirc;', '&euml;', '&Euml;',
            '&iacute;', '&Iacute;', '&Iacute;', '&igrave;', '&Igrave;', '&icirc;', '&Icirc;', '&iuml;', '&Iuml;',
            '&ntilde;', '&Ntilde;',
            '&oacute;', '&Oacute;', '&ograve;', '&Ograve;', '&ocirc;', '&Ocirc;', '&oslash;', '&Oslash;', '&otilde;', '&Otilde;', '&ouml;', '&Ouml;',
            '&szlig;',
            '&uacute;', '&Uacute;', '&ugrave;', '&Ugrave;', '&ucirc;', '&Ucirc;', '&uuml;', '&Uuml;',
            '&yuml;'
        ],

        template: _.template([
            '<div id="st-dialog" title="<%= i18n.t("general:special_char") %>">',
                '<table id="st-char-table" class="st-char-table"></table>',
            '</div>'
        ].join("\n")),

        getCharsHtml: function() {
            var html = '',
                row = '<td class="st-char-cell"><a href="#" class="st-char-select">__char__</a></td>';

            for (var i = 0; i < this.chars.length; i++) {
                var charRow = '';

                if (0 === i % 5) {
                    if (0 !== i) {
                        charRow += '</tr>';
                    }
                    charRow += '<tr>';
                }

                charRow += row.replace('__char__', this.chars[i]);

                html += charRow;
            }

            return html;
        },

        onClick: function() {

            this.lastselection = this.saveSelection();

            jQuery('body').append(this.template).find('#st-char-table').append(this.getCharsHtml());

            // Temporary hide SirTrevor formatter bar
            window.editor.formatBar.hide();

            var _self = this;

            jQuery('.st-char-select').on('click', function(e) {
                e.preventDefault();

                _self.char = jQuery(this).html();
                _self._onCharSelected();

                jQuery('#st-dialog').dialog('close');
            });

            jQuery('#st-dialog').dialog({
                modal: true,
                width: 500,
                height: 500,
                close: function(event, ui) {
                    jQuery('#st-dialog').remove();

                    // Return SirTrevor formatter bar
                    window.editor.formatBar.show();
                },
                buttons: {
                    Cancel: function() {
                        jQuery(this).dialog("close");
                    }
                }
            });
        },

        _onCharSelected: function () {
            // Restore previous selection of text to apply command
            this.restoreSelection(this.lastselection);

            document.execCommand(this.cmd, false, this.char);
        },

        isActive: function() {
            var selection = window.getSelection(),
                node;

            if (selection.rangeCount > 0) {
                node = selection.getRangeAt(0)
                    .startContainer
                    .parentNode;
            }

            var regex = /[^\w\s]/gi;
            return (node && regex.test(node.innerHTML));
        },

        saveSelection: function() {
            if (window.getSelection) {
                sel = window.getSelection();
                if (sel.getRangeAt && sel.rangeCount) {
                    return sel.getRangeAt(0);
                }
            } else if (document.selection && document.selection.createRange) {
                return document.selection.createRange();
            }
            return null;
        },

        restoreSelection: function(range) {
            if (range) {
                if (window.getSelection) {
                    sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                } else if (document.selection && range.select) {
                    range.select();
                }
            }
        }
    });
})();