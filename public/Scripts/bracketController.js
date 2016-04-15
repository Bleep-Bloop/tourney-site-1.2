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
    
    
    //Changed code because we can hardcode 8 members
    
    //TEST TEIR FOR 2-1 stlye iD
        for(i = 0; i < 8; i++){
        var textBox = document.createElement("input");

        //Give each of the text boxes a unique element
      //just commented this rn  textBox.setAttribute("id", numberOfMembers);
      //  textBox.setAttribute("style", "background-color: red;" );
       // textbox.setAttribute("style", "padding: 25px;");
       // textbox.style.setAttribute("width", "1000px");
     
        //textBox.setAttribute("id", "tier1-" + contestantNumber);
                    //textBox.setAttribute("id", "tier1" + i);
        textBox.setAttribute("id", "id_" + i );
       //    document.getElementById("tier1").style.padding = "50px";
        
        document.body.appendChild(textBox);
        

        var contestantNumber = contestantNumber + 1;
        
        //TEMP
        //var id = textBox.id;
        //alert(id);
        
        var button = document.createElement("button");
        button.setAttribute("class", "fa fa-trophy");
        button.setAttribute("id", "id_" + i);
       // var bid = button.id;
        //alert(bid);
      //       button.setAttribute("style", "color: gold;",  "padding-left: 50px;");
                
        
        document.body.appendChild(button);    
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   /* 
    
    
    
    
    //CREATE FIRST TIER
    //for(i = 0l i <numberOfMembers; i++)//this was for when we could select number of members
    for(i = 0; i < 8; i++){
        var textBox = document.createElement("input");
        
        //Give each of the text boxes a unique element
      //just commented this rn  textBox.setAttribute("id", numberOfMembers);
        //textBox.setAttribute("style", "background-color: red;" );
       // textbox.setAttribute("style", "padding: 25px;");
       // textbox.style.setAttribute("width", "1000px");
     
        //textBox.setAttribute("id", "tier1-" + contestantNumber);
        textBox.setAttribute("id", "tier1");
        
       //    document.getElementById("tier1").style.padding = "50px";

        textBox.setAttribute("id", "contestant" + contestantNumber);

        
        document.body.appendChild(textBox);
        
        var contestantNumber = contestantNumber + 1;
        
        //TEMP
        //var id = textBox.id;
        //alert(id);
        

        
    }

        var button = document.createElement("button");
        button.setAttribute("class", "fa fa-trophy");
      
             button.setAttribute("style", "color: gold;",  "padding-left: 50px;");
                
        
        document.body.appendChild(button);    
}

    */

   
    //Second Tier
    //for(i = 0l i <numberOfMembers / 2; i++)//this was for second tier when we could select number of members
    for(i = 0; i < 4; i++){
        var textBox = document.createElement("input");

        //Give each of the text boxes a unique element
        textBox.setAttribute("id", numberOfMembers);
        textBox.setAttribute("style", "background-color: blue;" );
        document.body.appendChild(textBox);
        

        
       //Give each of the text boxes a unique element
        //textBox.setAttribute("id", "tier2-" + numberOfMembers);
        //textBox.setAttribute("id", "tier2");
        //textBox.setAttribute("style", "background-color: blue;" );
        textBox.setAttribute("id", "id2_" + i );
        
        
        ////var id = textBox.id;
        //alert(id);
        
        document.body.appendChild(textBox);
        
        
        var button = document.createElement("button");
        button.setAttribute("class", "fa fa-trophy");
        button.setAttribute("id", "idbtn2_" + i );
      
          button.setAttribute("style", "color: gold;");
       
       //var bid = button.id;
        //alert(bid);
       
        document.body.appendChild(button);    

    }
    
   
    
    //Third tier
    for(i = 0; i < 3; i++){
        var textBox = document.createElement("input");
        //Give each of the text boxes a unique element
    //    textBox.setAttribute("id", "tier3");
       // textBox.setAttribute("style", "background-color: green;" );
      textBox.setAttribute("id", "id3_" + i );  
        
        document.body.appendChild(textBox);
        

    }

        var button = document.createElement("button");
        button.setAttribute("id", "idbtn3_" + i );
        document.body.appendChild(button);
        button.setAttribute("class", "fa fa-trophy");
        
        //var id = textBox.id;
        //alert(id);
      
          button.setAttribute("style", "color: gold;");

          
            
        //var id = textBox.id;
        //alert(id);
        
    }

            

    /* 
       for(i = 0; i < 1; i++){
        var textBox = document.createElement("input");
        //Give each of the text boxes a unique element
        textBox.setAttribute("id", numberOfMembers);
        textBox.setAttribute("style", "background-color: gold;" );

        document.body.appendChild(textBox);       

        document.body.appendChild(textBox);

            

    }
    

    

        //var id = textBox.id;
        //alert(id);
        
    }

*/

