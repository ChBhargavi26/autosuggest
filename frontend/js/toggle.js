var users = [
    {
        "name" : "John doe",
        "gender" : "male",
        "image" : "/images/john.png"
    },
    {
        "name" : "Jane doe",
        "gender" : "female",
        "image" : "/images/jane.png"
    }
]
var curId = 0;
function toggle(){
    //toggle cuId from 0 --> 1 & 1 --> 0
    curId = (curId+1)%2
    //toggle the rendered user details
    //image
    var user = users[ curId ];
    document.getElementById("user-img").src=user.image;
    //to do : update for name and gender
    //name
    document.getElementById("user-name").innerText=user.name;
    //gender
    document.getElementById("user-gender").innerText=user.gender;

}