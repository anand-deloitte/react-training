
 
const Userinfo = (prop) => <li>user info <UserMis mcount = {prop.count2}/></li>
const UserMis = (prop) => <li>user Mis {prop.mcount}</li>

 const User = (prop) => { return (<div>user name <Userinfo count2 ={prop.ucount}/> </div>)}
 export default User;
