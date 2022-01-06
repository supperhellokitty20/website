
// Handling style change while click
$(document).ready(function(){
    // Handle style changes in relation to clicks
    $('.item-list1 a').on('click', function(e){
        $('.item-list1 a').removeClass('active');
        $(e.currentTarget).addClass('active');
        $('.item-list1 li').removeClass('active');
        $('.item-list1 li').has('a.active').addClass('active');
    });

    $('.item-list2 a').on('click', function(e){
        $('.item-list3 a').removeClass('active');
        $(e.currentTarget).addClass('active');
        $('.item-list2 li').removeClass('active');
        $('.item-list2 li').has('a.active').addClass('active');
    });
    //Handling data change depend on project 
    const data = [
        { 
            name : "humix" , 
            frontend: "Arduino, JavaScript",
            backend: "N/A",
            database: "N/A",
            link: "<a href=''>Demo</a><a href=''>GitHub Repo</a>",
            field5: "",
            info1:
            "An arduino based devices , that track moisture in the area , and predict rain probability.",
            info2:
            "The project also have a different version that use ESP-32 wifi enabled controller to grab data on the internet",
            info3: "",
        }, 
        { 
            name : "moice" , 
            frontend: "Boostrap , HTML , JavaScript",
            backend: "peerjs",
            database: "N/A",
            link: "<a href=''>Demo</a><a href=''>GitHub Repo</a>",
            field5: "",
            info1:
            "Moice is a decentralize video and voice chat app",
            info2:
            "This application allow total peer to peer connection between users ",
            info3: "Also support  AR filter from SnapCam",
        }, 
        { 
            name : "pythonScraper" , 
            frontend: "N/A",
            backend: "python3",
            database: "N/A",
            link: "<a href=''>GitHub Repo</a>",
            field5: "",
            info1:
            "An instagram data collecting script",
            info2:
            "Build with the purpose to automate engagment on instagram",
            info3: "The script will auto reply for comment, auto follow users based on user target audience",
        }, 
        { 
            name : "70sHecking" , 
            frontend: "Boostrap , HTML , JavaScript",
            backend: "peerjs",
            database: "N/A",
            link: "<a href=''>Demo</a><a href=''>GitHub Repo</a>",
            field5: "",
            info1:
            "A retro inspired for this website",
            info2:
            "Build using pure HTML and CSS and js ",
            info3: ""  
        } 

    ] ;  
    //End data 
    $(".item-list a").on("click",function(e){
        //Get clicked item by comparing class name          
        const current_item = $(e.currentTarget).attr("id") ; 
        for(item in data){
            if(current_item == data[item].name){ 
                $(".item-stats").find(".frontend").html(data[item].frontend);
                $(".item-stats").find(".backend").html(data[item].backend);
                $(".item-stats").find(".database").html(data[item].database);
                $(".item-stats").find(".info1").html(data[item].info1);
                $(".item-stats").find(".info2").html(data[item].info2);
                $(".item-stats").find(".info3").html(data[item].info3);
            } 
        } 
    }) ;

});

