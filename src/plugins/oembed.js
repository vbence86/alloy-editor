(function() {
    'use strict';

    if (CKEDITOR.plugins.get('ae_embed')) {
        return;
    }

    CKEDITOR.plugins.add(
        'ae_embed', {
        	requires: 'ae_jsonp',

            init: function(editor) {
            	editor.once('contentDom', function() {
                    editor.on('paste', this._onPaste, this, {
                        editor: editor
                    });
                }.bind(this));
            },

            _onPaste: function(event) {
            	var link = event.data.dataValue;
            	var editor = event.listenerData.editor;

            	function callback(event) {
            		var tpl = new CKEDITOR.template('<div style="width: 75%; margin-left: auto; margin-right: auto;">{html}</div>');

            		var content = tpl.output({
            			html: event.html
            		});

            		var el = CKEDITOR.dom.element.createFromHtml(content);

                    editor.insertElement(el);

                    var embedMediaData = {
                        data: event,
                        el: el
                    };

                    editor.fire('embedMedia', embedMediaData);
            	}

            	if (/https?/.test(link)) {
            		event.stop();

            		editor.JSONP.get('http://ckeditor.iframe.ly/api/oembed?url=' + encodeURIComponent(link), callback);
            	}
            }
        }
    );
}());
