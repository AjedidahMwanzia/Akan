

    var date = document.getElementById('date')
    var month = document.getElementById('month')
    var year = document.getElementById('year')
    var birthDay= new Date(year+ '/' +month + '/' + date)
    var dayOfWeek=birthDay.getDay()

    function validate(year,date,month){
       
        if (year.toString().length!=4){
            alert("input the correct year format");
            return false;
        }
        else if (date.toString().length<2){
            alert("input the correct month")
            return false;
        }
        else if (month.toString().length <2){
            alert("input the correct date")
            return false;
        }
        else{
            console.log("getName")
        }
       
    }
  
    document.getElementById("submitButton").addEventListener("click",function (){
       
        var date = document.getElementById('date').value
        var month = document.getElementById('month').value
        var year = document.getElementById('year').value
       
        var birthDay= new Date(year+ '-' +month + '-' + date)
       
        var dayOfWeek=birthDay.getDay()
       
    var gender = document.querySelector('input[name="gender"]:checked').value;
    
    

    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    
     validate(year,date,month)
   


    if (Number(date) <=0 && Number(date)>31){
        document.getElementById("result").innerHTML="Please enter a valid date!"
    }
    else if(Number(month)<0 && Number(month)>12){
        alert("Please enter a valid month!")
    }
    else if((gender != "female") && (gender != "male")){
        alert("Please select gender!")
    }
    else if (gender == "male"){
        document.getElementById("result").innerText="You were born on a "+ days[dayOfWeek]+" and "+" Your Akan name is "+maleName[dayOfWeek]
    }
    else if (gender == "female"){
        document.getElementById("result").innerText="You were born on a "+days[dayOfWeek]+" and "+" Your Akan name is "+femaleName[dayOfWeek]
    }
    else{document.getElementById("result").innerText=" Please check your input! "}
   
 } )
