Function.prototype.myBind = function(ctx) {
    return () => this.apply(ctx)
}

