// Not from freecodecamp. Just ChatGPT to learn about data structures. I asked it to give me an example of a linked list
//^ LEARNING ABOUT LINKED LISTS
//! I did not code below....I only read through to try understanding what linked lists may look like. I did practice by adding a coach class

// Define a class for a player on the team
class Player {
    constructor(name, position, jerseyNumber) {
        this.name = name;
        this.position = position;
        this.jerseyNumber = jerseyNumber;
        this.next = null; // Pointer to the next player in the roster, initially set to null
    }
}

//$ I am adding a coach class 
class Coach {
    constructor(name, title) { // "the constructor() function is used to initialize objects created from those classes"
        this.name = name;
        this.title = title;
        this.next = null;
    }
}

// Define the TeamRoster class
// Why do we need this.head? Because we "need to keep track of the first player in the roster (via this.head) in order to traverse the linked list of players and perform operations such as adding players, removing players, or printing the roster."
class TeamRoster {
    constructor() {
        this.head = null; // Pointer to the first player in the roster, initially set to null
    }

    // Method to add a new player to the roster
    addPlayer(name, position, jerseyNumber) {
        const newPlayer = new Player(name, position, jerseyNumber); // Create a new player
        if (!this.head) {
            this.head = newPlayer; // If the roster is empty, set the new player as the head
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Traverse the roster to find the last player
            }
            current.next = newPlayer; // Set the new player as the next player of the last player
        }
    }

    // Method to print the players in the roster
    printRoster() {
        let current = this.head;
        while (current) {
            console.log(`Name: ${current.name}, Position: ${current.position}, Jersey Number: ${current.jerseyNumber}`);
            current = current.next; // Move to the next player
        }
    }
}

// Example usage:
const teamRoster = new TeamRoster();
teamRoster.addPlayer("John Doe", "Forward", 10);
teamRoster.addPlayer("Jane Smith", "Midfielder", 7);
teamRoster.addPlayer("Michael Johnson", "Goalkeeper", 1);
teamRoster.printRoster();
