function check(letMatch = 0, count = 1) {
    const sentence= document.querySelector("#sentence").value;
    const letter= document.querySelector("#letter").value;

    const sentLen= sentence.length;

    for (i = 0; i < sentLen; i++) {
      if(letter==0 ){
        alert("Empty!! Please Enter a Letter")
        exit; 
      }

      else if(sentence==letter){
        alert("Ohh! You Have Entered Same Sentence");
        exit;
      }

      else if(sentence.charAt(i) == letter) {
        letMatch++;
      }
      
      if(letMatch  == count) {
        break;
      }
    }

    if(i < sentLen - 1) {
      alert("The Result: " + sentence.substring(i + 1));
    } else {
      alert("The letter does not exist in the sentence");
    }
  }




  
