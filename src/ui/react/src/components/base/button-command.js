(function() {
    'use strict';

    /**
     * ButtonCommand is a mixin that executes a command via CKEDITOR's API.
     *
     * @class ButtonCommand
     */
    let ButtonCommand = (superclass) => class extends superclass {
        /**
         * Executes a CKEditor command and fires `actionPerformed` event.
         *
         * @param {Object=} data Optional data to be passed to CKEDITOR's `execCommand` method.
         *
         * @method execCommand
         */
        execCommand(data) {
            var editor = this.props.editor.get('nativeEditor');

            editor.execCommand(this.props.command, data);

            if (this.props.modifiesSelection) {
                editor.selectionChange(true);
            }

            editor.fire('actionPerformed', this);
        }
    };

    ButtonCommand.propTypes = {
        /**
         * The command that should be executed.
         *
         * @property {String} command
         */
        command: React.PropTypes.string.isRequired,

        /**
         * Indicates that the command may cause the editor to have a different.
         *
         * @property {boolean} modifiesSelection
         */
        modifiesSelection: React.PropTypes.bool
    };

    AlloyEditor.ButtonCommand = ButtonCommand;
}());