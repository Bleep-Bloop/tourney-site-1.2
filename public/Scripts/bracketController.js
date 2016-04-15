function do_things()
{
    var text_box = document.getElementById('typey_box');
    var results_box = document.getElementById('output');
    var text = text_box.value;
    var message = "string length is " + text.length;
    results_box.innerHTML = message;
}

//Making a button Generate Bracket that loops through and makes the text boxes
function generate_bracket()
{
   
    //Get number of members text box 
    var text_box1 = document.getElementById('numberOfMembers');
   
    //Get result text
    var results_box = document.getElementById('numberOfMemberTest');
    
    
    var numberOfMembers = text_box1.value;
    
    
    var message = numberOfMembers;
      
    
    var  contestantNumber = 1;
    
    //This is temp to check that all the boxes are being created
    results_box.innerHTML = message;
    
    for(i = 0; i < numberOfMembers; i++){
        var textBox = document.createElement("input");
        
        //Give each of the text boxes a unique element
        textBox.setAttribute("id", numberOfMembers);
        textBox.setAttribute("style", "background-color: red;" );
        
     
        textBox.setAttribute("id", "tier1-" + contestantNumber);
        
        document.body.appendChild(textBox);
        
        var contestantNumber = contestantNumber + 1;
        
        //TEMP
        var id = textBox.id;
        alert(id);
        
        var button = document.createElement("button");
        button.setAttribute("class", "fa fa-trophy");
      
             button.setAttribute("style", "color: gold;",  "padding-left: 50px;");
                
        
        document.body.appendChild(button);    
}
    
   
    //Second Tier
    for(i = 0; i < numberOfMembers / 2; i++){
        var textBox = document.createElement("input");
        
       //Give each of the text boxes a unique element
        textBox.setAttribute("id", "tier2-" + numberOfMembers);
        textBox.setAttribute("style", "background-color: blue;" );
        
        var id = textBox.id;
        alert(id);
        
        document.body.appendChild(textBox);
        
        
        var button = document.createElement("button");
        button.setAttribute("class", "fa fa-trophy");
      
          button.setAttribute("style", "color: gold;");
       
       
        document.body.appendChild(button);    
    }
    
    
    
    //Third tier
    for(i = 0; i < (numberOfMembers / 2) / 2; i++){
        var textBox = document.createElement("input");
        //Give each of the text boxes a unique element
        textBox.setAttribute("id", "tier3-" + numberOfMembers);
        textBox.setAttribute("style", "background-color: green;" );
        document.body.appendChild(textBox);
        
        var button = document.createElement("button");
        document.body.appendChild(button);
        button.setAttribute("class", "fa fa-trophy");
        
        var id = textBox.id;
        alert(id);
      
          button.setAttribute("style", "color: gold;");
            }
    
    
       for(i = 0; i < (numberOfMembers / 2) / 2 /2; i++){
        var textBox = document.createElement("input");
        //Give each of the text boxes a unique element
        textBox.setAttribute("id", numberOfMembers);
        textBox.setAttribute("style", "background-color: gold;" );
        document.body.appendChild(textBox);       
    }

}