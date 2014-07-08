/**
 * @class
 * 
 * A VisualEdge is a visualization of a Graph edge; it describes how the edge is
 * to be drawn. Note that actual drawing logic is not part of this class
 * 
 * @param {VisualNode} sourceVisualNode One of the Nodes that is connected by
 *        this edge. sourceVisualNode.getNode() must either be the parent or the
 *        prev node of targetVisualNode.getNode()
 * @param {VisualNode} targetVisualNode One of the Nodes that is connected by
 *        this edge. targetVisualNode.getNode() must either be the child or the
 *        next node of sourceVisualNode.getNode()
 */
function VisualEdge(sourceVisualNode, targetVisualNode) {
    
    /** @private */
    this.sourceVisualNode = sourceVisualNode;
    
    /** @private */
    this.targetVisualNode = targetVisualNode;
    
    /** @private */
    this.width = 1;
    
    /** @private */
    this.dashLength = 0;
    
    /** @private */
    this.color = "#999";
    
    /** @private */
    this.opacity = 0.6;
}

/**
 * Gets the source VisualNode. The source VisualNode is the VisualNode connected
 * by this VisualEdge such that getSourceVisualNode().getNode() is either the
 * parent or the prev node of getTargetVisualNode().getNode()
 * 
 * @returns {VisualNode} The source VisualNode
 */
VisualEdge.prototype.getSourceVisualNode = function() {
    return this.sourceVisualNode;
};

/**
 * Gets the target VisualNode. The target VisualNode is the VisualNode connected
 * by this VisualEdge such that getTargetVisualNode().getNode() is either the
 * child or the next node the getSourceVisualNode().getNode()
 * 
 * @returns {VisualNode}
 */
VisualEdge.prototype.getTargetVisualNode = function() {
    return this.targetVisualNode;
};

/**
 * Gets the line width of this VisualEdge.
 * 
 * @returns {Number} The line width
 */
VisualEdge.prototype.getWidth = function() {
    return this.width;
};

/**
 * Sets the line width of this VisualEdge.
 * 
 * @param {Number} newWidth The new line width
 */
VisualEdge.prototype.setWidth = function(newWidth) {
    this.width = newWidth;
};

/**
 * Gets the dash length of the VisualEdge. A dash length of zero indicates that
 * this VisualEdge is not dashed
 * 
 * @returns {Number} The dash length. Always non-negative
 */
VisualEdge.prototype.getDashLength = function() {
    return this.dashLength;
};

/**
 * Sets the dash length of the VisualEdge. A dash length of zero indicates that
 * this VisualEdge is not dashed
 * 
 * @param {Number} newDashLength The new dash length. Must be non-negative
 */
VisualEdge.prototype.setDashLength = function(newDashLength) {
    if (newDashLength < 0) {
        throw new Exception("Dash length must be non-negative");
    }

    this.dashLength = newDashLength;
};

/**
 * Gets the color of the VisualEdge
 * 
 * @returns {String} The color.
 */
VisualEdge.prototype.getColor = function() {
    return this.color;
};

/**
 * Sets the color of the VisualEdge
 * 
 * @returns {String} The color. The color must be a
 *        string that parses to a valid SVG color as defined in
 *        http://www.w3.org/TR/SVG/types.html#WSP
 */
VisualEdge.prototype.setColor = function(newColor) {
    this.color = newColor;
};

/**
 * Gets the opacity of the VisualEdge
 * 
 * @returns {Number} The opacity. Will be between 0 and 1 inclusive
 */
VisualEdge.prototype.getOpacity = function() {
    return this.opacity;
};

/**
 * Sets the opacity of the VisualEdge
 * @param {Number} newOpacity The new opacity. Must be between 0 and 1 inclusive
 */
VisualEdge.prototype.setOpacity = function(newOpacity) {
    this.opacity = newOpacity;
};