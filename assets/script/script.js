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

// Ciclo per stampare
for (let key in team) {
    const member = team[key];
    console.log(member);
}