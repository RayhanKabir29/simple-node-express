const express = require('express');
const cores =  require('cors');
const app = express();
const port = 5000;

 app.use(cores());
 app.use(express.json());
 app.get('/', (req, res)=>{
     res.send("Hello Node!. I am new Here");
 });
const users = [
    {id:0,name : 'Leanne Graham', username : 'Bret',email : 'Sincere@april.biz',phone : '0189087309',website : 'hildegard.org'},
    {id:1,name:'Ervin Howell',username:'Antonette',email:'Shanna@melissa.tv',phone:'0189097309',website:'anastasianet'},
    {id:2,name:'Clementine Bauch',username : 'Samantha"',email:'Nathan@yesenia.net',   phone : '0189057309', website : 'ramiro.info"'
    },
    {id:3,name : 'Patricia Lebsack"',username : 'Karianne',email : 'Julianne.OConner@kory.org', phone : '0189087305',website : 'kale.biz'
    },
    {id:4,name : 'Chelsey Dietrich"',username : 'Kamren',email:'Lucio_Hettinger@annie.ca',phone : '0189087302',website : 'demarco.info"'
    },
    {id:5,name : 'Mrs. Dennis Schulist',username : 'Leopoldo_Corkery',email : 'Karley_Dach@jasper.info',phone : '0189087409',website : 'ola.org'
      }
];

app.get('/users',(req, res)=>{
    res.send(users);
})

app.get('/users/:id', (req, res)=>{
  const id =req.params.id;
  const user = users[id];
  res.send(user);
});

app.get('/users',(req, res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(user);
    }
})

//app post

app.post('/users', (req, res)=>{
   const newUser= req.body;
   newUser.id = users.length;
   users.push(newUser);
   res.json(newUser);
})


 app.listen(port, ()=>{
     console.log('I am from Node', port);
 })