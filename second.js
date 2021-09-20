const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];

const scoresGreaterThan85 = (array) => {
    const result = array.filter( (x) => x.scores >= 85)
    return result
}

console.log(scoresGreaterThan85(users))

//Always convert input

const addUser =(user)=>{
	let User = users.find(User => User.name.toLowerCase() === user.name.toLowerCase());
	if(!User){
		users.push(user);
        console.log(users)
	}else{
		console.log('user  exists')
	}
}

let x = {
		name:'s',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}

addUser(x)

const addUserSkill = (user) =>{
    let User = users.find(User => User.name.toLowerCase() === user.name.toLowerCase());
    if(User){
        User.skills.push(...user.skills)
        console.log("added")
        console.log(users)
    }else{
        console.log("user not found")
    }
}

let x = {
    name:'Brook',
    scores:90,
    skills:['HTML','add'],
    age:20
}

addUserSkill(x)

const editUser = (user) => {
    let User = users.find( User.name.toLowerCase() === user.name.toLowerCase())
    if(User){
        User.age = user.age
        User.scores = user.scores
        User.skills.push(...user.skills)
        console.log('added')
        console.log(users)
    }else{
        console.log("user not found")
    }
}

let x = {
    name:'Brook',
    scores:45,
    skills:['HTML','add'],
    age:101
}

editUser(x)