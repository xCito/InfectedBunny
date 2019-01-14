# Infected Bunny
Simulates a spreading infection amongst bunnies. Every bunny has an immunization strength which indicates if its immune system will prevent the bunny from getting infected. In the beginning, a random bunny on the grid gets infected. The virus/infection will have the strength of that chosen bunny's immune system. The infection will try to spread to neighbors above, below, left, and right. If the virus strength is greater than or equal to the immune system or the other bunny, it will infect. Then the newly infected bunnies will continue spreading the infection to their neighbors. This will continue until no other bunnies can get infected.

 _(inspired from google foobar challenge)._

 <img src="media/bunnyInfection.gif">


 _The line of bunnies on the right side of the screenshot is a representation of the datastructure I chose to use to make this possible._