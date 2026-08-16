const emojiSet = [
  "🐶", // dog
  "🐱", // cat
  "🐼", // panda
  "🦊", // fox
  "🐸", // frog
  "🐵", // monkey
  "🦁", // lion
  "🐯", // tiger
  "🐰", // rabbit
  "🐨", // koala
  "🍕", // pizza
  "🍔", // hamburger
  "🍩", // donut
  "🍉", // watermelon
  "🍓", // strawberry
  "🍎", // apple
  "🍦", // ice cream
  "🍪", // cookie
  "🌈", // rainbow
  "⭐", // star
  "🌙", // moon
  "🌸", // flower
  "🌵", // cactus
  "🔥", // fire
  "⚡", // lightning
  "💎", // diamond
  "🎁", // gift
  "🚀", // rocket
  "⚽", // soccer ball
  "🎮", // video game
  "🐷", // pig
  "🐮", // cow
  "🐔", // chicken
  "🦄", // unicorn
  "🐙", // octopus
  "🦋", // butterfly
  "🐢", // turtle
  "🐳", // whale
  "🍌", // banana
  "🍇", // grapes
  "🍒", // cherries
  "🥑", // avocado
  "🌻", // sunflower
  "☀️", // sun
  "☁️", // cloud
  "❄️", // snowflake
  "🌋", // volcano
  "👑", // crown
  "💡", // light bulb
  "🎯", // target
  "🎸", // guitar
  "🏀", // basketball
  "🏆", // trophy
  "🛸", // UFO
  "❤️", // heart
  "👻", // ghost
  "🤖", // robot
  "💩", // poop
  "🎈", // balloon
  "🧸", // teddy bear
  "🍀", // four leaf clover
  "🌍" // earth
];

const generateIcons = (count) => {
    const shuffled = [...emojiSet].sort(() => 0.5 - Math.random())

    return shuffled.slice(0,count)
}

export default generateIcons