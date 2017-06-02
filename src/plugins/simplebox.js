(function () {
    'use strict';

    /* istanbul ignore if */
    if (CKEDITOR.plugins.get('simplebox')) {
        return;
    }

    CKEDITOR.plugins.add('simplebox', {
        requires: 'widget',

        init: editor => {
            editor.addCommand('addSimpleBox', {
                exec: (editor, data) => {
                    editor.insertHtml(
                        `<div class="simplebox">
                <h2 class="simplebox-title">Title</h2>
                <div class="simplebox-content"><p>Content...
                <p>asDAdasd ASDFSFVXCVZXV</p>
                <p>AsdaSDasd asfdasda</p>
                <p>aSDasdasD asasasdf</p>
                <p>asdaDSasda ASDasd</p>
                </div>
                <div><p>Not editable...</p></div>
              </div>`
                    );
                },
            });

            editor.widgets.add('simplebox', {
                editables: {
                    title: {
                        selector: '.simplebox-title',
                    },
                    content: {
                        selector: '.simplebox-content',
                    },
                },

                upcast: element => {
                    return element.name == 'div' && element.hasClass('simplebox');
                },

                edit: a => {
                    console.log('Edit widget invoked');
                },
            });
        },
    });
}());