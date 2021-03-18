function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}
const app = Vue.createApp({

    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100
        }
    },
    methods: {
        // max damage 12 min 5
        attackMonster() {
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer()
        },
        // max damage 12 min 5
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.attackMonster();
        }
    }

});

app.mount('#game');