(function () {
    'use strict';

    var mix = AlloyEditor.OOP.mix;

    /**
     * The ButtonDropdown class provides markup and keyboard navigation behaviour to a dropdown
     * opened from a button.
     *
     * @class ButtonDropdown
     */
    class ButtonDropdown extends mix(React.Component).with(AlloyEditor.WidgetFocusManager) {
        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         */
        getDefaultProps() {
            return {
                circular: false,
                descendants: '.ae-toolbar-element',
                keys: {
                    dismiss: [27],
                    dismissNext: [39],
                    dismissPrev: [37],
                    next: [40],
                    prev: [38]
                }
            };
        }

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @method render
         * @return {Object} The content which should be rendered.
         */
        render() {
            return (
                <div className="ae-dropdown ae-arrow-box ae-arrow-box-top-left" onFocus={this.focus} onKeyDown={this.handleKey} tabIndex="0">
                    <ul className="ae-listbox" role="listbox">
                        {this.props.children}
                    </ul>
                </div>
            );
        }
    }

    // Lifecycle. Provides static properties to the widget.
    ButtonDropdown.statics = {
        /**
         * The name which will be used as an alias of the dropdown in the configuration.
         *
         * @static
         * @property {String} key
         * @default dropdown
         */
        key: 'dropdown'
    };

    AlloyEditor.Buttons[ButtonDropdown.key] = AlloyEditor.ButtonDropdown = ButtonDropdown;
}());