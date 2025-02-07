# Sorting Hat

## OVERVIEW:
This app will assign a person randomly to one of the four Houses in Harry Potter. Once the user's name and title is submitted, a card appears with the House they have been sorted into! The user can then click the house image and will see the other students in their house as well as gain access to view the other students. There is an option to "Expel" a student which will place them into the "Death Eaters" category and take the user to view those students. Clicking the "Expel" button again will place the student card back into its appropriate house.

## DESCRIPTION OF USER:
- The ideal user of this app is someone looking to randomly assign someone to a predefined team.
- This app removes any biases in team assignments.
- The user can maintain a clear view of any teams and their members.
- The user can also remove someone from any team into a separate "team" that allows for greater organization.

## WALKTHROUGH OF THE SORTING HAT:
https://www.loom.com/share/88ec09a5c4c5416d873b52c328708c86?sid=bd1032df-f553-4d80-809f-0aee9c16c596

## DEPLOYED:
https://cpsortinghat.netlify.app/

## LESSONS LEARNED
- Gained an understanding of using a "renderToDom" utility to place HTML into a targeted div.
- A lot more about parameters.
- .classList.contains instead of .id.includes is sometimes necessary.
- parseInt converts(parses) a string and returns into an integer number.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    In my case: const id = parseInt(event.target.dataset.studentId);
- Using renderToDom to hide/show different elements at different events.
- The need to add and use an id in my body tag so the css could overwrite some styles that bootstrap forced in.
- Keeping things tidy with multiple folders, stylesheets, scripts, etc.
- Keeping notes, and detailing this readMe is imperative to learning progress. (And if I ever want to revisit the project)
- Always start with a plan! (I missed that part at first with this project)
- I'm absolutely not going to remember everything, even from one day to the next, and it's okay to question something you did previously.

## CONTRIBUTORS:
Christopher Pack
