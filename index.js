
//temp to store dragged image 
var draggedImage = null;

//select all fields that can be has image inside of it. (container)
var divs = document.querySelectorAll('.emptyZone');

//select all drag elements 
var imgs = document.querySelectorAll('.dragElement')


    //add eventlistener to all images
    imgs.forEach(img =>{

        img.addEventListener('dragstart' , ev=>{
            
            //Image that has been dragged 
            let selectedImage =  ev.target;
            
            //set draggedImageID variable 
            draggedImage  = selectedImage;
            
        });

    });

    

    //addevent listnener to all divs containers
    divs.forEach( div =>{

        div.addEventListener('dragover' ,ev =>{
            //allow to dragover div container (Enter div container)
            ev.preventDefault();
            
            //add class in case drag over the container
            ev.target.classList.add('hoverdContainer');
        });
            
        //when drag leaves 
        div.addEventListener('drop' , ev => {

           //select div
           let markedItem = ev.target;

            //boolean variable to check if targeted elemet is Image or not
           let isImage= markedItem.className.includes('option');

            //validaion for avoid multiple img append 
            if(isImage){


            //alert message 
            alert("not allowed");
                
            //exit function (don't do anything)
            return;

                //in case i
            }
            
            //code will execute if  isImage variable has false value

             //get number of childern from div container
             let numberOfChildern = markedItem.children.length;
                
            if(numberOfChildern > 0){

            //alert message 
            alert("not allowed");
                
            //exit function (don't do anything)
            return;

                //in case i
            }

            //remove hoverdContainer class after dropping element inside of it
            markedItem.classList.remove('hoverdContainer');


            try {
            //append dragged element into dropped div contanier
            markedItem.append(draggedImage);
            } catch (err) {
                console.log(err);
            }
           
        
        });

        //when dragleave div container 
        div.addEventListener('dragleave' , ev =>{
            
            //remove hoverdContainer class after leaving from div contanier
            ev.target.classList.remove('hoverdContainer');
            
        });

    });