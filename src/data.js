

import image1 from "./design/destinations/image-moon.png"
import image2 from "./design/destinations/image-moon.webp"
import image3 from "./design/destinations/image-mars.png"
import image4 from "./design/destinations/image-mars.webp"
import image5 from "./design/destinations/image-europa.png"
import image6 from "./design/destinations/image-europa.webp"
import image7 from "./design/destinations/image-titan.png"
import image8 from "./design/destinations/image-titan.webp"



const destinationData = [
      {
        "id": 0,
        "name": "Moon",
        "images": {
          "png": image1,
          "webp": image2
        },
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
      },
      {
        "id": 1,
        "name": "Mars",
        "images": {
          "png": image3,
          "webp": image4
        },
        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
      },
      {
        "id": 2,
        "name": "Europa",
        "images": {
          "png": image5,
          "webp": image6
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
      },
      {
        "id": 3,
        "name": "Titan",
        "images": {
          "png": image7,
          "webp": image8
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
      }
    ]

    export default destinationData