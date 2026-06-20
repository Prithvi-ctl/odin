aTitle - Battle Ship TDD(Test Driven Development);
-> Components that are mainly involved in battel ship:
	battle ships -> n amount
	board -> n^2 or l*b area
-> Simple logic:
	-> both players place the ships
	->after that in turn they bomb the other grid where they can't see the ship
	-> if the bomb hits they get a bonus turn 
		else it's their opponent turn
	-> one bomb hit only destroys one component of the ship, mark it as X else mark it as bombed but not hit you can do a simple dot or just ( );
	-> for eg if a board was a size of 3 L then if the bomb should hit on the coords currently is in
	-> at the end the player who destroys all the bombs wins the game

-> The analogy is very simple.

Now let's do system design:

-> First and foremost i'm looking at modularity.
	-> divisible manageable parts able to be scaled with process and inputs
-> reliability
->readability that's it 

	-> 
Modules:
		SHIP -> Class 
			object that contains
			{ sunk : false;
				position:null; };
			methods:
				hit() -> how many times it has  been hit
				isSunk() -> if the ship has sunk or not

		Gameboard class/factory:
			-> object {
					ships: 0;
						winner:null;
						}
			-> gonna use sets so we can check if it has already been attacked or not and if already attacked cannot attack -> collisionDetection();
			-> place() -> should be able to place at specific coordinates
			-> winCondition() -> checking in every loop if the game has finished or not, or we can activate it after any one ship is being left.


-> Ai:
	for ai i think i'll place the ships randomly:


		-> This thing is gonna place boats randomly.
		-> but on the attacking side i need to be smart about it.
		-> i'm gonna hit randomly until i hit it .
			-> if it's hit what we are gonna do is to go to left or top or bottom or right of that , 
			-> if it hits right and it hits we are gonna go right again , 
				-> if it left we gonna go left again
				-> same for everyone
				-> and at last if we go left and it's not there we gonna go right or top like that and repeat until all the boats are hit
				-> and we are gonna send signal that a boat has been destroyed 
				-> after that we are gonna simply gonna go and clock in the randomly bit it alggorithm.
				-> or we can make better algorithms by putting strategy that the robot can advance. in , 
		-> that's the main idea
		