new Vue({
    el: "#app",
    data: {
        player_heal: 100,
        monster_heal: 100,
        game_is_on: false
    },
    methods: {
        start_game: function () {
            this.game_is_on = true;
        },
        attack: function () {
            let point = Math.ceil(Math.random() * 10);
            this.monster_heal -= point;
            this.monster_attack()
        },
        special_attack: function () {
            let point = Math.ceil(Math.random() * 25);
            this.monster_heal -= point;
            this.monster_attack()
        },
        heal_up: function () {
            let point = Math.ceil(Math.random() * 20);
            this.player_heal += point;
            this.monster_attack()
        },
        give_up: function () {
            this.player_heal = 0;
        },
        monster_attack: function () {
            let point = Math.ceil(Math.random() * 15);
            this.player_heal -= point;
        }
    },
    watch: {
        player_heal: function (value) {
            if (value <= 0) {
                this.player_heal = 0;
                if (confirm("You LOST the game. Would you like to try again?")) {
                    this.player_heal = 100;
                    this.monster_heal = 100;
                }
            } else if (value >= 100) {
                this.player_heal = 100;
            }
        },
        monster_heal: function (value) {
            if (value <= 0) {
                this.monster_heal = 0;
                if (confirm("You have WON the game. Would you like to try again?")) {
                    this.player_heal = 100;
                    this.monster_heal = 100;
                }
            } else if (value >= 100) {
                this.monster_heal = 100;
            }
        }
    }
})