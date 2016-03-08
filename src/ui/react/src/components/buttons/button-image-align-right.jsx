(function () {
    'use strict';

    var mix = AlloyEditor.OOP.mix;

    /**
     * The ButtonImageAlignRight class provides functionality for aligning an image on right.
     *
     * @uses ButtonCommand
     * @uses ButtonCommandActive
     * @uses ButtonStateClasses
     *
     * @class ButtonImageAlignRight
     */
     class ButtonImageAlignRight extends mix(React.Component).with(AlloyEditor.ButtonStateClasses, AlloyEditor.ButtonCommand, AlloyEditor.ButtonCommandActive) {
        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         *
         * @method getDefaultProps
         * @return {Object} The default properties.
         */
        getDefaultProps() {
            return {
                command: 'justifyright'
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
                <button aria-label={AlloyEditor.Strings.alignRight} aria-pressed={cssClass.indexOf('pressed') !== -1} className={cssClass} data-type="button-image-align-right" onClick={this.execCommand} tabIndex={this.props.tabIndex} title={AlloyEditor.Strings.alignRight}>
                    <span className="ae-icon-align-right"></span>
                </button>
            );
        }
    }

    // Allows validating props being passed to the component.
    ButtonImageAlignRight.propTypes = {
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
    ButtonImageAlignRight.statics = {
        /**
         * The name which will be used as an alias of the button in the configuration.
         *
         * @static
         * @property {String} key
         * @default imageRight
         */
        key: 'imageRight'
    };

    AlloyEditor.Buttons[ButtonImageAlignRight.key] = AlloyEditor.ButtonImageAlignRight = ButtonImageAlignRight;
}());