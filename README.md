# UT-HW4-Code-Quiz

My code is able to generate the quiz, and accept input from the user. It also can verify the user's answer against the correct answer and apply the appropriate time penalty if it is incorrect. It then moves on to the next question if the user's answer is correct.

If the timer equals 0 or the user answers all the questions correctly, the quiz quits, displays the user's score, and asks for the user's initials.

However, here is where I ran into trouble. I could not get the javascript to listen for the submit event correctly. It either returns that the property is null, or performs the default action without calling the function within the event listener. 

Thus, I cannot store the user's initials in local storage, because the submit event is not being detected correctly. I feel like I have tried everything, but am at a complete loss.

URL: https://sircrouchalot.github.io/UT-HW4-Code-Quiz/

