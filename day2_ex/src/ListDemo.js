import React, {useState} from "react";
import './App.css';

 
function MemberTable({members}) {

  return (
    <div className='App'>
    <table id='members'>
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        </thead>
      <tbody>
        <MemberDemo members={members}/>
      </tbody>
    </table>
    </div>
  );
};
 
function MemberDemo(props) {
  const members = props.members;
  return members.map((members) => {
    const { id, name, age} = members;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
    </tr>
      );
      });
}
 
export default function Member() {
  const initialMembers = [{id: 1, name : "Peter", age: 18},
                          {id: 2, name : "Hanne", age: 35},
                          {id: 3, name : "Janne", age: 25},
                          {id: 4, name : "Holger", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberTable members={members} />);
}
