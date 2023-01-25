

let requestURL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"



 fetch(requestURL)
 .then( response => response.json())
 .then(vvvv => populateList(vvvv));

let studentData = document.getElementById("studentData");
function populateList(studentList){
    let stringStudent = '';
    console.log(studentList);
    studentList.map((student) => {
        
        stringStudent += 
            `<tr>
                <td> ${student.fname} </td>
                <td> ${student.lname}</td>
                <td> ${student.address}</td>
                <td>${student.city}</td>
                <td>${student.tel}</td>

            </tr>`
    })
    studentData.innerHTML = stringStudent;
}


    



