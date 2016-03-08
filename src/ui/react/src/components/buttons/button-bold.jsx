(function () {
    'use strict';

    var mix = AlloyEditor.OOP.mix;

    /**
     * The ButtonBold class provides functionality for styling an selection with strong (bold) style.
     *
     * @uses ButtonCommand
     * @uses ButtonKeystroke
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonBold
     */
    class ButtonBold extends mix(React.Component).with(AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses,AlloyEditor.ButtonCommand, AlloyEditor.ButtonKeystroke) {
        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps() {
            return {
                command: 'bold',
                keystroke: {
                    fn: 'execCommand',
                    keys: CKEDITOR.CTRL + 66 /*B*/
                },
                style: {
                    element: 'strong'
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
            var cssClass = 'ae-button ' + this.getStateClasses();

            return (
                <button aria-label={AlloyEditor.Strings.bold} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-bold" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.bold}>
                    <span className="ae-icon-bold"></span>
                </button>
            );
        }
    }

    // Allows validating props being passed to the component.
    ButtonBold.propTypes = {
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
    ButtonBold.statics = {
        /**
         * The name which will be used as an alias of the button in the configuration.
         *
         * @static
         * @property {String} key
         * @default bold
         */
        key: 'bold'
    };

    AlloyEditor.Buttons[ButtonBold.key] = AlloyEditor.ButtonBold = ButtonBold;
}());