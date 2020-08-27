new Vue({

	el: '#app',


	data:{
		monsterHealth : 100,
		myHealth : 100,
		gameIsOn : false,
		turns : []
	},


	methods:{

		startGame : function(){
			this.monsterHealth = 100;
			this.myHealth = 100;
			this.gameIsOn = true;
		},

		resetGame: function(){
			this.monsterHealth = 100;
			this.myHealth  = 100;
			this.gameIsOn = false;
			this.turns = []
		},

		attack: function(){
			this.monsterAttack();
			let damage = this.damageCalculate(3,10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer : true,
				text : 'Player hits Monster for ' + damage 
			});
			this.checkWin();
			console.log(this.turns);
		},

		monsterAttack: function(){
			let damage = this.damageCalculate(8,15);
			this.myHealth -= damage;
			this.turns.unshift({
				isPlayer : false,
				text : 'Monster hits Player for ' + damage 
			})
		},

		specialAttack: function(){
			this.monsterAttack();
			let damage = this.damageCalculate(10,20);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer : true,
				text : 'Player hits Monster hard for ' + damage 
			});
			this.checkWin();
		},

		heal: function(){
			if(this.myHealth <= 90){
				this.myHealth += 10;
			}else{
				this.myHealth = 100;
			}
			this.monsterAttack();
			this.turns.unshift({
				isPlayer : true,
				text : 'Player Heals for ' + 10
			});
		},

		damageCalculate : function(min,max){
			let damage = Math.max(Math.floor(Math.random()* max) + 1 , min);
			return damage;
		},

		checkWin:function(){
			if(this.monsterHealth <= 0){
				if(confirm('You win! New Game?')){
					this.resetGame();
				}	
			}
			else if (this.myHealth <= 0) {
				if(confirm('You lost! New Game?')){
					this.resetGame();
				}	
			}
		}

	}


});