(function (tree) {

tree.Expression = function (value) { this.value = value };
tree.Expression.prototype = {
    eval: function (env) {
        if (this.value.length > 1) {
            return new(tree.Expression)(tree.map.call(this.value, function (e) {
                return e.eval(env);
            }));
        } else if (this.value.length === 1) {
            return this.value[0].eval(env);
        } else {
            return this;
        }
    },
    toCSS: function (env) {
        return tree.map.call(this.value, function (e) {
            return e.toCSS ? e.toCSS(env) : '';
        }).join(' ');
    }
};

})(require('../tree'));
