import { v4 as uuidv4 } from "uuid";

const ChillHope = () => {
    return [
        {
            names: "Lose Her Way",
            artist: "CYGN",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/8cc8bdc59b30dd1f9d401cb485b8537d909e1f50-150x150.jpg",
            id: uuidv4(),
            active: true,
            color: ["#3B5534", "#C2C9DE"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=28901",
        },
        

        {
            names: "Parasol",
            artist: "Plusma,Thomas Renwick",
            cover: "https://i.scdn.co/image/ab67616d0000b273b09ada4b5c5651dd37acb44d",
            id: uuidv4(),
            active: false,
            color: ["#3B5534", "#C2C9DE"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=31612",
        },

        {
            names: "Rewind",
            artist: "SwuM, afternoon bike ride",
            cover: "https://chillhop.com/wp-content/uploads/2021/12/b3079408b79f0ceed3189d6eb804b448fa0c4068-150x150.jpg",
            id: uuidv4(),
            active: false,
            color: ["#3B5534", "#C2C9DE"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=28901",
        },

        {
            names: "Leaf Contour",
            artist: "Sleepy Fish",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/e21760a2e6450015317e20f65dbba27237099f34-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#3B5534", "#C2C9DE"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=31612",
        },

        {
            names: "Perfect Storm",
            artist: "Aviino",
            cover: "https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ["#3B5534", "#C2C9DE"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=23057",
        },

       


    ];
};


export default ChillHope;

