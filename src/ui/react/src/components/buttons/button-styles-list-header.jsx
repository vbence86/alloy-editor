(function () {
    'use strict';

    /**
     * The ButtonsStylesListHeader class provides the header of an list of style items.
     *
     * @class ButtonsStylesListHeader
     */
    var ButtonsStylesListHeader = React.createClass({
        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            if (this.props.styles && this.props.styles.length) {
                return (
                    <small className="alloy-editor-styles-list-header"><em>{this.props.name}</em></small>
                );
            } else {
                return null;
            }
        }
    });

    global.AlloyEditor.ButtonsStylesListHeader = ButtonsStylesListHeader;
}());