import self from "../assets/Me.png"

export let colors = ["#b2aacf","#4791be" ];

export const info = {
    firstName: "Alex",
    lastName: "Vadean",
    initials: "Alex",
    position: "a Full Stack Web Developer 💻",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '📚',
            text: 'Student'
        },
        {
            emoji: '🌎',
            text: 'Living in Romania'
        }
    ],
}