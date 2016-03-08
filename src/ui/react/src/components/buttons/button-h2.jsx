(function () {
    'use strict';

    var mix = AlloyEditor.OOP.mix;

    /**
     * The ButtonH2 class provides wraps a selection in `h2` element.
     *
     * @uses ButtonActionStyle
     * @uses ButtonStateClasses
     * @uses ButtonStyle
     *
     * @class ButtonH2
     */
    class ButtonH2 extends mix(React.Component).with(AlloyEditor.ButtonStyle, AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonActionStyle) {
        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps() {
            return {
                style: {
                    element: 'h2'
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
                <button aria-label={AlloyEditor.Strings.h2} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-h2" onClick={this.applyStyle} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.h2}>
                    <span className="ae-icon-h2"></span>
                </button>
            );
        }
    }

    // Allows validating props being passed to the component.
    ButtonH2.propTypes = {
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
    ButtonH2.statics = {
        /**
         * The name which will be used as an alias of the button in the configuration.
         *
         * @static
         * @property {String} key
         * @default h2
         */
        key: 'h2'
    };

    AlloyEditor.Buttons[ButtonH2.key] = AlloyEditor.ButtonH2 = ButtonH2;
}());