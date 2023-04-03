// Dichiarazione array oggetti
const team = [
    {
        memberName : 'Wayne Barnett',
        role : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg'
    },

    {
        memberName : 'Angela Caroll',
        role : 'Chief Editor',
        image : 'angela-caroll-chiet-editor.jpg'
    },

    {
        memberName : 'Walter Gordon',
        role : 'Office Manager',
        image : 'walter-gordon-office-manager.jpg'
    },

    {
        memberName : 'Angela Lopez',
        role : 'Social Media',
        image : 'angela-lope7-social-media-manager.jpg'
    },

    {
        memberName : 'Angela Caroll',
        role : 'Chief Editor',
        image : 'angela-caroll-chiet-editor.jpg'
    },

    {
        memberName : 'Scott Estrada',
        role : 'Developer',
        image : 'scott-estrada-developer.jpg'
    },

    {
        memberName : 'Barbara Ramosa',
        role : 'Graphic Designer',
        image : 'barbara-ramos-graphic-designer.jpg'
    }
]

const list = document.getElementById('memberList');

// Ciclo per stampare
for (let i in team) {
   const member = team[i];
   console.log(member);
   for (let key in member) {
    if (key === "image") {
        list.innerHTML += `<li> <img src="assets/img/${member[key]}"> </li>`
    } else {
        list.innerHTML += `<li> ${key}: ${member[key]} </li>`
    }
   }
   list.innerHTML += `<li> ****************** </li>`
}