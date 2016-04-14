GameStates.Game = function (game) {

};

GameStates.Game.prototype = {

    create: function () {
        //below code creates a simple tween animation. You will want to delete this when adding your code
        var logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        logo.scale.setTo(0.2, 0.2);
        this.add.tween(logo.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);
    },

    update: function () { },

    render: function () { },
};
