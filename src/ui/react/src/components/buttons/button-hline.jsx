(function () {
    'use strict';

    var mix = AlloyEditor.OOP.mix;

    /**
     * The ButtonHline class provides inserts horizontal line.
     *
     * @uses ButtonCommand
     * @uses ButtonStyle
     *
     * @class ButtonHline
     */
    class ButtonHline extends mix(React.Component).with(AlloyEditor.ButtonStyle, AlloyEditor.ButtonCommand) {
        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps() {
            return {
                command: 'horizontalrule',
                style: {
                    element: 'hr'
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
                <button aria-label={AlloyEditor.Strings.horizontalrule} className="ae-button" data-type="button-hline" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.horizontalrule}>
                    <span className="ae-icon-separator"></span>
                </button>
            );
        }
    }

    // Allows validating props being passed to the component.
    ButtonHline.propTypes = {
        /**
         * The editor instance where the component is being used.
         *
         * @property {Object} editor
         */
        editor: React.PropTypes.object.isRequired,

        /**
         * The label that should be used for accessibility purposes.
         *
         * @property {String} label
         */
        label: React.PropTypes.string,

        /**
         * The tabIndex of the button in its toolbar current state. A value other than -1
         * means that the button has focus and is the active element.
         *
         * @property {Number} tabIndex
         */
        tabIndex: React.PropTypes.number
    };

    // Lifecycle. Provides static properties to the widget.
    ButtonHline.statics = {
        /**
         * The name which will be used as an alias of the button in the configuration.
         *
         * @static
         * @property {String} key
         * @default hline
         */
        key: 'hline'
    };

    AlloyEditor.Buttons[ButtonHline.key] = AlloyEditor.ButtonHline = ButtonHline;
}());