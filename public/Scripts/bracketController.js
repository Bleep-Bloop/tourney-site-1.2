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
   
    
    
    //Changed code because we can hardcode 8 members
    
        //TEIR ONE FOR 2-1 stlye iD
        for(i = 0; i < 8; i++){
       
        var textBox = document.createElement("input");
            textBox.setAttribute("id", "id_" + i );
       
        document.body.appendChild(textBox);
        

        var button = document.createElement("button");
            button.setAttribute("class", "fa fa-trophy");
            button.setAttribute("id", "bid_" + i);
            button.setAttribute("onclick",   "top_player_win()");
       
        document.body.appendChild(button);    

    }//END TIER ONE FOR LOOP
    
    
    
    
    
    
    
    
    
    
    
    
    //Second Tier
    //for(i = 0l i <numberOfMembers / 2; i++)//this was for second tier when we could select number of members
    for(i = 0; i < 4; i++){
        
        var textBox = document.createElement("input");
            //textBox.setAttribute("id", numberOfMembers);
            textBox.setAttribute("id", "id2_" + i );
            textBox.setAttribute("style", "background-color: blue;" ); //TEMPORARY
            textBox.setAttribute("readOnly", true);
        
        document.body.appendChild(textBox);
        

        var button = document.createElement("button");
            button.setAttribute("class", "fa fa-trophy");
            button.setAttribute("id", "idbtn2_" + i );
            button.setAttribute("style", "color: gold;");

        document.body.appendChild(button);    

    }//END OF TIER TWO FOR LOOP
    
   
    
    //Third Tier
    for(i = 0; i < 2; i++){
        
        var textBox = document.createElement("input");
            textBox.setAttribute("readOnly", true);
            textBox.setAttribute("id", "id3_" + i );  
        
        document.body.appendChild(textBox);
        

        var button = document.createElement("button");
            button.setAttribute("id", "idbtn3_" + i );
            button.setAttribute("class", "fa fa-trophy");
            button.setAttribute("style", "color: gold;");
        
        document.body.appendChild(button);
      
    } //END OF TIER THREE FOR LOOP     
            
       
       //Final Tier - Winner Box
    for(i = 0; i < 1; i++){
        
        var textBox = document.createElement("input");
            textBox.setAttribute("id", "winnerBox");
            textBox.setAttribute("readOnly", true);
        
        document.body.appendChild(textBox);       

    }//END OF FINAL TIER FOR LOOP
    

}//END Generate_Bracket()
